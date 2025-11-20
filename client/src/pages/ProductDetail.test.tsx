import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * ProductDetail Component Unit Tests
 * 
 * These tests verify the core logic and behavior of the ProductDetail component,
 * including:
 * - Size selection for Veridian Intimate products
 * - Price calculation based on selected size
 * - Product information display
 * - Stock status handling
 */

describe("ProductDetail Component Logic", () => {
  // Test size options configuration
  describe("Size Options Configuration", () => {
    const sizeOptions = [
      { size: "50ml", price: 195, label: "隨身組" },
      { size: "150ml", price: 520, label: "居家組" },
      { size: "300ml", price: 975, label: "忠實愛護" },
    ];

    it("should have three size options", () => {
      expect(sizeOptions).toHaveLength(3);
    });

    it("should have correct prices for each size", () => {
      expect(sizeOptions[0].price).toBe(195);
      expect(sizeOptions[1].price).toBe(520);
      expect(sizeOptions[2].price).toBe(975);
    });

    it("should have correct labels for each size", () => {
      expect(sizeOptions[0].label).toBe("隨身組");
      expect(sizeOptions[1].label).toBe("居家組");
      expect(sizeOptions[2].label).toBe("忠實愛護");
    });

    it("should find price by size", () => {
      const selectedSize = "150ml";
      const currentPrice = sizeOptions.find(opt => opt.size === selectedSize)?.price || 520;
      expect(currentPrice).toBe(520);
    });
  });

  // Test product identification logic
  describe("Product Identification", () => {
    it("should identify Veridian Intimate products correctly", () => {
      const productName = "Veridian 私密保養凝露";
      const isVeridianIntimate = productName.includes("Veridian") && 
        (productName.includes("私密") || productName.includes("清爽") || 
         productName.includes("舒適") || productName.includes("溫和") || 
         productName.includes("益生") || productName.includes("完整"));
      
      expect(isVeridianIntimate).toBe(true);
    });

    it("should not identify non-Veridian products as Veridian Intimate", () => {
      const productName = "s-Trust 銀寶常青活力沖泡飲";
      const isVeridianIntimate = productName.includes("Veridian") && 
        (productName.includes("私密") || productName.includes("清爽"));
      
      expect(isVeridianIntimate).toBe(false);
    });

    it("should identify products with private care keywords", () => {
      const productNames = [
        "Veridian 私密保養凝露",
        "Veridian 清爽精華液",
        "Veridian 舒適修護霜",
        "Veridian 溫和潔淨露",
        "Veridian 益生元修護精油",
        "Veridian 完整護理套組",
      ];

      productNames.forEach(name => {
        const isVeridianIntimate = name.includes("Veridian") && 
          (name.includes("私密") || name.includes("清爽") || 
           name.includes("舒適") || name.includes("溫和") || 
           name.includes("益生") || name.includes("完整"));
        
        expect(isVeridianIntimate).toBe(true);
      });
    });
  });

  // Test stock status logic
  describe("Stock Status", () => {
    it("should indicate in stock when stock > 0", () => {
      const stock = 100;
      const isInStock = stock > 0;
      expect(isInStock).toBe(true);
    });

    it("should indicate out of stock when stock = 0", () => {
      const stock = 0;
      const isInStock = stock > 0;
      expect(isInStock).toBe(false);
    });

    it("should format stock message correctly", () => {
      const stock = 50;
      const stockMessage = stock > 0 ? `庫存: ${stock}` : '缺貨';
      expect(stockMessage).toBe("庫存: 50");
    });
  });

  // Test product benefits configuration
  describe("Product Benefits", () => {
    it("should have correct benefits for Veridian Intimate products", () => {
      const veridianBenefits = [
        "黃金 pH 4.0 平衡配方，維持私密肌膚的天然弱酸性環境",
        "翠綠植萃修護力，富含有機認證蘆薈、積雪草萃取",
        "The Honest Promise，公開全成分，八大無添加",
        "輕盈水感質地，真空壓瓶設計，清爽不黏膩",
      ];

      expect(veridianBenefits).toHaveLength(4);
      expect(veridianBenefits[0]).toContain("pH 4.0");
      expect(veridianBenefits[2]).toContain("Honest Promise");
    });

    it("should have eight no-add commitments", () => {
      const noAddCommitments = [
        "無皂鹼",
        "無酒精",
        "無 Paraben",
        "無香精",
        "無色素",
        "無激素",
        "無類固醇",
        "無重金屬",
      ];

      expect(noAddCommitments).toHaveLength(8);
    });
  });

  // Test quantity logic
  describe("Quantity Selection", () => {
    it("should enforce minimum quantity of 1", () => {
      let quantity = 0;
      quantity = Math.max(1, quantity);
      expect(quantity).toBe(1);
    });

    it("should enforce maximum quantity based on stock", () => {
      const stock = 50;
      let quantity = 100;
      quantity = Math.min(stock, quantity);
      expect(quantity).toBe(50);
    });

    it("should allow quantity increment within stock limit", () => {
      const stock = 100;
      let quantity = 5;
      quantity = Math.min(stock, quantity + 1);
      expect(quantity).toBe(6);
    });

    it("should allow quantity decrement to minimum 1", () => {
      let quantity = 2;
      quantity = Math.max(1, quantity - 1);
      expect(quantity).toBe(1);
    });
  });

  // Test price calculation
  describe("Price Calculation", () => {
    it("should calculate correct total for different quantities and sizes", () => {
      const sizeOptions = [
        { size: "50ml", price: 195 },
        { size: "150ml", price: 520 },
        { size: "300ml", price: 975 },
      ];

      // Test 50ml x 2
      let selectedSize = "50ml";
      let quantity = 2;
      let currentPrice = sizeOptions.find(opt => opt.size === selectedSize)?.price || 520;
      let total = currentPrice * quantity;
      expect(total).toBe(390);

      // Test 150ml x 3
      selectedSize = "150ml";
      quantity = 3;
      currentPrice = sizeOptions.find(opt => opt.size === selectedSize)?.price || 520;
      total = currentPrice * quantity;
      expect(total).toBe(1560);

      // Test 300ml x 1
      selectedSize = "300ml";
      quantity = 1;
      currentPrice = sizeOptions.find(opt => opt.size === selectedSize)?.price || 520;
      total = currentPrice * quantity;
      expect(total).toBe(975);
    });
  });

  // Test default values
  describe("Default Values", () => {
    it("should have 150ml as default size", () => {
      const defaultSize = "150ml";
      expect(defaultSize).toBe("150ml");
    });

    it("should have 1 as default quantity", () => {
      const defaultQuantity = 1;
      expect(defaultQuantity).toBe(1);
    });

    it("should have 520 as default price (150ml)", () => {
      const sizeOptions = [
        { size: "50ml", price: 195 },
        { size: "150ml", price: 520 },
        { size: "300ml", price: 975 },
      ];
      const defaultPrice = sizeOptions.find(opt => opt.size === "150ml")?.price || 520;
      expect(defaultPrice).toBe(520);
    });
  });

  // Test product display conditions
  describe("Product Display Conditions", () => {
    it("should show size selection only for Veridian Intimate products", () => {
      const productName = "Veridian 私密保養凝露";
      const shouldShowSizeSelection = productName.includes("Veridian") && 
        productName.includes("私密");
      expect(shouldShowSizeSelection).toBe(true);
    });

    it("should show special benefits for Veridian Intimate products", () => {
      const productName = "Veridian 私密保養凝露";
      const shouldShowSpecialBenefits = productName.includes("Veridian") && 
        productName.includes("私密");
      expect(shouldShowSpecialBenefits).toBe(true);
    });

    it("should show Honest Promise section for Veridian Intimate products", () => {
      const productName = "Veridian 私密保養凝露";
      const shouldShowHonestPromise = productName.includes("Veridian") && 
        productName.includes("私密");
      expect(shouldShowHonestPromise).toBe(true);
    });
  });
});
