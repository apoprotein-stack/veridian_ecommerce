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
            一個致力於女性私密保養的科學品牌，守護妳的真實與自信。
          </p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            品牌理念
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Veridian 源於拉丁文「verdis」，意為「綠色」與「真實」。我們相信，女性的私密健康不應該是禁忌話題，而是應該被尊重、被科學對待、被自信地談論。
            </p>
            <p>
              在一個充滿不確定性的時代，Veridian 誕生於一個簡單但深刻的信念：每位女性都值得擁有安全、有效、舒適的私密保養方案。我們不販售承諾，只提供經過科學驗證的解決方案。
            </p>
            <p>
              我們的產品採用天然成分與先進科技的結合，特別強調「水凝絲滑」的極致體驗。從精華液的輕盈滲透，到凝露的絲滑舒適，每一個產品都經過精心設計，為妳的私密肌膚提供最溫和而有效的護理。
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
                所有成分與配方都經過臨床驗證，我們相信科學的力量。每一個聲稱都有數據支持，每一個承諾都能兌現。
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

      {/* Product Philosophy */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            產品哲學
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">水凝絲滑科技</h3>
              <p className="text-gray-600 mb-4">
                Veridian 的核心創新是「水凝絲滑」劑型。這不是簡單的營銷詞彙，而是經過多年研發的結果。我們的配方結合了：
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✓ 專屬 pH 值配方，符合女性私密肌膚的自然環境</li>
                <li>✓ 玻尿酸與益生元，提供深層保濕與微生物平衡</li>
                <li>✓ 輕盈質地，無黏膩感，快速吸收</li>
                <li>✓ 天然成分，無激素、無類固醇</li>
              </ul>
              <p className="text-gray-600">
                每一款產品都是為了解決特定的女性需求而設計，從日常保養到特殊護理，Veridian 都有完整的方案。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/veridian-packaging.png" 
                alt="Veridian 產品包裝" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Experience */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            品牌體驗
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="/veridian-store.png" 
                alt="Veridian 店鋪環境" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">高級品牌空間</h3>
              <p className="text-gray-600 mb-4">
                Veridian 的零售空間設計理念是「隱密、優雅、專業」。我們創造了一個讓女性感到舒適、被尊重的購物環境。
              </p>
              <ul className="text-gray-600 space-y-3">
                <li>
                  <strong>隱密諮詢區</strong>：獨立的諮詢空間，讓妳可以自信地提出任何問題
                </li>
                <li>
                  <strong>專業顧問</strong>：經過培訓的品牌大使，提供科學的護理建議
                </li>
                <li>
                  <strong>盲盒包裝</strong>：匿名購買選項，保護妳的隱私
                </li>
                <li>
                  <strong>教育工作坊</strong>：定期舉辦私密保養知識講座
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
