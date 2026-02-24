import { Brain, Leaf } from "lucide-react";

export default function BrandStory() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#2c2c2c]">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a2e] to-[#1e3a5f] text-white py-32 px-6">
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(58,125,90,0.3) 0%, transparent 70%)"
        }} />
        
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-widest uppercase text-[#8fbfa4] mb-6">Veridian — Brand Story</p>
          <h1 className="text-5xl font-light leading-tight mb-6 text-[#f0f5f2]">
            與其補充燃料，<br />
            <span className="text-[#7ec8a0]">不如修復發電機</span>
          </h1>
          <p className="text-lg font-light text-[#a8c4b4] max-w-2xl mx-auto">
            我們從細胞最深處出發，用透明的科學與真誠的溫度，讓健康重新成為你可以掌握的事。
          </p>
          <div className="w-10 h-px bg-[#7ec8a0] mx-auto mt-8" />
        </div>
      </section>

      {/* ═══ SECTION 1：起點 ═══ */}
      <section className="py-24 px-6 border-b border-[#d8d8d0]">
        <div className="container max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-6">Origin</p>
          <h2 className="text-4xl font-normal text-[#1e3a5f] mb-8 leading-tight">
            一個很多人都有，卻說不清楚的感覺
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              你試過很多保健品。也許是朋友推薦的那瓶，也許是直播上限時特價搶到的。吃了一段時間，好像沒什麼感覺；停了以後，也不確定是不是真的差了什麼。
            </p>
            
            <p>
              這種感覺不是你的問題。它是整個保健品市場的問題。
            </p>
            
            <p>
              幾十年來，這個市場的邏輯是「補充缺乏的東西」——缺鈣就補鈣，缺鐵就補鐵，覺得累就買一瓶號稱可以「增強體力」的膠囊。這個邏輯沒有錯，但它只回答了問題的表面。很多時候，你感到疲勞、皮膚狀況不穩定、睡眠品質下降，根本原因不是缺少某一種成分，而是身體「轉化」那些成分的能力出了問題。
            </p>
            
            <p>
              <strong>Veridian 從這個問題的深處開始。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2：洞察 ═══ */}
      <section className="py-24 px-6 border-b border-[#d8d8d0]">
        <div className="container max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-6">Insight</p>
          <h2 className="text-4xl font-normal text-[#1e3a5f] mb-8 leading-tight">
            你的細胞裡有一座發電廠，它比你想的更需要照顧
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              每一個細胞裡都有一個小小的能量工廠，叫做粒線體。它的工作很簡單，也非常關鍵——把你吃進去的養分，轉化成細胞可以直接使用的能量，一種叫做 ATP 的物質。
            </p>
            
            <p>
              你補充的蛋白質、維生素、礦物質，最終都要經過粒線體這道程序，才能真正被身體利用。如果粒線體的效率下降了，補再多都像是往一個破掉的水壺裡加水。
            </p>

            {/* Pull Quote */}
            <div className="my-8 p-8 bg-[#e8f4ec] border-l-4 border-[#3a7d5a] rounded-r-lg">
              <p className="text-xl italic text-[#1e3a5f] leading-relaxed">
                與其盲目補充燃料，不如先修復發電機本身。
              </p>
              <p className="text-sm text-[#6b7280] mt-4 font-sans tracking-wide">— Veridian 品牌核心洞察</p>
            </div>
            
            <p>
              這就是 Veridian 的起點：我們不是要告訴你缺少什麼，而是要幫助你的身體，讓它重新有能力把好的東西轉化成真實的狀態改變。
            </p>
            
            <p>
              腸道是這一切的上游。腸道健不健康，決定了養分能不能被充分吸收、粒線體能不能獲得穩定的運作原料、身體的發炎程度是高還是低。我們從腸道進入，從粒線體往外延伸，最終影響的，是你每天真實感受到的那些事：睡得好不好，皮膚狀況穩不穩定，早上起床的那口氣是輕還是重。
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3：科學 ═══ */}
      <section className="py-24 px-6 border-b border-[#d8d8d0]">
        <div className="container max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-6">Science</p>
          <h2 className="text-4xl font-normal text-[#1e3a5f] mb-8 leading-tight">
            我們想讓科學說清楚，而不是說複雜
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Veridian 所有產品的技術核心，是我們自主研發的 <strong>ProFit® 後生元技術</strong>。我們知道「後生元」這個詞聽起來很陌生，所以先講清楚它跟你之前聽過的益生菌有什麼不同。
            </p>

            {/* Science Card */}
            <div className="my-8 p-8 bg-[#e8eef5] border border-[#c8d8e8] rounded-xl">
              <p className="text-xs tracking-widest uppercase text-[#1e3a5f] mb-4 font-sans">科學說明 — ProFit® 後生元技術</p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">益生菌 vs 後生元：一個簡單的比喻</h3>
              <div className="space-y-4 text-base text-[#374151]">
                <p>
                  益生菌是「活的菌」，吃進去之後，它們要在你的腸道裡存活下來，才能發揮作用。問題是，很多益生菌在通過胃酸的時候就被破壞了，真正抵達腸道的比例相當有限，而且每個人腸道環境不同，效果也差異很大。
                </p>
                <p>
                  後生元不一樣。它是益生菌在完成發酵之後，留下來的那些代謝產物與活性分子——不是活菌本身，而是菌在工作之後產出的精華。這些分子穩定性高，不怕胃酸，也不依賴你的腸道環境。它們抵達腸道之後，直接參與細胞層級的作用。
                </p>
                <p>
                  <strong>ProFit® 採用 13 株專利菌株、72 小時精準發酵，配合三段式溫度控制</strong>，讓每批次的活性成分濃度落在設計範圍內，確保你每次吃到的，都是一致的品質。
                </p>
              </div>
            </div>

            <p>
              這個技術讓 Veridian 的產品能夠從兩條路徑作用：一條通往你的睡眠品質與情緒穩定，另一條通往你的皮膚狀態與屏障修復。這兩條路徑，我們稱之為<strong>腸腦軸線</strong>與<strong>腸皮軸線</strong>。
            </p>
          </div>

          {/* Axes */}
          <div className="mt-12 space-y-6">
            {/* Gut-Brain Axis */}
            <div className="p-8 bg-white border border-[#d8d8d0] rounded-lg">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-[#e8eef5] flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1e3a5f] mb-3">腸腦軸線 — 睡眠、壓力、情緒</h4>
                  <p className="text-[#6b7280] leading-relaxed">
                    你的腸道與大腦之間有一條雙向的溝通通道，透過迷走神經與神經傳導物質相互影響。身體裡超過 90% 的血清素由腸道製造，而血清素直接影響你的睡眠節律與情緒穩定性。腸道健康改善，這條通道就更順暢。
                  </p>
                </div>
              </div>
            </div>

            {/* Gut-Skin Axis */}
            <div className="p-8 bg-white border border-[#d8d8d0] rounded-lg">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-[#f4e8f0] flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-8 h-8 text-[#3a7d5a]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1e3a5f] mb-3">腸皮軸線 — 皮膚屏障、膚況、抗老</h4>
                  <p className="text-[#6b7280] leading-relaxed">
                    皮膚的慢性發炎，有相當大的比例源自腸道的低度發炎狀態。當腸道屏障完整，發炎訊號減少，皮膚幹細胞的更新能力提升，膠原蛋白的合成速度也會改善。這就是為什麼「喝的保養」可以配合「擦的保養」，從不同層次作用。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-lg leading-relaxed text-[#2c2c2c]">
            <p>
              我們刻意不把這些寫得太複雜。你不需要記住所有機制，你只需要知道：<strong>Veridian 的產品有它的作用邏輯，這個邏輯是有依據的，而且我們願意在任何時候把它說清楚。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4：品牌哲學 ═══ */}
      <section className="py-24 px-6 border-b border-[#d8d8d0]">
        <div className="container max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-6">Philosophy</p>
          <h2 className="text-4xl font-normal text-[#1e3a5f] mb-8 leading-tight">
            一個名字，兩個承諾
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p>
              Veridian 這個名字來自拉丁文的兩個詞根：<strong>Verde</strong>，代表生命力與綠色的再生；<strong>Veritas</strong>，代表真實，不掩飾，不誇大。
            </p>
            
            <p>
              這兩個詞根，也是我們對你的兩個承諾。
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="p-6 bg-white border border-[#d8d8d0] rounded-lg">
              <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-3 font-sans">01 — Warmth</p>
              <h4 className="text-lg font-semibold text-[#1e3a5f] mb-3">溫度</h4>
              <p className="text-[#6b7280] leading-relaxed">
                科學可以是體貼的。我們把研究成果翻譯成你能理解的語言，不製造距離感，不用術語製造崇拜。
              </p>
            </div>

            <div className="p-6 bg-white border border-[#d8d8d0] rounded-lg">
              <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-3 font-sans">02 — Autonomy</p>
              <h4 className="text-lg font-semibold text-[#1e3a5f] mb-3">自主</h4>
              <p className="text-[#6b7280] leading-relaxed">
                你有權利在付費前先了解。試用先行不是策略噱頭，是我們對產品效果有信心的表現方式。
              </p>
            </div>

            <div className="p-6 bg-white border border-[#d8d8d0] rounded-lg">
              <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-3 font-sans">03 — Transparency</p>
              <h4 className="text-lg font-semibold text-[#1e3a5f] mb-3">透明</h4>
              <p className="text-[#6b7280] leading-relaxed">
                我們不仰賴代言人的光環，也不用限時特價製造焦慮。每一個成分、每一個數據，你都可以問我們，我們都會給你一個真實的答案。
              </p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              我們知道這個市場裡有太多「革命性突破」、太多「獨家配方」、太多讓人感動落淚的品牌故事。Veridian 不想成為那樣的品牌。
            </p>
            
            <p>
              我們想要的，是你用了一段時間之後，回頭想想自己的睡眠、精力、皮膚狀態，然後說一句：「好像真的有點不一樣。」
            </p>
            
            <p>
              <strong>不需要奇蹟。就是那種安靜的、可以持續的、真實的不一樣。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5：試用 ═══ */}
      <section className="py-24 px-6 border-b border-[#d8d8d0]">
        <div className="container max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#3a7d5a] mb-6">Promise</p>
          <h2 className="text-4xl font-normal text-[#1e3a5f] mb-8 leading-tight">
            我們希望你先體驗，再決定
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              在這個市場裡，「先付錢、再相信」幾乎是預設的規則。我們想打破這件事。
            </p>
            
            <p>
              Veridian 的第一步，是試用。不是因為我們不信任自己的產品，而是因為我們認為，<strong>真正的信任是在體驗之後建立的，不是在購買之前就必須建立的。</strong>
            </p>
            
            <p>
              我們設計了一套感知時間表：
            </p>
            <ul className="space-y-3 ml-6">
              <li>• <strong>D7-D14：</strong>多數人會注意到腸胃的變化</li>
              <li>• <strong>D30：</strong>睡眠與精力的改變會變得可觀察</li>
              <li>• <strong>D35-D56：</strong>完整的腸皮軸線效果，通常需要口服與外用協同使用</li>
            </ul>
            
            <p>
              這些不是承諾，是我們整理自用戶回饋的一個參考框架。每個人的身體狀況不同，時間點也會有所差異。但這個框架至少告訴你，你在等什麼，大概需要等多久。
            </p>

            {/* Pull Quote */}
            <div className="my-8 p-8 bg-[#e8f4ec] border-l-4 border-[#3a7d5a] rounded-r-lg">
              <p className="text-xl italic text-[#1e3a5f] leading-relaxed">
                我們希望你對 Veridian 的信任，是因為你感受到了，而不是因為我們說得好聽。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a2e] to-[#1e3a5f] text-white py-32 px-6">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light leading-tight mb-6 text-[#f0f5f2]">
            細胞的能量，是一切的起點
          </h2>
          <p className="text-lg font-light text-[#a8c4b4] max-w-xl mx-auto">
            從腸道開始，經過粒線體，流向睡眠、皮膚、精力，以及你每天早上醒來的那種狀態。我們在這裡，不是為了解決一個症狀，而是為了讓這條路徑變得順暢一點。
          </p>
          <div className="mt-12 text-sm tracking-widest uppercase text-[#7ec8a0]">
            Veridian — Verde × Veritas
          </div>
        </div>
      </section>
    </div>
  );
}
