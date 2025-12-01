import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Story() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/veridian-logo.png" alt="Veridian" className="h-10 w-10" />
            <span className="text-xl font-bold text-green-700 hidden sm:inline">Veridian</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/products" className="text-gray-700 hover:text-green-700 transition-colors">
              商品
            </Link>
            <Link href="/story" className="text-gray-700 hover:text-green-700 transition-colors">
              品牌故事
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首頁
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Veridian 的故事
          </h1>
          <p className="text-xl text-gray-600">
            一個關於真實、透明與信任的品牌旅程
          </p>
        </div>
      </section>

      {/* Brand Naming */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            1.1 品牌名稱：Veridian (薇芮迪安)
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">命名構成</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                融合 <strong>Verity</strong> (真實) 與 <strong>Guardian</strong> (守護者)，創造出 <strong>Veridian</strong> 這個獨特的品牌名稱。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">品牌意涵</h3>
              <div className="space-y-6">
                <div className="pl-6 border-l-4 border-green-700">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">真實的守護者</h4>
                  <p className="text-gray-600">
                    我們的核心使命，是以最誠實、透明的方式，守護每一位使用者的身體健康與自信。
                  </p>
                </div>
                <div className="pl-6 border-l-4 border-green-700">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">翠綠生命力</h4>
                  <p className="text-gray-600">
                    名字發音同 "Viridian" (翠綠色)，象徵品牌源於自然、純淨、充滿生命力的產品哲學。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Tagline */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            1.2 品牌標語
          </h2>
          <div className="bg-white p-12 rounded-lg shadow-sm border-l-4 border-green-700">
            <p className="text-3xl font-bold text-gray-900 mb-4">
              Veridian: Guarding Your Truth.
            </p>
            <p className="text-3xl font-bold text-green-700">
              Veridian: 守護妳的真實。
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            1.3 品牌故事：尋找真實的翠綠
          </h2>
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              一切，始於一個無法安心的夜晚。
            </p>
            <p>
              我們曾在浴室的置物架前感到困惑，面對那些承諾奇蹟的瓶罐，卻在看見艱深難懂的成分列表時，不禁自問：「我真的能將這些，交給我最私密的肌膚嗎？」
            </p>
            <p>
              這種不信任感，橫亙在我們與「好好照顧自己」之間。我們發現，世界需要的不是更多的承諾，而是更少的祕密；不是更華麗的成分，而是更誠實 (Honest) 的溝通。我們渴望一種能被完全看透的真實 (Verity)。
            </p>
            <p>
              於是，Veridian 誕生了。
            </p>
            <p>
              我們是「真實的守護者」，以撰寫公開報告的嚴謹，對待每一次的配方研發。我們走進森林與實驗室，只為尋找那片最安心的「翠綠」。在 Veridian 的世界裡，沒有成分需要隱藏，因為真正的信任，始於完全的透明。
            </p>
            <p>
              我們相信，每個人都自帶光環 (Aura)——那是獨一無二的自信與力量。我們的使命，就是以最純淨的方式守護 (Guard) 這份光芒，讓它不被身體的不適所遮蔽。
            </p>
            <p>
              Veridian 不僅僅是保養品，它是一份透明的承諾，一場回歸真實的旅程。我們邀請您，一起告別成分焦慮，重新建立與身體的信任關係。
            </p>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            核心價值
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-700">科學信任</h3>
              <p className="text-gray-600">
                所有成分與配方都經過臨床驗證。我們相信科學的力量，每一個聲稱都有數據支持，每一個承諾都能兌現。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-700">極致體驗</h3>
              <p className="text-gray-600">
                不是簡單的功效，而是整個使用體驗。水凝絲滑的劑型、舒適的吸收感、愉悅的香氣，每個細節都經過精心設計。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-700">隱私尊重</h3>
              <p className="text-gray-600">
                我們理解隱私的重要性。從盲盒包裝到匿名購買，我們用行動保護妳的隱私，讓妳可以自信而坦誠地選擇。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-700">女性賦權</h3>
              <p className="text-gray-600">
                私密保養不是羞恥，而是自我照顧的一部分。我們透過教育與對話，幫助女性重新掌握身體的主權與自信。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Campaign - Four Sentences Loop */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-green-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            經期好夥伴 - 四句行銷閉環
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-pink-500">
              <h3 className="text-lg font-bold mb-3 text-gray-900">1. 主視覺金句</h3>
              <p className="text-gray-600 italic">
                「經期來的時候，給妳最溫柔的呵護」
              </p>
              <p className="text-sm text-gray-500 mt-4">
                情感共鳴、建立連結
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-700">
              <h3 className="text-lg font-bold mb-3 text-gray-900">2. 數據信任</h3>
              <p className="text-gray-600 italic">
                「78% 姐妹說：這次經期，真的沒那麼難熬」
              </p>
              <p className="text-sm text-gray-500 mt-4">
                建立信任、量化效益
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="text-lg font-bold mb-3 text-gray-900">3. 產品閉環</h3>
              <p className="text-gray-600 italic">
                「內有活力氣泡飲提神，外有 Veridian 凝露守護，讓經期也水潤有活力」
              </p>
              <p className="text-sm text-gray-500 mt-4">
                強化 AOV、解決方案
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-purple-500">
              <h3 className="text-lg font-bold mb-3 text-gray-900">4. 情感收尾</h3>
              <p className="text-gray-600 italic">
                「不是治療，是讓妳在經期依然敢好好愛自己」
              </p>
              <p className="text-sm text-gray-500 mt-4">
                價值觀收攏、品牌差異化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Water-Gel Technology */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            水凝絲滑科技
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                極致輕盈的護理體驗
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Veridian 的核心創新是「水凝絲滑」劑型。這不是簡單的營銷詞彙，而是經過多年研發的結果。我們的配方結合了：
              </p>
              <ul className="space-y-3 mb-6">
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
              <p className="text-gray-600">
                每一款產品都是為了解決特定的女性需求而設計，從日常保養到特殊護理，Veridian 都有完整的方案。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/VeridianProductPackaging.png" 
                alt="Veridian 水凝絲滑產品" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Experience */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            品牌體驗
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="/VeridianStoreEnvironment.png" 
                alt="Veridian 高級品牌空間" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">高級品牌空間</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Veridian 的零售空間設計理念是「隱密、優雅、專業」。我們創造了一個讓女性感到舒適、被尊重的購物環境。
              </p>
              <ul className="space-y-4">
                <li>
                  <strong className="text-gray-900">隱密諮詢區</strong>
                  <p className="text-gray-600">獨立的諮詢空間，讓妳可以自信地提出任何問題</p>
                </li>
                <li>
                  <strong className="text-gray-900">專業顧問</strong>
                  <p className="text-gray-600">經過培訓的品牌大使，提供科學的護理建議</p>
                </li>
                <li>
                  <strong className="text-gray-900">盲盒包裝</strong>
                  <p className="text-gray-600">匿名購買選項，保護妳的隱私</p>
                </li>
                <li>
                  <strong className="text-gray-900">教育工作坊</strong>
                  <p className="text-gray-600">定期舉辦私密保養知識講座</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            加入 Veridian 的信任之旅
          </h2>
          <p className="text-lg mb-8 text-green-100">
            探索我們的完整產品線，找到適合妳的私密保養方案。
          </p>
          <Link href="/products">
            <Button size="lg" variant="secondary">
              探索商品
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
