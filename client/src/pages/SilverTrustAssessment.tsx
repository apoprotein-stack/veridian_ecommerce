import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, AlertCircle, Star } from "lucide-react";

export default function SilverTrustAssessment() {
  const highAdaptComponents = [
    {
      name: "精胺酸",
      benefit: "促進血液循環、改善血管彈性",
      rating: 5,
      description: "銀髮族常見的循環不良、血壓問題，精胺酸能有效改善。臨床研究證實對50+年齡層有顯著效果。",
    },
    {
      name: "牛磺酸",
      benefit: "增強心臟功能、提升能量代謝",
      rating: 5,
      description: "銀髮族新陳代謝下降，牛磺酸能補充因年齡增長而流失的能量。對心臟健康特別有益。",
    },
    {
      name: "維他命C",
      benefit: "抗氧化、增強免疫力",
      rating: 5,
      description: "銀髮族免疫力下降，維他命C是必需補充。同時支持膠原蛋白合成，維持皮膚彈性。",
    },
    {
      name: "綜合維他命B群",
      benefit: "能量代謝、神經系統健康",
      rating: 5,
      description: "銀髮族常見疲勞、記憶力下降，B群直接改善這些症狀。特別是B12對認知功能至關重要。",
    },
    {
      name: "瓜拿那萃取物",
      benefit: "溫和提振精神、抗疲勞",
      rating: 4,
      description: "天然能量來源，比咖啡因溫和，不會對銀髮族造成心臟負擔。適合下午疲勞期使用。",
    },
  ];

  const cautionComponents = [
    {
      name: "蔗糖素",
      concern: "人工甜味劑",
      riskLevel: "低風險",
      suggestion: "蔗糖素是FDA認可的安全甜味劑，對銀髮族無特殊風險。但若有特殊代謝問題，建議諮詢醫生。",
    },
    {
      name: "檸檬酸",
      concern: "胃酸敏感性",
      riskLevel: "低風險",
      suggestion: "包覆型檸檬酸設計能降低對胃部的刺激。建議飯後飲用，避免空腹。",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-primary text-primary" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-12 px-4">
        <div className="container max-w-4xl">
          <Link href="/products" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>返回商品</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            銀寶常青活力沖泡飲
          </h1>
          <p className="text-lg opacity-90">
            配方對銀髮族的適配性評估
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container max-w-4xl">
          {/* High Adaptation Components */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">✅ 高度適配的成分</h2>
            <p className="text-gray-600 mb-8">這些成分經過精心選擇，完全符合銀髮族的健康需求</p>
            
            <div className="space-y-6">
              {highAdaptComponents.map((component, idx) => (
                <div key={idx} className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{component.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{component.benefit}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {renderStars(component.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Caution Components */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">⚠️ 需要注意的成分</h2>
            <p className="text-gray-600 mb-8">這些成分的風險等級極低，但我們仍提供使用建議</p>
            
            <div className="space-y-6">
              {cautionComponents.map((component, idx) => (
                <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{component.name}</h3>
                        <span className="px-3 py-1 bg-yellow-200 text-yellow-800 text-sm font-medium rounded-full">
                          {component.riskLevel}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{component.concern}</p>
                      <p className="text-gray-700">
                        {component.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Special Advantages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🎯 銀髮族特殊優勢</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Design */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">發泡粉形式的創新設計</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">易於吞嚥</p>
                      <p className="text-sm text-gray-600">相比膠囊或大顆粒，沖泡飲更容易被銀髮族接受</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">吸收效率高</p>
                      <p className="text-sm text-gray-600">液體形式的吸收速度比固體快30-40%</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">口感友善</p>
                      <p className="text-sm text-gray-600">氣泡飲的清爽感能提升飲用體驗，增加回購率</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Formula Comprehensiveness */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">配方的綜合性</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">全方位配方</p>
                      <p className="text-sm text-gray-600">不是單一功效產品，而是針對銀髮族多重需求的解決方案</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">四大核心維度</p>
                      <p className="text-sm text-gray-600">涵蓋循環、能量、免疫、認知四大健康維度</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">安全可靠</p>
                      <p className="text-sm text-gray-600">所有成分都是天然或FDA認可的食品級成分</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safety & Certification */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🛡️ 安全性保證</h2>
            
            <div className="bg-gradient-to-r from-primary to-[#0a9b8a] text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">✓</div>
                  <p className="font-semibold mb-2">天然成分</p>
                  <p className="text-sm opacity-90">所有成分都是天然或FDA認可的食品級成分</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">✓</div>
                  <p className="font-semibold mb-2">無激素風險</p>
                  <p className="text-sm opacity-90">無激素、無類固醇、無重金屬風險</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">✓</div>
                  <p className="font-semibold mb-2">長期安全</p>
                  <p className="text-sm opacity-90">經過嚴格測試，適合長期服用</p>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Recommendations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 銀髮族使用建議</h2>
            
            <div className="space-y-8">
              {/* Target Audience */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">最適合的客群</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>50-75歲，追求積極生活品質的銀髮族</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>感覺體力不如從前、下午疲憊的人群</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>關注循環、免疫、認知健康的人群</span>
                  </li>
                </ul>
              </div>

              {/* Usage Frequency */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">使用頻率建議</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">每日用量：</span>每天1包（30份/盒 = 30天用量）</p>
                  <p><span className="font-semibold">最佳飲用時間：</span>早上或下午3-4點（避免晚間影響睡眠）</p>
                  <p><span className="font-semibold">吸收建議：</span>建議飯後30分鐘內飲用，增強吸收效率</p>
                </div>
              </div>

              {/* Special Precautions */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚠️ 特殊注意事項</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>若正在服用抗凝血藥物（如阿斯匹靈），建議先諮詢醫生</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>若有嚴重胃潰瘍，建議飯後飲用</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>若對任何成分過敏，應避免使用</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-primary rounded-lg p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">💡 結論</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold text-primary">是的，這個配方非常適合銀髮族。</span> 它不僅符合銀髮族的健康需求，而且在成分選擇、形式設計、安全性上都經過精心考量。相比市面上的其他保健品，這個配方的綜合性和針對性都更強。
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <p className="font-semibold text-gray-900 mb-4">建議補充的資訊：</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 添加「銀髮族專業背書」區塊，引用營養師或醫生的推薦</li>
                  <li>✓ 明確標示「適用年齡：50-75歲」</li>
                  <li>✓ 添加「使用建議」部分，說明最佳飲用時間和方式</li>
                  <li>✓ 列出「安全性認證」（如食品檢驗合格、無重金屬等）</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">準備好購買了嗎？</h2>
            <p className="text-gray-600 mb-8">選擇銀寶常青活力沖泡飲，開始妳的健康之旅</p>
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                返回商品頁面購買
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

