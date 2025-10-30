import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { useRoute, Link } from "wouter";
import { ArrowLeft, ShoppingCart, Loader2, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const { isAuthenticated } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const productId = params?.id ? parseInt(params.id) : null;
  const { data: product, isLoading } = trpc.products.getById.useQuery(
    { id: productId || 0 },
    { enabled: !!productId }
  );

  const addToCart = trpc.cart.addItem.useMutation();

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      alert("請先登入");
      return;
    }

    if (!product) return;

    setIsAdding(true);
    try {
      await addToCart.mutateAsync({ productId: product.id, quantity });
      alert("已添加到購物車");
      setQuantity(1);
    } catch (error) {
      alert("添加失敗，請重試");
    } finally {
      setIsAdding(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">找不到商品</p>
        <Link href="/products">
          <Button>返回商品列表</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-40">
        <div className="container max-w-6xl">
          <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>返回商品列表</span>
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <main className="py-12 px-4">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-[#e0f7f4] to-[#f0fffe] rounded-lg h-96 flex items-center justify-center overflow-hidden">
              {(product.name?.includes('膠原') || product.name?.includes('蔓越莓')) ? (
                <img 
                  src={product.name?.includes('膠原') ? "/w-trust-product-1.png" : "/w-trust-product-2.png"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-8xl mb-4">💚</div>
                  <p className="text-gray-600">{product.category}</p>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">
                    NT${product.price}
                  </span>
                </div>
                <div className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `庫存: ${product.stock}` : '缺貨'}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    數量
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-0 py-2 focus:outline-none"
                      min="1"
                      max={product.stock}
                    />
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  size="lg"
                  className="w-full"
                  disabled={product.stock === 0 || isAdding}
                  onClick={handleAddToCart}
                >
                  {isAdding ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <ShoppingCart className="w-5 h-5 mr-2" />
                  )}
                  {product.stock === 0 ? '缺貨' : '加入購物車'}
                </Button>

                <Link href="/cart" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    前往購物車
                  </Button>
                </Link>
              </div>

              {/* Assessment Link for Silver Trust */}
              {product.id === 1 && (
                <Link href="/silver-trust-assessment" className="block">
                  <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    查看配方適配性評估
                  </Button>
                </Link>
              )}

              {/* Product Benefits */}
              <div className="bg-[#f0fffe] p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-gray-900">產品特色</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>天然成分，安心食用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>科學驗證，效果可靠</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>為銀髮量身打造</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>支持你的活力修復之旅</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

