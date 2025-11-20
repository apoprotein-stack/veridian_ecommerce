import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/veridian-logo.png" alt="Veridian" className="h-10 w-10" />
            <span className="text-xl font-bold text-green-700 hidden sm:inline">Veridian</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/products" className="text-gray-700 hover:text-green-700 transition-colors">
              商品
            </Link>
            <Link href="/story" className="text-gray-700 hover:text-green-700 transition-colors">
              品牌故事
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-700 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Brand Story */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                尋找真實的翠綠
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                一切，始於一個無法安心的夜晚。
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                我們曾在浴室的置物架前感到困惑，面對那些承諾奇蹟的瓶罐，卻在看見艱深難懂的成分列表時，不禁自問：「我真的能將這些，交給我最私密的肌膚嗎？」
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800">
                    探索商品
                  </Button>
                </Link>
                <Link href="/story">
                  <Button size="lg" variant="outline">
                    閱讀故事
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/veridian-logo.png" 
                alt="Veridian Logo" 
                className="w-full h-96 object-contain bg-gradient-to-br from-green-50 to-white p-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Tagline */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veridian: Guarding Your Truth
          </h2>
          <p className="text-xl text-green-100">
            Veridian: 守護妳的真實
          </p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Veridian 的核心價值
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">真實的守護者</h3>
              <p className="text-gray-600">
                我們的核心使命，是以最誠實、透明的方式，守護每一位使用者的身體健康與自信。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">翠綠生命力</h3>
              <p className="text-gray-600">
                名字發音同 "Viridian" (翠綠色)，象徵品牌源於自然、純淨、充滿生命力的產品哲學。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">透明的承諾</h3>
              <p className="text-gray-600">
                沒有成分需要隱藏，因為真正的信任，始於完全的透明。我們邀請您，一起告別成分焦慮。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Veridian 品牌應用
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/veridian-product-packaging-collection.jpg" 
                alt="Veridian 完整產品線" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">完整產品線</h3>
                <p className="text-gray-600">
                  從清潔、精華到乳霜，Veridian 提供全方位的私密保養方案，每一款產品都經過科學驗證。
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/veridian-store.png" 
                alt="Veridian 高級品牌空間" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">高級品牌空間</h3>
                <p className="text-gray-600">
                  隱密、優雅、專業的購物環境。我們創造了一個讓女性感到舒適、被尊重的零售空間。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            水凝絲滑科技
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/veridian-packaging.png" 
                alt="Veridian 水凝絲滑產品" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                極致輕盈的護理體驗
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Veridian 的核心創新是「水凝絲滑」劑型。這不是簡單的營銷詞彙，而是經過多年研發的結果。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-xl">✓</span>
                  <span className="text-gray-600">專屬 pH 值配方，符合女性私密肌膚的自然環境</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-xl">✓</span>
                  <span className="text-gray-600">玻尿酸與益生元，提供深層保濕與微生物平衡</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-xl">✓</span>
                  <span className="text-gray-600">輕盈質地，無黏膩感，快速吸收</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-xl">✓</span>
                  <span className="text-gray-600">天然成分，無激素、無類固醇</span>
                </li>
              </ul>
              <Link href="/products">
                <Button size="lg" className="bg-green-700 hover:bg-green-800">
                  探索所有商品
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            加入 Veridian 的信任之旅
          </h2>
          <p className="text-xl text-green-100 mb-8">
            告別成分焦慮，重新建立與身體的信任關係。
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" variant="secondary">
                開始購物
              </Button>
            </Link>
            <Link href="/story">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">關於 Veridian</h4>
              <p className="text-sm">
                真實的守護者。以最誠實、透明的方式，守護每一位使用者的身體健康與自信。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">購物</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/products" className="hover:text-white">所有商品</Link></li>
                <li><Link href="/products" className="hover:text-white">新品上市</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">品牌</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/story" className="hover:text-white">品牌故事</Link></li>
                <li><Link href="/story" className="hover:text-white">品牌理念</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">法律</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">隱私政策</a></li>
                <li><a href="#" className="hover:text-white">服務條款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Veridian (薇芮迪安). 守護妳的真實。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
