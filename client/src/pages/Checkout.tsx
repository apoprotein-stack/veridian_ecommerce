import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Checkout() {
  const { isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    shippingAddress: "",
    shippingMethod: "standard",
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const { data: cartItems, isLoading } = trpc.cart.getItems.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const createOrder = trpc.orders.create.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.shippingAddress.trim()) {
      alert("請填寫收貨地址");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await createOrder.mutateAsync({
        shippingAddress: formData.shippingAddress,
        shippingMethod: formData.shippingMethod,
      });

      setOrderId(result.orderId);
      setOrderPlaced(true);
    } catch (error) {
      alert("訂單建立失敗，請重試");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (orderPlaced && orderId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#e0f7f4] to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            訂單已成立！
          </h1>
          <p className="text-gray-600 mb-2">
            感謝妳的購買
          </p>
          <p className="text-2xl font-semibold text-primary mb-6">
            訂單編號: #{orderId}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">訂單詳情</h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">收貨地址:</span> {formData.shippingAddress}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">配送方式:</span> {formData.shippingMethod === "standard" ? "標準配送" : "快速配送"}
            </p>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            我們會盡快為妳準備商品並寄出。妳可以在帳戶中查看訂單狀態。
          </p>

          <div className="space-y-3">
            <Link href="/" className="block">
              <Button size="lg" className="w-full">
                返回首頁
              </Button>
            </Link>
            <Link href="/products" className="block">
              <Button variant="outline" size="lg" className="w-full">
                繼續購物
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const total = cartItems?.reduce((sum, item) => {
    return sum + (item.quantity * 100);
  }, 0) || 0;

  const shippingCost = formData.shippingMethod === "express" ? 200 : 60;
  const grandTotal = total + shippingCost;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="container max-w-6xl">
          <Link href="/cart" className="inline-flex items-center gap-2 mb-4 text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>返回購物車</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            結帳
          </h1>
        </div>
      </div>

      {/* Checkout Content */}
      <main className="py-12 px-4">
        <div className="container max-w-4xl">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : !cartItems || cartItems.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-gray-600 text-lg mb-6">購物車是空的</p>
              <Link href="/products">
                <Button>返回商品列表</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Shipping Address */}
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      收貨資訊
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                          收貨地址 *
                        </label>
                        <textarea
                          id="address"
                          value={formData.shippingAddress}
                          onChange={(e) =>
                            setFormData({ ...formData, shippingAddress: e.target.value })
                          }
                          placeholder="請輸入完整的收貨地址"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          rows={3}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      配送方式
                    </h2>

                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" style={{borderColor: formData.shippingMethod === "standard" ? "#1ab8a8" : ""}}>
                        <input
                          type="radio"
                          name="shipping"
                          value="standard"
                          checked={formData.shippingMethod === "standard"}
                          onChange={(e) =>
                            setFormData({ ...formData, shippingMethod: e.target.value })
                          }
                          className="w-4 h-4"
                        />
                        <div className="ml-3 flex-1">
                          <p className="font-medium text-gray-900">標準配送</p>
                          <p className="text-sm text-gray-600">3-5 個工作天</p>
                        </div>
                        <p className="font-semibold text-gray-900">NT$60</p>
                      </label>

                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" style={{borderColor: formData.shippingMethod === "express" ? "#1ab8a8" : ""}}>
                        <input
                          type="radio"
                          name="shipping"
                          value="express"
                          checked={formData.shippingMethod === "express"}
                          onChange={(e) =>
                            setFormData({ ...formData, shippingMethod: e.target.value })
                          }
                          className="w-4 h-4"
                        />
                        <div className="ml-3 flex-1">
                          <p className="font-medium text-gray-900">快速配送</p>
                          <p className="text-sm text-gray-600">1-2 個工作天</p>
                        </div>
                        <p className="font-semibold text-gray-900">NT$200</p>
                      </label>
                    </div>
                  </div>

                  {/* Order Items Summary */}
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      訂單商品
                    </h2>

                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-gray-600">
                          <span>商品 #{item.productId} x {item.quantity}</span>
                          <span>NT${(item.quantity * 100).toFixed(0)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    ) : null}
                    確認訂單
                  </Button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 sticky top-20">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    訂單摘要
                  </h2>

                  <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>商品小計</span>
                      <span>NT${total.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>運費</span>
                      <span>NT${shippingCost.toFixed(0)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-semibold text-gray-900 mb-6">
                    <span>總計</span>
                    <span className="text-primary">NT${grandTotal.toFixed(0)}</span>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                    <p className="font-medium mb-2">💳 付款方式</p>
                    <p>目前支持銀行轉帳、信用卡等多種付款方式。訂單確認後，我們會提供付款詳情。</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

