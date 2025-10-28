import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { Link } from "wouter";
import { ShoppingCart, Leaf, Heart } from "lucide-react";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();

  const productLines = [
    {
      id: "s-Trust",
      name: "s-Trust",
      title: "銀髮族主理",
      description: "專為銀髮族設計的健康活力方案",
      emoji: "👴",
      color: "from-blue-100 to-blue-50",
    },
    {
      id: "m-Trust",
      name: "m-Trust",
      title: "男性主理",
      description: "男性活力與耐力的完美選擇",
      emoji: "💪",
      color: "from-orange-100 to-orange-50",
    },
    {
      id: "w-Trust",
      name: "w-Trust",
      title: "女力主理",
      description: "女性美麗與健康的專業護理",
      emoji: "👩",
      color: "from-pink-100 to-pink-50",
    },
    {
      id: "g-Trust",
      name: "g-Trust",
      title: "運動主理",
      description: "運動愛好者的能量補給站",
      emoji: "⚡",
      color: "from-yellow-100 to-yellow-50",
    },
    {
      id: "f-Trust",
      name: "f-Trust",
      title: "家人主理",
      description: "全家人的健康守護者",
      emoji: "👨‍👩‍👧‍👦",
      color: "from-green-100 to-green-50",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/itrust-logo.png" alt="iTrust" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary hidden sm:inline">{APP_TITLE}</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/products" className="text-gray-700 hover:text-primary transition-colors">
              商品
            </Link>
            <Link href="/story" className="text-gray-700 hover:text-primary transition-colors">
              品牌故事
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link href="/cart" className="relative">
                  <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-primary transition-colors" />
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
      <section className="flex-1 flex items-center justify-center py-20 px-4 bg-gradient-to-br from-white via-[#f0fffe] to-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  信任，是女性最深的修復力
                </h1>
                <p className="text-lg text-gray-600">
                  iTrust 不是保養品牌，而是一套能量系統，讓妳重新掌握青春節奏與身體語言。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="w-full sm:w-auto">
                    探索商品
                  </Button>
                </Link>
                <Link href="/story">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    了解品牌
                  </Button>
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center">
                  <Leaf className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-gray-600">天然成分</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Heart className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-gray-600">專業護理</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ShoppingCart className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-gray-600">安心購物</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="/itrust-logo.png" 
                  alt="iTrust Logo" 
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              iTrust 產品線
            </h2>
            <p className="text-lg text-gray-600">
              每一個系列都對應不同的生活需求，找到屬於妳的能量工具
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {productLines.map((line) => (
              <Link key={line.id} href="/products" className="group">
                <div className={`bg-gradient-to-br ${line.color} rounded-lg p-6 h-full flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer`}>
                  <div className="text-5xl mb-3">{line.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {line.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    {line.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    {line.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg">
                查看全部商品
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              品牌故事
            </h2>
            <p className="text-lg text-gray-600">
              每一個 iTrust 產品都是一個修復工具，對應女性生命中的不同節奏
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f0fffe] p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🧬 創辦人 Evelyn Tasi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                橫跨生技、設計與女性心理學的背景，深知真正的修復，不是外在的補充，而是內在的信任。設計了 iTrust 的每一個元素——從女性呵護新生命的抽象圖騰，到粒子場的能量分佈。
              </p>
            </div>

            <div className="bg-[#f0fffe] p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💚 iTrust 的核心
              </h3>
              <p className="text-gray-600 leading-relaxed">
                不販售奇蹟，只提供工具。不延長青春，只讓妳重新掌握它。每位女性都擁有一個能量中心——她是修復的場域，是新生命的守護者。
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/story">
              <Button variant="outline" size="lg">
                閱讀完整故事
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            開始妳的修復之旅
          </h2>
          <p className="text-lg mb-8 opacity-90">
            選擇適合妳的能量工具，重新掌握身體的智慧與節奏
          </p>
          <Link href="/products">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100"
            >
              立即購物
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">關於 iTrust</h4>
              <p className="text-sm">女性的信任，是最深的修復力。</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">購物</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="hover:text-white">所有商品</Link></li>
                <li><Link href="/cart" className="hover:text-white">購物車</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">品牌</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/story" className="hover:text-white">品牌故事</Link></li>
                <li><a href="#" className="hover:text-white">聯絡我們</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">法律</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">隱私政策</a></li>
                <li><a href="#" className="hover:text-white">服務條款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 iTrust. 女性不是名詞，是智慧的源頭。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

