import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Story() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-[#0a9b8a] text-white py-12 px-4">
        <div className="container max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>返回首頁</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            iTrust 品牌故事
          </h1>
          <p className="text-lg opacity-90">
            信任，是女性最深的修復力
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container max-w-4xl">
          {/* Brand Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🌿 iTrust 品牌故事</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                信任，是女性最深的修復力。
              </p>
              
              <p>
                在科技與情感交錯的時代，女性不再只是被照顧的角色，而是自我修復、自我主權的掌握者。iTrust 誕生於這樣的信念——她不是保養品牌，而是一套能量系統，一個讓女性重新掌握青春節奏與身體語言的模組化引擎。
              </p>

              <p>
                創辦人 Evelyn Tasi，橫跨生技、設計與女性心理學，她深知：真正的修復，不是外在的補充，而是內在的信任。她設計了 iTrust 的每一個元素——從女性呵護新生命的抽象圖騰，到粒子場的能量分佈——都不是裝飾，而是身體智慧的視覺語法。
              </p>

              <p>
                iTrust 不談器官，也不定義美。她尊重每位女性的韻律，相信每個能量中心都值得被呵護與曬出。
              </p>

              <p className="text-lg font-semibold text-primary">
                女性不是名詞，是智慧的源頭。保護新生命，衍生智慧。
              </p>

              <p>
                iTrust 的核心產品不只是膠原蛋白或荷爾蒙調理，它是「青春修復的主權工具」。每一個系列都對應一種女性的節奏狀態。
              </p>

              <div className="bg-[#f0fffe] border-l-4 border-primary p-6 my-8">
                <p className="text-gray-800">
                  <span className="font-semibold">iTrust 不屬於市場，她屬於妳。</span><br/>
                  她不販售奇蹟，只提供工具。<br/>
                  她不延長青春，只讓妳重新掌握它。
                </p>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🧬 Evelyn Tasi 創辦人自述</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex justify-center">
                <img 
                  src="/founder.png" 
                  alt="Evelyn Tasi" 
                  className="w-full max-w-sm rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-8">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    我創立 iTrust，不是為了延長青春，而是為了讓妳重新掌握它。
                  </p>

                  <p>
                    在我眼中，女性不是名詞，是智慧的源頭。她的身體不是被定義的形狀，而是一種節奏、一種韻律、一種容器。
                  </p>

                  <p>
                    我相信，每位女性都擁有一個能量中心——她是修復的場域，是新生命的守護者。她不該被遮掩，而應被曬出。保護新生命，衍生智慧。
                  </p>

                  <p>
                    我的背景橫跨生技、設計與女性心理學，但我從不相信單一解方。我相信韻律，相信節奏，相信身體的語言。所以我設計了 iTrust 的每一個元素——從女性呵護新生命的抽象圖騰，到粒子場的能量分佈——都不是裝飾，而是妳身體智慧的視覺語法。
                  </p>

                  <p>
                    我不販售奇蹟，也不定義美。我只提供工具，讓妳在每個生命階段，都能修復自己、聆聽自己、信任自己。
                  </p>

                  <p className="text-lg font-semibold text-primary">
                    iTrust 是妳的能量系統。她不屬於市場，她屬於妳。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Lines Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💚 iTrust 產品系列</h2>
            
            <div className="space-y-6">
              {/* s-Trust */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">👴 s-Trust: 銀髮族主理</h3>
                <p className="text-gray-700 mb-3">
                  專為銀髮族設計的健康活力方案，溫和配方易於吸收。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 銀寶常青活力沖泡飲 - 維持活力與健康的完美選擇</li>
                </ul>
              </div>

              {/* m-Trust */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">💪 m-Trust: 男性主理</h3>
                <p className="text-gray-700 mb-3">
                  男性活力與耐力的完美選擇，天然配方快速見效。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 精力馬卡沖泡飲 - 提升精力與耐力的天然夥伴</li>
                </ul>
              </div>

              {/* w-Trust */}
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">👩 w-Trust: 女力主理</h3>
                <p className="text-gray-700 mb-3">
                  女性美麗與健康的專業護理，內在修復外在綻放。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 美妍膠原蛋白 - 支持肌膚彈性與光澤</li>
                  <li>• 蔓越莓清新私密凝露 - 女性私密護理的專業選擇</li>
                </ul>
              </div>

              {/* g-Trust */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ g-Trust: 運動主理</h3>
                <p className="text-gray-700 mb-3">
                  運動愛好者的能量補給站，便攜式設計隨時享受活力。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 運動活力能量棒 - 快速補充能量與營養</li>
                </ul>
              </div>

              {/* f-Trust */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">👨‍👩‍👧‍👦 f-Trust: 家人主理</h3>
                <p className="text-gray-700 mb-3">
                  全家人的健康守護者，平衡腸道菌叢支持免疫。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 全家人益生菌 - 全家健康的守護者</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">✨ iTrust 的核心價值</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">信任第一</h3>
                  <p className="text-gray-600">
                    我們相信每位女性的身體智慧，提供透明、真實的產品與服務。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">科學與設計的結合</h3>
                  <p className="text-gray-600">
                    每個產品都經過嚴謹的科學驗證，同時保持美學與人文關懷。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">多元包容</h3>
                  <p className="text-gray-600">
                    我們尊重每個人的獨特需求，提供針對不同生活方式的解決方案。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">永續與責任</h3>
                  <p className="text-gray-600">
                    我們承諾使用天然、永續的成分，保護每一位使用者與地球。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              準備好開始妳的修復之旅了嗎？
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
                探索所有商品
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

