import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { Link } from "wouter";
import { ShoppingCart, Leaf } from "lucide-react";

export default function Home() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src={APP_LOGO} alt="Veridian" className="h-10 w-10" />
            <span className="text-xl font-bold text-green-700 hidden sm:inline">{APP_TITLE}</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/products" className="text-gray-700 hover:text-green-700 transition-colors">
              商品
            </Link>
            <Link href="/story" className="text-gray-700 hover:text-green-700 transition-colors">
              品牌故事
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link href="/cart" className="relative">
                  <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-green-700 transition-colors" />
                </Link>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => logout()}
                >
                  登出
                </Button>
              </>
            ) : (
              <Button 
                size="sm"
                onClick={() => window.location.href = getLoginUrl()}
              >
                登入
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4 bg-gradient-to-br from-white via-green-50 to-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                守護妳的真實
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Veridian 是一個致力於女性私密保養的品牌，提供科學配方與極致護理體驗，讓妳重新掌握自信。
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800">
                    探索商品
                  </Button>
                </Link>
                <Link href="/story">
                  <Button size="lg" variant="outline">
                    了解品牌
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img 
                src="/veridian-logo.png" 
                alt="Veridian Logo" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Veridian 的核心價值
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Leaf className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">天然科學</h3>
              <p className="text-gray-600">
                採用天然成分與科學配方，為妳的私密肌膚提供最溫和的護理。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Leaf className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">極致體驗</h3>
              <p className="text-gray-600">
                水凝絲滑的劑型設計，提供無與倫比的使用感受與舒適度。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Leaf className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">隱私保護</h3>
              <p className="text-gray-600">
                尊重妳的隱私，提供匿名購買與隱密包裝的貼心服務。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Veridian 品牌應用
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/veridian-products.jpg" 
                alt="Veridian 產品系列" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">完整產品線</h3>
                <p className="text-gray-600">
                  從精華液、乳液到凝露，Veridian 提供全方位的私密保養解決方案。
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/veridian-store.png" 
                alt="Veridian 店鋪環境" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">高級品牌空間</h3>
                <p className="text-gray-600">
                  優雅的店鋪設計，為妳打造舒適、隱密的購物與諮詢環境。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            開始妳的護理之旅
          </h2>
          <p className="text-lg mb-8 text-green-100">
            選擇適合妳的 Veridian 產品，體驗科學護理與極致舒適。
          </p>
          <Link href="/products">
            <Button size="lg" variant="secondary">
              立即購物
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">關於 Veridian</h4>
              <p className="text-sm">
                致力於女性私密保養的科學品牌，守護妳的真實與自信。
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
            <p>&copy; 2025 Veridian. 守護妳的真實。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
