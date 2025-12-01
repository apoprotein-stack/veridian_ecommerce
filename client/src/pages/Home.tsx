import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Leaf, Sparkles } from "lucide-react";
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

      {/* Hero Section - Marketing Campaign */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-green-50">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                經期來的時候，給妳最溫柔的呵護
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                78% 姐妹說：這次經期，真的沒那麼難熬
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                內有活力氣泡飲提神，外有 Veridian 凝露守護，讓經期也水潤有活力。不是治療，是讓妳在經期依然敢好好愛自己。
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800">
                    探索經期好夥伴
                  </Button>
                </Link>
                <Link href="/story">
                  <Button size="lg" variant="outline">
                    了解更多
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/Gemini_Generated_Image_wcth9vwcth9vwcth.png" 
                alt="蔓越莓風味活力氣泡飲" 
                className="w-full h-96 object-cover"
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

      {/* Fundraising Campaign Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            經期好夥伴 - 募資方案
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            選擇最適合妳的方案，開始內外雙守護的旅程
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Plan 1 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">【成本價衝量】</h3>
              <p className="text-gray-600 mb-4">單入組</p>
              <p className="text-4xl font-bold text-green-700 mb-6">NT$599</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>私密凝露 50ml</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>成本價優惠</span>
                </li>
              </ul>
              <Button className="w-full bg-green-700 hover:bg-green-800">加入購物車</Button>
            </div>

            {/* Plan 2 */}
            <div className="border-2 border-green-700 rounded-lg p-8 shadow-lg relative">
              <div className="absolute -top-4 left-6 bg-green-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                推薦
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">【經期好夥伴】</h3>
              <p className="text-gray-600 mb-4">標準組</p>
              <p className="text-4xl font-bold text-green-700 mb-6">NT$1,299</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>私密凝露 150ml</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>蔓越莓風味活力氣泡飲</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>內外雙守護完整方案</span>
                </li>
              </ul>
              <Button className="w-full bg-green-700 hover:bg-green-800">加入購物車</Button>
            </div>

            {/* Plan 3 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">【78%見證】</h3>
              <p className="text-gray-600 mb-4">經期輕盈 ALL IN 組</p>
              <p className="text-4xl font-bold text-green-700 mb-6">NT$1,999</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>私密凝露 300ml</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>蔓越莓活力氣泡飲 2盒</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>完整護理套組</span>
                </li>
              </ul>
              <Button className="w-full bg-green-700 hover:bg-green-800">加入購物車</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Witness Section - 78% Trust Data */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-green-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            78% 姐妹的真實見證
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <p className="text-5xl font-bold text-green-700 mb-4">78%</p>
              <p className="text-gray-600 text-lg">
                姐妹說：這次經期，真的沒那麼難熬
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <p className="text-5xl font-bold text-green-700 mb-4">92%</p>
              <p className="text-gray-600 text-lg">
                使用者推薦給親友
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <p className="text-5xl font-bold text-green-700 mb-4">4.9/5</p>
              <p className="text-gray-600 text-lg">
                平均滿意度評分
              </p>
            </div>
          </div>
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
                <Leaf className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">翠綠生命力</h3>
              <p className="text-gray-600">
                名字發音同 "Viridian" (翠綠色)，象徵品牌源於自然、純淨、充滿生命力的產品哲學。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-green-700" />
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
                src="/VeridianProductPackagingCollection.png" 
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
                src="/VeridianStoreEnvironment.png" 
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
                src="/VeridianProductPackaging.png" 
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
            不是治療，是讓妳在經期依然敢好好愛自己
          </h2>
          <p className="text-xl text-green-100 mb-8">
            加入 Veridian 的信任之旅，開始內外雙守護
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
                <li><Link href="/products" className="hover:text-white">經期好夥伴</Link></li>
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
