import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { ArrowLeft, ShoppingCart, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const { isAuthenticated } = useAuth();
  const { data: products, isLoading } = trpc.products.list.useQuery();
  const [addingToCart, setAddingToCart] = useState<number | null>(null);
  const addToCart = trpc.cart.addItem.useMutation();

  const handleAddToCart = async (productId: number) => {
    if (!isAuthenticated) {
      alert("請先登入");
      return;
    }

    setAddingToCart(productId);
    try {
      await addToCart.mutateAsync({ productId, quantity: 1 });
      alert("已添加到購物車");
    } catch (error) {
      alert("添加失敗，請重試");
    } finally {
      setAddingToCart(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="container max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>返回首頁</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            iTrust 保健食品
          </h1>
          <p className="text-gray-600 mt-2">
            每一個產品都是一個修復工具，對應妳生命中的不同節奏
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <main className="py-12 px-4">
        <div className="container max-w-6xl">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : !products || products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">目前沒有商品</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {/* Product Image */}
                  <div className="bg-gradient-to-br from-[#e0f7f4] to-[#f0fffe] h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💚</div>
                      <p className="text-gray-600 text-sm">{product.category}</p>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price and Stock */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">
                        NT${product.price}
                      </span>
                      <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.stock > 0 ? `庫存: ${product.stock}` : '缺貨'}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link href={`/products/${product.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          查看詳情
                        </Button>
                      </Link>
                      <Button
                        className="flex-1"
                        disabled={product.stock === 0 || addingToCart === product.id}
                        onClick={() => handleAddToCart(product.id)}
                      >
                        {addingToCart === product.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            加入購物車
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

