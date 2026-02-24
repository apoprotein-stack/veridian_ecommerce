import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf, Brain, Sparkles, Droplets, Zap } from "lucide-react";

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
            用透明的科學，從細胞粒線體重啟健康
          </p>
        </div>
      </section>

      {/* Brand Foundation - Verde + Veritas */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            品牌基礎：Verde + Veritas
          </h2>
          <div className="space-y-8">
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Veridian = Verde（生命）+ Veritas（真實）
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                在充斥代言與保證的保健品市場，我們選擇另一條路。不用誇張話術，不仰賴明星光環。讓產品本身被親身體驗所驗證。
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-green-700 pl-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Verde（生命）</h4>
                  <p className="text-gray-600">
                    象徵品牌源於自然、純淨、充滿生命力的產品哲學。每一款產品都是對生命力的尊重。
                  </p>
                </div>
                <div className="border-l-4 border-blue-700 pl-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Veritas（真實）</h4>
                  <p className="text-gray-600">
                    我們的核心承諾，是以最誠實、透明的方式，基於科學證據而非營銷承諾來溝通。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                文案風格：60% 科學 + 40% 溫度
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                我們不相信「要麼全是科學術語，要麼全是感性故事」的二元論。真實的溝通應該是：
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">60% 科學</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 粒線體健康的五步驟邏輯鏈</li>
                    <li>• ProFit® 後生元技術</li>
                    <li>• MDBD® 遞送技術</li>
                    <li>• 見效時間表（D7-D14、D30、D56/D35）</li>
                    <li>• 成分科學依據</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-3">40% 溫度</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 理解消費者的真實困擾</li>
                    <li>• 用親切的語言解釋複雜科學</li>
                    <li>• 強調根源修復，而非快速修補</li>
                    <li>• 尊重個體差異與體驗</li>
                    <li>• 建立信任而非製造焦慮</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mitochondrial Health Framework */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            科學框架：粒線體健康的五步驟邏輯鏈
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            粒線體是細胞的能量工廠。當粒線體功能衰退時，整個身體的修復能力就會下降。Veridian 的所有產品都圍繞這個核心邏輯展開：
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start bg-white rounded-lg p-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-700 font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">調節腸道菌叢</h3>
                <p className="text-gray-600 mb-3">
                  <strong>機制：</strong> ProFit® 後生元 → 修復腸道屏障 → 減少腸道慢性發炎
                </p>
                <p className="text-sm text-gray-500">
                  後生元是益生菌代謝後的生物活性產物。相比益生菌，後生元穩定性高、作用可預測、不受胃酸破壞、不受個體菌相差異影響。這是為什麼我們選擇後生元而非益生菌的原因。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start bg-white rounded-lg p-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">提升營養吸收效率</h3>
                <p className="text-gray-600 mb-3">
                  <strong>機制：</strong> 腸道屏障健全 → 脂溶性維生素、礦物質吸收率提升 → 細胞獲得充足代謝原料
                </p>
                <p className="text-sm text-gray-500">
                  MDBD® 遞送技術將吸收率從一般膠囊的 25-35% 提升至 58-65%。這個差異決定了產品的實際有效性。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start bg-white rounded-lg p-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-yellow-100 text-yellow-700 font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">支持粒線體功能</h3>
                <p className="text-gray-600 mb-3">
                  <strong>機制：</strong> 充足原料 → 粒線體 ATP 生成效率提升 → 細胞能量充沛，氧化壓力降低
                </p>
                <p className="text-sm text-gray-500">
                  ATP 是細胞的能量貨幣。當粒線體能有效生成 ATP 時，細胞就有能力執行所有生理功能——包括修復、更新、抵禦氧化壓力。
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start bg-white rounded-lg p-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-pink-100 text-pink-700 font-bold text-lg">
                  4
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">啟動軸線修復</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">腸腦軸線（GB 系列）</p>
                    <p className="text-gray-600 text-sm">
                      粒線體健康 → 腸道神經系統優化 → 血清素前驅物供應充足 → 睡眠、情緒、免疫改善
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">腸皮軸線（GS 系列）</p>
                    <p className="text-gray-600 text-sm">
                      粒線體健康 → 皮膚幹細胞更新能力提升 → 膠原蛋白合成加速 → 屏障修復、膚況改善
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start bg-white rounded-lg p-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-700 font-bold text-lg">
                  5
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">整體感知改善</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold">D7-D14：</span> 腸胃通暢感、膚感初步變化（可感知）</p>
                  <p><span className="font-semibold">D30：</span> 睡眠品質、精力、皮膚均勻度（可觀察）</p>
                  <p><span className="font-semibold">D56（單內服）/ D35（內外協同）：</span> 整體指標達標</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Axis Strategy */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            產品策略：雙軸線聚焦發展
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            不做泛健康、不做全品類。我們清晰地聚焦在兩條軸線上，每條軸線都有完整的解決方案。
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GB Series */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">GB 系列 - 腸腦軸線</h3>
              </div>
              <p className="text-gray-600 mb-6">
                <strong>目標客群：</strong> 25-45 歲都市工作者，有睡眠障礙、長期壓力、免疫力偏低
              </p>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-gray-900">GB-01N 腸淨能®</p>
                  <p className="text-sm text-gray-600">腸道環境重建、整體健康基礎</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">GB-02N 強益免®</p>
                  <p className="text-sm text-gray-600">腸道免疫強化、反覆感冒調理</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">GB-03N 好眠寧®</p>
                  <p className="text-sm text-gray-600">腸腦軸訊號優化、睡眠品質改善</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">GB-04N 舒壓靈®</p>
                  <p className="text-sm text-gray-600">腸道血清素支持、壓力情緒調節</p>
                </li>
              </ul>
            </div>

            {/* GS Series */}
            <div className="border-l-4 border-pink-500 pl-6">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-pink-600" />
                <h3 className="text-2xl font-bold text-gray-900">GS 系列 - 腸皮軸線</h3>
              </div>
              <p className="text-gray-600 mb-6">
                <strong>目標客群：</strong> 28-42 歲女性，有皮膚問題且開放「吃出美肌」概念
              </p>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-gray-900">GS-01N 晶妍膠原®</p>
                  <p className="text-sm text-gray-600">腸皮軸啟動、膠原蛋白合成支持</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">GS-01C 晶妍精華®</p>
                  <p className="text-sm text-gray-600">皮膚屏障修護、抗氧化（外用）</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">GS-03N/C 私淨源/護®</p>
                  <p className="text-sm text-gray-600">私密菌相平衡、內外雙軌護理</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">GS-02C 煥妍修護®</p>
                  <p className="text-sm text-gray-600">抗老化、夜間修護（外用）</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inner-Outer Synergy */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            內外協同：加速見效的秘密
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            單一口服需要 56 天才能看到整體改善。但當口服與外用協同時，見效時間可以縮短至 35 天。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">口服產品</h3>
              <p className="text-gray-600 text-sm">
                作用於腸道，從根源改善腸皮軸的訊號傳遞，提升皮膚細胞的自我修復能力
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">協同效應</h3>
              <p className="text-gray-600 text-sm">
                兩者協同時，修復能力與外用支持形成互補，感知改善時間從 56 天縮短至 35 天
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-pink-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">外用產品</h3>
              <p className="text-gray-600 text-sm">
                直接在皮膚層提供屏障修護支持，加速細胞更新的外部條件
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            市場定位：中高價 × 高科學親近性
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            定價 $1,680-$2,280/月。我們不是最便宜的，但我們是最透明的。
          </p>

          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              為什麼 GS-01N 定價 $2,100？
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-700 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">根源修復 vs 材料補充</p>
                  <p className="text-gray-600">
                    GS-01N 包含 ProFit® 後生元成分，修復腸皮軸的根本機制（腸道 → 皮膚），不只是補充膠原蛋白原料。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-700 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">吸收率差異</p>
                  <p className="text-gray-600">
                    MDBD® 遞送技術將腸道吸收率從一般膠囊的 25-35% 提升至 58-65%，有效成分利用率差距顯著。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-700 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">見效時間縮短</p>
                  <p className="text-gray-600">
                    搭配 GS-01C 外用時，見效時間從單一口服的 56 天縮短至 35 天，每個見效天數的成本實際上更低。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-900 font-semibold mb-2">
              💡 溝通策略：不是「比 DHC 貴 4 倍」，而是「DHC 只補材料，Veridian 修根源」
            </p>
            <p className="text-gray-600">
              換一個比較框架，同時說明為何同等投入可以預期更高的感知回報。
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            試用先行，科學驗證
          </h2>
          <p className="text-xl text-green-100 mb-8">
            $60 運費取得市值 $380 的雙軸體驗組，親身感受粒線體健康的改變
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              開始試用
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
