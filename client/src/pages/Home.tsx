import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf, Zap, Heart, Brain, Droplets, Sparkles } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Link } from "wouter";

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

      {/* Hero Section - Mitochondrial Health Narrative */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  粒線體健康 × 雙軸線守護
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                用透明的科學，從細胞粒線體重啟健康
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                不用誇張話術，不仰賴明星光環。讓產品本身被親身體驗所驗證。
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Veridian 以粒線體健康為科學框架，透過 ProFit® 後生元與 MDBD® 遞送技術，同時修復腸腦軸線（睡眠、壓力、免疫）與腸皮軸線（皮膚屏障、膚況、抗老），實現 35 天內外協同見效。
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800">
                    探索產品矩陣
                  </Button>
                </Link>
                <Link href="/story">
                  <Button size="lg" variant="outline">
                    了解科學基礎
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/VeridianProductPackaging.png" 
                alt="Veridian 核心產品線" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Core - Verde + Veritas */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veridian = Verde（生命）+ Veritas（真實）
          </h2>
          <p className="text-xl text-green-100 mb-6">
            在充斥代言與保證的保健品市場，我們選擇另一條路
          </p>
          <p className="text-lg text-green-100">
            透明的科學 × 溫暖的語言 = 60% 科學 + 40% 溫度
          </p>
        </div>
      </section>

      {/* Five-Step Logic Chain - Mitochondrial Health */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            粒線體健康的五步驟邏輯鏈
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            從腸道到細胞，從根源啟動全身健康
          </p>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-700 font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">調節腸道菌叢</h3>
                <p className="text-gray-600 mb-3">
                  ProFit® 後生元 → 修復腸道屏障 → 減少腸道慢性發炎
                </p>
                <p className="text-sm text-gray-500">
                  後生元是益生菌代謝後的生物活性產物，穩定性高、作用可預測、不受胃酸破壞
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">提升營養吸收效率</h3>
                <p className="text-gray-600 mb-3">
                  腸道屏障健全 → 脂溶性維生素、礦物質吸收率提升 → 細胞獲得充足代謝原料
                </p>
                <p className="text-sm text-gray-500">
                  MDBD® 遞送技術將吸收率從 25-35% 提升至 58-65%
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-700 font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">支持粒線體功能</h3>
                <p className="text-gray-600 mb-3">
                  充足原料 → 粒線體 ATP 生成效率提升 → 細胞能量充沛，氧化壓力降低
                </p>
                <p className="text-sm text-gray-500">
                  粒線體是細胞的能量工廠，負責將養分轉化為 ATP，供細胞執行所有生理功能
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 text-pink-700 font-bold text-lg">
                  4
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">啟動軸線修復</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">腸腦軸線：</p>
                    <p className="text-gray-600 text-sm">粒線體健康 → 腸道神經系統優化 → 血清素前驅物供應充足 → 睡眠/情緒/免疫改善</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">腸皮軸線：</p>
                    <p className="text-gray-600 text-sm">粒線體健康 → 皮膚幹細胞更新能力提升 → 膠原蛋白合成加速 → 屏障修復/膚況改善</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-700 font-bold text-lg">
                  5
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">整體感知改善</h3>
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

      {/* Dual Axis Product Strategy */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            雙軸線聚焦發展
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            不做泛健康、不做全品類。清晰的產品線，完整的解決方案
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* GB Series */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">GB 系列 - 腸腦軸線</h3>
              </div>
              <p className="text-gray-600 mb-6">
                針對睡眠障礙、長期壓力、免疫力偏低的 25-45 歲都市工作者
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GB-01N 腸淨能®</p>
                    <p className="text-sm text-gray-600">腸道環境重建、整體健康基礎</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GB-02N 強益免®</p>
                    <p className="text-sm text-gray-600">腸道免疫強化、反覆感冒調理</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GB-03N 好眠寧®</p>
                    <p className="text-sm text-gray-600">腸腦軸訊號優化、睡眠品質改善</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GB-04N 舒壓靈®</p>
                    <p className="text-sm text-gray-600">腸道血清素支持、壓力情緒調節</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* GS Series */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-pink-500">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-pink-600" />
                <h3 className="text-2xl font-bold text-gray-900">GS 系列 - 腸皮軸線</h3>
              </div>
              <p className="text-gray-600 mb-6">
                針對皮膚問題、開放「吃出美肌」概念的 28-42 歲女性
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GS-01N 晶妍膠原®</p>
                    <p className="text-sm text-gray-600">腸皮軸啟動、膠原蛋白合成支持</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GS-01C 晶妍精華®</p>
                    <p className="text-sm text-gray-600">皮膚屏障修護、抗氧化（外用）</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GS-03N/C 私淨源/護®</p>
                    <p className="text-sm text-gray-600">私密菌相平衡、內外雙軌護理</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">GS-02C 煥妍修護®</p>
                    <p className="text-sm text-gray-600">抗老化、夜間修護（外用）</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inner-Outer Synergy */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            內外協同 = 35 天見效
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            口服修復根源，外用加速效果
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">口服產品</h3>
              <p className="text-gray-600">
                作用於腸道，從根源改善腸皮軸的訊號傳遞，提升皮膚細胞的自我修復能力
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">協同效應</h3>
              <p className="text-gray-600">
                兩者協同時，修復能力與外用支持形成互補，感知改善時間從 56 天縮短至 35 天
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">外用產品</h3>
              <p className="text-gray-600">
                直接在皮膚層提供屏障修護支持，加速細胞更新的外部條件
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Market Position */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            中高價 × 高科學親近性
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            定價 $1,680-$2,280/月，為有科學依據的保健品付費
          </p>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">為什麼 GS-01N 定價 $2,100？</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-700 font-bold">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">根源修復 vs 材料補充</p>
                  <p className="text-gray-600">
                    GS-01N 包含 ProFit® 後生元成分，修復腸皮軸的根本機制（腸道 → 皮膚），不只是補充膠原蛋白原料
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-700 font-bold">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">吸收率差異</p>
                  <p className="text-gray-600">
                    MDBD® 遞送技術將腸道吸收率從一般膠囊的 25-35% 提升至 58-65%，有效成分利用率差距顯著
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-700 font-bold">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">見效時間縮短</p>
                  <p className="text-gray-600">
                    搭配 GS-01C 外用時，見效時間從單一口服的 56 天縮短至 35 天，每個見效天數的成本實際上更低
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-gray-900 font-semibold mb-2">
              💡 溝通策略：不是「比 DHC 貴 4 倍」，而是「DHC 只補材料，Veridian 修根源」
            </p>
            <p className="text-gray-600">
              換一個比較框架，同時說明為何同等投入可以預期更高的感知回報
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-green-700 text-white">
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
