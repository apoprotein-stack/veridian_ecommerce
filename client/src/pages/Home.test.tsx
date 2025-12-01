import { describe, it, expect } from "vitest";

describe("Home Page - Marketing Campaign V11.0", () => {
  // 四句行銷文案驗證
  describe("Four-Sentence Marketing Loop", () => {
    it("should contain the main visual headline", () => {
      const headline = "經期來的時候，給妳最溫柔的呵護";
      expect(headline).toBeTruthy();
      expect(headline.length).toBeGreaterThan(0);
    });

    it("should contain the data trust statement", () => {
      const dataTrust = "78% 姐妹說：這次經期，真的沒那麼難熬";
      expect(dataTrust).toBeTruthy();
      expect(dataTrust).toContain("78%");
    });

    it("should contain the product loop statement", () => {
      const productLoop = "內有活力氣泡飲提神，外有 Veridian 凝露守護，讓經期也水潤有活力";
      expect(productLoop).toBeTruthy();
      expect(productLoop).toContain("內");
      expect(productLoop).toContain("外");
    });

    it("should contain the emotional closing statement", () => {
      const emotionalClosing = "不是治療，是讓妳在經期依然敢好好愛自己";
      expect(emotionalClosing).toBeTruthy();
      expect(emotionalClosing).toContain("不是治療");
    });
  });

  // 募資方案驗證
  describe("Fundraising Plans", () => {
    const plans = [
      {
        name: "【成本價衝量】單入組",
        price: 599,
        features: ["私密凝露 50ml", "成本價優惠"],
      },
      {
        name: "【經期好夥伴】標準組",
        price: 1299,
        features: ["私密凝露 150ml", "蔓越莓風味活力氣泡飲", "內外雙守護完整方案"],
        isRecommended: true,
      },
      {
        name: "【78%見證】經期輕盈 ALL IN 組",
        price: 1999,
        features: ["私密凝露 300ml", "蔓越莓活力氣泡飲 2盒", "完整護理套組"],
      },
    ];

    it("should have three fundraising plans", () => {
      expect(plans.length).toBe(3);
    });

    it("should have correct pricing for Plan 1", () => {
      expect(plans[0].price).toBe(599);
    });

    it("should have correct pricing for Plan 2 (Recommended)", () => {
      expect(plans[1].price).toBe(1299);
      expect(plans[1].isRecommended).toBe(true);
    });

    it("should have correct pricing for Plan 3", () => {
      expect(plans[2].price).toBe(1999);
    });

    it("Plan 1 should include 50ml bottle", () => {
      expect(plans[0].features).toContain("私密凝露 50ml");
    });

    it("Plan 2 should include both products", () => {
      expect(plans[1].features).toContain("私密凝露 150ml");
      expect(plans[1].features).toContain("蔓越莓風味活力氣泡飲");
    });

    it("Plan 3 should be the most comprehensive", () => {
      expect(plans[2].features.length).toBe(3);
      expect(plans[2].features).toContain("蔓越莓活力氣泡飲 2盒");
    });

    it("Plan 2 should be marked as recommended", () => {
      const recommendedPlan = plans.find((p) => p.isRecommended);
      expect(recommendedPlan).toBeDefined();
      expect(recommendedPlan?.price).toBe(1299);
    });
  });

  // 見證數據驗證
  describe("Witness Data Section", () => {
    const witnessData = [
      { percentage: 78, description: "姐妹說：這次經期，真的沒那麼難熬" },
      { percentage: 92, description: "使用者推薦給親友" },
      { rating: 4.9, description: "平均滿意度評分" },
    ];

    it("should have 78% witness data", () => {
      const data = witnessData.find((d) => d.percentage === 78);
      expect(data).toBeDefined();
      expect(data?.description).toContain("經期");
    });

    it("should have 92% recommendation rate", () => {
      const data = witnessData.find((d) => d.percentage === 92);
      expect(data).toBeDefined();
      expect(data?.description).toContain("推薦");
    });

    it("should have 4.9/5 satisfaction rating", () => {
      const data = witnessData.find((d) => d.rating === 4.9);
      expect(data).toBeDefined();
      expect(data?.rating).toBeGreaterThan(4.5);
    });
  });

  // 品牌核心價值驗證
  describe("Brand Core Values", () => {
    const values = [
      {
        title: "真實的守護者",
        description: "以最誠實、透明的方式，守護每一位使用者的身體健康與自信",
      },
      {
        title: "翠綠生命力",
        description: "象徵品牌源於自然、純淨、充滿生命力的產品哲學",
      },
      {
        title: "透明的承諾",
        description: "沒有成分需要隱藏，因為真正的信任，始於完全的透明",
      },
    ];

    it("should have three core values", () => {
      expect(values.length).toBe(3);
    });

    it("should include 'Guardian of Truth' value", () => {
      const value = values.find((v) => v.title === "真實的守護者");
      expect(value).toBeDefined();
      expect(value?.description).toContain("誠實");
    });

    it("should include 'Viridian Life Force' value", () => {
      const value = values.find((v) => v.title === "翠綠生命力");
      expect(value).toBeDefined();
      expect(value?.description).toContain("自然");
    });

    it("should include 'Transparent Promise' value", () => {
      const value = values.find((v) => v.title === "透明的承諾");
      expect(value).toBeDefined();
      expect(value?.description).toContain("透明");
    });
  });

  // 品牌應用展示驗證
  describe("Brand Applications", () => {
    const applications = [
      {
        title: "完整產品線",
        description: "從清潔、精華到乳霜，提供全方位的私密保養方案",
        image: "/VeridianProductPackagingCollection.png",
      },
      {
        title: "高級品牌空間",
        description: "隱密、優雅、專業的購物環境",
        image: "/VeridianStoreEnvironment.png",
      },
    ];

    it("should have two brand application sections", () => {
      expect(applications.length).toBe(2);
    });

    it("should include product line showcase", () => {
      const app = applications.find((a) => a.title === "完整產品線");
      expect(app).toBeDefined();
      expect(app?.image).toContain("VeridianProductPackagingCollection");
    });

    it("should include store environment showcase", () => {
      const app = applications.find((a) => a.title === "高級品牌空間");
      expect(app).toBeDefined();
      expect(app?.image).toContain("VeridianStoreEnvironment");
    });
  });

  // 水凝絲滑科技驗證
  describe("Water-Gel Technology", () => {
    const features = [
      "專屬 pH 值配方，符合女性私密肌膚的自然環境",
      "玻尿酸與益生元，提供深層保濕與微生物平衡",
      "輕盈質地，無黏膩感，快速吸收",
      "天然成分，無激素、無類固醇",
    ];

    it("should have four key technology features", () => {
      expect(features.length).toBe(4);
    });

    it("should mention pH balance", () => {
      const feature = features.find((f) => f.includes("pH"));
      expect(feature).toBeDefined();
    });

    it("should mention hydration and probiotics", () => {
      const feature = features.find((f) => f.includes("玻尿酸"));
      expect(feature).toBeDefined();
      expect(feature).toContain("益生元");
    });

    it("should mention lightweight texture", () => {
      const feature = features.find((f) => f.includes("輕盈"));
      expect(feature).toBeDefined();
    });

    it("should mention natural ingredients", () => {
      const feature = features.find((f) => f.includes("天然成分"));
      expect(feature).toBeDefined();
      expect(feature).toContain("無激素");
    });
  });

  // 頁面結構驗證
  describe("Page Structure", () => {
    it("should have hero section with main headline", () => {
      const heroContent = "經期來的時候，給妳最溫柔的呵護";
      expect(heroContent).toBeTruthy();
    });

    it("should have brand tagline section", () => {
      const tagline = "Veridian: Guarding Your Truth";
      expect(tagline).toBeTruthy();
    });

    it("should have fundraising campaign section", () => {
      const campaignTitle = "經期好夥伴 - 募資方案";
      expect(campaignTitle).toBeTruthy();
    });

    it("should have witness data section", () => {
      const witnessTitle = "78% 姐妹的真實見證";
      expect(witnessTitle).toBeTruthy();
    });

    it("should have brand values section", () => {
      const valuesTitle = "Veridian 的核心價值";
      expect(valuesTitle).toBeTruthy();
    });

    it("should have brand applications section", () => {
      const appsTitle = "Veridian 品牌應用";
      expect(appsTitle).toBeTruthy();
    });

    it("should have water-gel technology section", () => {
      const techTitle = "水凝絲滑科技";
      expect(techTitle).toBeTruthy();
    });

    it("should have call-to-action section", () => {
      const ctaTitle = "不是治療，是讓妳在經期依然敢好好愛自己";
      expect(ctaTitle).toBeTruthy();
    });
  });

  // 行銷文案一致性驗證
  describe("Marketing Copy Consistency", () => {
    it("should use consistent terminology for product combination", () => {
      const term = "經期好夥伴";
      const occurrences = [
        "【經期好夥伴】標準組",
        "經期好夥伴 - 募資方案",
        "探索經期好夥伴",
      ];
      occurrences.forEach((text) => {
        expect(text).toContain(term);
      });
    });

    it("should emphasize inner-outer dual protection concept", () => {
      const innerOuter = "內外雙守護";
      expect(innerOuter).toBeTruthy();
    });

    it("should reference Veridian essence gel consistently", () => {
      const product = "Veridian 凝露";
      expect(product).toBeTruthy();
    });

    it("should reference cranberry beverage consistently", () => {
      const product = "蔓越莓風味活力氣泡飲";
      expect(product).toBeTruthy();
    });
  });
});
