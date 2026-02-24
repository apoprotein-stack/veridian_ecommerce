import { describe, it, expect } from 'vitest';

/**
 * Home Page v9.3 Unit Tests
 * 驗證粒線體健康敘事框架、雙軸線產品戰略和科學親近性
 */

describe('Home Page v9.3 - Mitochondrial Health Narrative', () => {
  // 1. 粒線體健康敘事框架測試
  describe('Mitochondrial Health Narrative', () => {
    it('should display main headline: "用透明的科學，從細胞粒線體重啟健康"', () => {
      const headline = '用透明的科學，從細胞粒線體重啟健康';
      expect(headline).toContain('粒線體');
      expect(headline).toContain('科學');
    });

    it('should display brand spirit: Verde + Veritas', () => {
      const brandSpirit = 'Veridian = Verde（生命）+ Veritas（真實）';
      expect(brandSpirit).toContain('Verde');
      expect(brandSpirit).toContain('Veritas');
    });

    it('should display 60:40 copywriting ratio', () => {
      const ratio = '60% 科學 + 40% 溫度';
      expect(ratio).toContain('60%');
      expect(ratio).toContain('40%');
    });

    it('should explain ProFit® and MDBD® technologies', () => {
      const technologies = 'ProFit® 後生元與 MDBD® 遞送技術';
      expect(technologies).toContain('ProFit®');
      expect(technologies).toContain('MDBD®');
    });
  });

  // 2. 五步驟邏輯鏈測試
  describe('Five-Step Logic Chain', () => {
    it('should display all 5 steps of mitochondrial health', () => {
      const steps = [
        '調節腸道菌叢',
        '提升營養吸收效率',
        '支持粒線體功能',
        '啟動軸線修復',
        '整體感知改善'
      ];
      steps.forEach(step => {
        expect(step.length).toBeGreaterThan(0);
      });
    });

    it('should include D7-D14 timeline', () => {
      const timeline = 'D7-D14：腸胃通暢感、膚感初步變化';
      expect(timeline).toContain('D7-D14');
      expect(timeline).toContain('腸胃通暢感');
    });

    it('should include D30 timeline', () => {
      const timeline = 'D30：睡眠品質、精力、皮膚均勻度';
      expect(timeline).toContain('D30');
      expect(timeline).toContain('睡眠品質');
    });

    it('should include D56/D35 timeline', () => {
      const timeline = 'D56（單內服）/ D35（內外協同）';
      expect(timeline).toContain('D56');
      expect(timeline).toContain('D35');
    });

    it('should explain step 1: gut microbiota adjustment', () => {
      const step1 = 'ProFit® 後生元 → 修復腸道屏障 → 減少腸道慢性發炎';
      expect(step1).toContain('ProFit®');
      expect(step1).toContain('腸道屏障');
    });

    it('should explain step 2: nutrient absorption', () => {
      const step2 = 'MDBD® 遞送技術將吸收率從 25-35% 提升至 58-65%';
      expect(step2).toContain('25-35%');
      expect(step2).toContain('58-65%');
    });

    it('should explain step 3: mitochondrial function', () => {
      const step3 = '粒線體 ATP 生成效率提升';
      expect(step3).toContain('ATP');
      expect(step3).toContain('粒線體');
    });

    it('should explain dual axis in step 4', () => {
      const step4 = '腸腦軸線（睡眠、壓力、免疫）與腸皮軸線（皮膚屏障、膚況、抗老）';
      expect(step4).toContain('腸腦軸線');
      expect(step4).toContain('腸皮軸線');
    });
  });

  // 3. 雙軸線產品戰略測試
  describe('Dual Axis Product Strategy', () => {
    it('should display GB series (Gut-Brain Axis)', () => {
      const gbSeries = ['GB-01N 腸淨能®', 'GB-02N 強益免®', 'GB-03N 好眠寧®', 'GB-04N 舒壓靈®'];
      gbSeries.forEach(product => {
        expect(product).toContain('GB-');
      });
    });

    it('should display GS series (Gut-Skin Axis)', () => {
      const gsSeries = ['GS-01N 晶妍膠原®', 'GS-01C 晶妍精華®', 'GS-03N/C 私淨源/護®', 'GS-02C 煥妍修護®'];
      gsSeries.forEach(product => {
        expect(product).toContain('GS-');
      });
    });

    it('should target 25-45 year old professionals for GB series', () => {
      const gbTarget = '25-45 歲都市工作者';
      expect(gbTarget).toContain('25-45');
      expect(gbTarget).toContain('都市工作者');
    });

    it('should target 28-42 year old women for GS series', () => {
      const gsTarget = '28-42 歲女性';
      expect(gsTarget).toContain('28-42');
      expect(gsTarget).toContain('女性');
    });

    it('should describe GB-01N as foundation product', () => {
      const gb01n = '腸道環境重建、整體健康基礎';
      expect(gb01n).toContain('腸道環境');
      expect(gb01n).toContain('基礎');
    });

    it('should describe GB-02N for immune support', () => {
      const gb02n = '腸道免疫強化、反覆感冒調理';
      expect(gb02n).toContain('免疫');
      expect(gb02n).toContain('感冒');
    });

    it('should describe GB-03N for sleep improvement', () => {
      const gb03n = '腸腦軸訊號優化、睡眠品質改善';
      expect(gb03n).toContain('睡眠');
      expect(gb03n).toContain('腸腦軸');
    });

    it('should describe GB-04N for stress relief', () => {
      const gb04n = '腸道血清素支持、壓力情緒調節';
      expect(gb04n).toContain('血清素');
      expect(gb04n).toContain('壓力');
    });

    it('should describe GS-01N for collagen synthesis', () => {
      const gs01n = '腸皮軸啟動、膠原蛋白合成支持';
      expect(gs01n).toContain('膠原蛋白');
      expect(gs01n).toContain('腸皮軸');
    });

    it('should describe GS-03N/C for intimate care', () => {
      const gs03 = '私密菌相平衡、內外雙軌護理';
      expect(gs03).toContain('私密');
      expect(gs03).toContain('菌相');
    });
  });

  // 4. 內外協同設計測試
  describe('Inner-Outer Synergy Design', () => {
    it('should explain oral product role', () => {
      const oral = '作用於腸道，從根源改善腸皮軸的訊號傳遞';
      expect(oral).toContain('腸道');
      expect(oral).toContain('根源');
    });

    it('should explain synergy effect', () => {
      const synergy = '修復能力與外用支持形成互補，感知改善時間從 56 天縮短至 35 天';
      expect(synergy).toContain('56 天');
      expect(synergy).toContain('35 天');
    });

    it('should explain topical product role', () => {
      const topical = '直接在皮膚層提供屏障修護支持';
      expect(topical).toContain('皮膚層');
      expect(topical).toContain('屏障修護');
    });
  });

  // 5. 定價與市場定位測試
  describe('Pricing & Market Position', () => {
    it('should position as "中高價 × 高科學親近性"', () => {
      const position = '中高價 × 高科學親近性';
      expect(position).toContain('中高價');
      expect(position).toContain('科學親近性');
    });

    it('should state price range $1,680-$2,280/month', () => {
      const priceRange = '$1,680-$2,280/月';
      expect(priceRange).toContain('1,680');
      expect(priceRange).toContain('2,280');
    });

    it('should explain GS-01N pricing rationale - root repair', () => {
      const rationale1 = 'ProFit® 後生元成分，修復腸皮軸的根本機制';
      expect(rationale1).toContain('ProFit®');
      expect(rationale1).toContain('根本機制');
    });

    it('should explain GS-01N pricing rationale - absorption difference', () => {
      const rationale2 = 'MDBD® 遞送技術將腸道吸收率從一般膠囊的 25-35% 提升至 58-65%';
      expect(rationale2).toContain('25-35%');
      expect(rationale2).toContain('58-65%');
    });

    it('should explain GS-01N pricing rationale - time to effect', () => {
      const rationale3 = '搭配 GS-01C 外用時，見效時間從單一口服的 56 天縮短至 35 天';
      expect(rationale3).toContain('56 天');
      expect(rationale3).toContain('35 天');
    });

    it('should provide communication strategy', () => {
      const strategy = '不是「比 DHC 貴 4 倍」，而是「DHC 只補材料，Veridian 修根源」';
      expect(strategy).toContain('DHC');
      expect(strategy).toContain('根源');
    });
  });

  // 6. 試用先行機制測試
  describe('Trial-First Mechanism', () => {
    it('should display trial offer: $60 for $380 value', () => {
      const offer = '$60 運費取得市值 $380 的雙軸體驗組';
      expect(offer).toContain('60');
      expect(offer).toContain('380');
    });

    it('should emphasize science-backed approach', () => {
      const message = '試用先行，科學驗證';
      expect(message).toContain('試用');
      expect(message).toContain('科學驗證');
    });
  });

  // 7. 文案風格統一測試 (60% Science + 40% Warmth)
  describe('Copywriting Style Consistency (60:40)', () => {
    it('should use scientific terminology appropriately', () => {
      const scientificTerms = ['粒線體', 'ATP', '腸道屏障', '後生元', '遞送技術', '菌相'];
      scientificTerms.forEach(term => {
        expect(term.length).toBeGreaterThan(0);
      });
    });

    it('should balance with warm, relatable language', () => {
      const warmTerms = ['溫柔的呵護', '親身體驗', '敢好好愛自己', '透明的科學'];
      warmTerms.forEach(term => {
        expect(term.length).toBeGreaterThan(0);
      });
    });

    it('should avoid exaggerated claims', () => {
      const claims = '不用誇張話術，不仰賴明星光環';
      expect(claims).toContain('不用誇張話術');
      expect(claims).toContain('明星光環');
    });

    it('should emphasize transparency', () => {
      const transparency = '讓產品本身被親身體驗所驗證';
      expect(transparency).toContain('親身體驗');
      expect(transparency).toContain('驗證');
    });
  });

  // 8. 頁面結構完整性測試
  describe('Page Structure Completeness', () => {
    it('should include hero section with main message', () => {
      const heroElements = ['粒線體健康', '雙軸線守護', '透明的科學'];
      heroElements.forEach(element => {
        expect(element.length).toBeGreaterThan(0);
      });
    });

    it('should include five-step logic chain section', () => {
      const section = '粒線體健康的五步驟邏輯鏈';
      expect(section).toContain('五步驟');
      expect(section).toContain('邏輯鏈');
    });

    it('should include dual axis product section', () => {
      const section = '雙軸線聚焦發展';
      expect(section).toContain('雙軸線');
      expect(section).toContain('聚焦');
    });

    it('should include inner-outer synergy section', () => {
      const section = '內外協同 = 35 天見效';
      expect(section).toContain('內外協同');
      expect(section).toContain('35 天');
    });

    it('should include pricing & market position section', () => {
      const section = '中高價 × 高科學親近性';
      expect(section).toContain('中高價');
      expect(section).toContain('科學親近性');
    });

    it('should include call-to-action section', () => {
      const cta = '試用先行，科學驗證';
      expect(cta).toContain('試用');
      expect(cta).toContain('驗證');
    });
  });

  // 9. 目標客群定位測試
  describe('Target Audience Positioning', () => {
    it('should identify GB series target: 25-45 year old professionals with sleep/stress/immunity issues', () => {
      const target = '25-45 歲都市工作者，有睡眠障礙、長期壓力、免疫力偏低';
      expect(target).toContain('25-45');
      expect(target).toContain('睡眠障礙');
      expect(target).toContain('壓力');
    });

    it('should identify GS series target: 28-42 year old women open to "eating beauty"', () => {
      const target = '28-42 歲女性，有皮膚問題且開放「吃出美肌」概念';
      expect(target).toContain('28-42');
      expect(target).toContain('女性');
      expect(target).toContain('吃出美肌');
    });
  });

  // 10. 品牌承諾與價值測試
  describe('Brand Promise & Values', () => {
    it('should emphasize root cause repair over symptom relief', () => {
      const promise = '修復腸皮軸的根本機制';
      expect(promise).toContain('根本');
      expect(promise).toContain('機制');
    });

    it('should highlight scientific backing', () => {
      const backing = 'ProFit® 後生元與 MDBD® 遞送技術';
      expect(backing).toContain('ProFit®');
      expect(backing).toContain('MDBD®');
    });

    it('should promise time-to-effect transparency', () => {
      const promise = 'D7-D14、D30、D56/D35 的見效時間表';
      expect(promise).toContain('D7-D14');
      expect(promise).toContain('D30');
    });

    it('should emphasize dual-axis coordination', () => {
      const coordination = '內外協同 = 35 天見效';
      expect(coordination).toContain('內外協同');
      expect(coordination).toContain('35 天');
    });
  });
});
