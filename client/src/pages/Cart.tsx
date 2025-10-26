import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Trash2, Loader2, Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Cart() {
  const { isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const { data: cartItems, isLoading, refetch } = trpc.cart.getItems.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const removeItem = trpc.cart.removeItem.useMutation({
    onSuccess: () => refetch(),
  });

  const updateQuantity = trpc.cart.updateQuantity.useMutation({
    onSuccess: () => refetch(),
  });

  // Initialize quantities
  useEffect(() => {
    if (cartItems) {
      const newQuantities: { [key: number]: number } = {};
      cartItems.forEach((item) => {
        newQuantities[item.id] = item.quantity;
      });
      setQuantities(newQuantities);
    }
  }, [cartItems]);

  const handleUpdateQuantity = async (cartItemId: number, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [cartItemId]: newQuantity }));
    await updateQuantity.mutateAsync({ cartItemId, quantity: newQuantity });
  };

  const handleRemove = async (cartItemId: number) => {
    await removeItem.mutateAsync({ cartItemId });
  };

  const total = cartItems?.reduce((sum, item) => {
    return sum + (parseFloat(item.quantity.toString()) * parseFloat(item.quantity.toString()));
  }, 0) || 0;

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="container max-w-6xl">
          <Link href="/products" className="inline-flex items-center gap-2 mb-4 text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>繼續購物</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            購物車
          </h1>
        </div>
      </div>

      {/* Cart Content */}
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
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-6 flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-[#e0f7f4] to-[#f0fffe] rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-3xl">💚</div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        商品 ID: {item.productId}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        單價: NT${(item.quantity * 100).toFixed(0)}
                      </p>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, Math.max(1, quantities[item.id] - 1))}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <input
                          type="number"
                          value={quantities[item.id] || item.quantity}
                          onChange={(e) => {
                            const val = Math.max(1, parseInt(e.target.value) || 1);
                            setQuantities((prev) => ({ ...prev, [item.id]: val }));
                          }}
                          onBlur={() => handleUpdateQuantity(item.id, quantities[item.id] || item.quantity)}
                          className="w-12 text-center border border-gray-300 rounded py-1 focus:outline-none focus:ring-2 focus:ring-primary"
                          min="1"
                        />
                        <button
                          onClick={() => handleUpdateQuantity(item.id, quantities[item.id] + 1)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right flex flex-col items-end justify-between">
                      <p className="text-lg font-semibold text-primary">
                        NT${((quantities[item.id] || item.quantity) * 100).toFixed(0)}
                      </p>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-600 hover:text-red-700 transition-colors p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 sticky top-20">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    訂單摘要
                  </h2>

                  <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>小計</span>
                      <span>NT${total.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>運費</span>
                      <span>待確認</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-semibold text-gray-900 mb-6">
                    <span>總計</span>
                    <span className="text-primary">NT${total.toFixed(0)}</span>
                  </div>

                  <Link href="/checkout" className="block">
                    <Button size="lg" className="w-full">
                      前往結帳
                    </Button>
                  </Link>

                  <Link href="/products" className="block mt-3">
                    <Button variant="outline" size="lg" className="w-full">
                      繼續購物
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

