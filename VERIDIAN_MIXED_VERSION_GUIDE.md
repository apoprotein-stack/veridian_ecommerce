# Veridian 混合版本 - 完整使用指南

## 📦 什麼是混合版本？

混合版本包含兩種部署方式，您可以根據需要選擇：

### 1. **靜態 HTML 版本**（推薦用於 WordPress）
- 獨立的 HTML 文件（`static-index.html`、`static-brand-story.html` 等）
- 獨立的 CSS 和 JavaScript 文件
- 無需任何伺服器端技術
- 可直接在 WordPress 中使用或作為靜態網站

### 2. **React 應用版本**（完整功能版）
- 完整的 React 應用（`index.html`）
- 所有 Veridian 品牌功能和互動
- 需要 Node.js 伺服器運行
- 用於開發和測試

---

## 📂 文件結構

```
veridian-mixed-version/
├── static-index.html              # 靜態首頁
├── static-brand-story.html        # 靜態品牌故事頁面
├── static-products.html           # 靜態產品頁面（待創建）
├── index.html                     # React 應用入口
└── assets/
    ├── static-style.css           # 靜態網站樣式表
    ├── static-script.js           # 靜態網站 JavaScript
    ├── index-CRMEV_Gj.css        # React 應用樣式
    └── index-DyogEfhV.js         # React 應用 JavaScript
```

---

## 🚀 快速開始

### 方案 A：在 WordPress 中使用靜態 HTML

#### 第一步：上傳文件到 WordPress

1. 進入 WordPress 後台
2. 外觀 → 主題文件編輯器
3. 創建新文件夾 `veridian-static`
4. 上傳以下文件：
   - `static-index.html`
   - `static-brand-story.html`
   - `assets/static-style.css`
   - `assets/static-script.js`

#### 第二步：創建 WordPress 頁面

1. 頁面 → 新增頁面
2. 標題：「首頁」
3. 內容中添加自定義 HTML：

```html
<iframe src="/wp-content/themes/your-theme/veridian-static/static-index.html" 
        style="width: 100%; height: 100vh; border: none;"></iframe>
```

或使用頁面構建器（如 Elementor）：
- 添加 HTML 塊
- 粘貼上述代碼

#### 第三步：設置菜單

1. 外觀 → 菜單
2. 創建新菜單 「Veridian」
3. 添加菜單項：
   - 首頁 → `/static-index.html`
   - 品牌故事 → `/static-brand-story.html`
   - 產品 → `/static-products.html`

### 方案 B：作為獨立靜態網站

#### 第一步：上傳到網頁伺服器

使用 FTP 或文件管理器上傳整個 `veridian-mixed-version` 文件夾到伺服器根目錄。

#### 第二步：訪問網站

在瀏覽器中訪問：
```
https://your-domain.com/veridian-mixed-version/static-index.html
```

#### 第三步：配置 DNS（可選）

如果要使用自定義域名，配置 DNS 指向您的伺服器。

### 方案 C：使用 React 應用版本

#### 第一步：安裝依賴

```bash
cd veridian-mixed-version
npm install
```

#### 第二步：開發模式

```bash
npm run dev
```

訪問 `http://localhost:5173`

#### 第三步：生產部署

```bash
npm run build
```

上傳 `dist` 文件夾到伺服器。

---

## 🎨 自定義靜態版本

### 修改顏色

編輯 `assets/static-style.css` 中的 CSS 變量：

```css
:root {
    --color-primary: #1a5f4a;      /* 改為您的品牌綠 */
    --color-secondary: #c9a876;    /* 改為您的品牌金 */
    --color-light: #f5f5f5;
    --color-dark: #2c2c2c;
}
```

### 修改文本

直接編輯 HTML 文件中的文本內容：

```html
<h2>用透明的科學，從細胞粒線體重啟健康</h2>
```

### 添加圖片

在 HTML 中添加圖片標籤：

```html
<img src="./assets/your-image.png" alt="描述">
```

### 修改字體

在 HTML 的 `<head>` 中修改 Google Fonts：

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600&display=swap" rel="stylesheet">
```

---

## 📱 響應式設計

靜態版本已針對以下設備進行優化：

- ✅ 桌面電腦（1200px+）
- ✅ 平板電腦（768px - 1199px）
- ✅ 手機（480px - 767px）
- ✅ 小屏幕手機（< 480px）

在 `assets/static-style.css` 中修改媒體查詢以自定義響應式行為。

---

## 🔧 技術詳情

### 靜態版本技術棧

- **HTML5** - 語義化標記
- **CSS3** - 現代樣式和動畫
- **Vanilla JavaScript** - 無依賴的交互

### React 版本技術棧

- **React 19** - UI 框架
- **Tailwind CSS 4** - 樣式系統
- **tRPC** - 類型安全的 API
- **Express** - 後端伺服器

---

## 🐛 常見問題

### Q: 靜態版本和 React 版本有什麼區別？

**A:** 
- **靜態版本**：簡單、快速、無需伺服器。適合內容展示型網站。
- **React 版本**：功能完整、互動豐富、支持動態內容。適合電商和複雜應用。

### Q: 我可以在 WordPress 中混合使用兩個版本嗎？

**A:** 可以。使用靜態版本展示內容，使用 React 版本處理複雜功能（如購物車）。

### Q: 如何添加購物車功能？

**A:** 
- 使用 WooCommerce 插件（推薦）
- 或參考 `ECOMMERCE_EXTENSION.md` 自定義開發

### Q: 靜態版本支持 SEO 嗎？

**A:** 是的。靜態 HTML 對 SEO 友善。確保：
- 使用語義化 HTML 標籤
- 添加 meta 描述
- 使用清晰的標題結構
- 優化圖片 alt 文本

### Q: 我可以添加更多頁面嗎？

**A:** 可以。複製 `static-index.html`，修改內容，然後在導航中添加鏈接。

---

## 📊 性能優化

### 靜態版本

- 文件大小：~346 KB（已壓縮）
- 頁面加載時間：< 1 秒
- 無需伺服器端處理

### React 版本

- 首次加載：~2-3 秒
- 後續頁面：< 500ms
- 支持離線訪問（PWA）

---

## 🔐 安全建議

### 靜態版本

- 無動態內容，安全性高
- 建議使用 HTTPS
- 定期備份文件

### React 版本

- 使用環境變量存儲敏感信息
- 實施 CORS 策略
- 定期更新依賴包

---

## 📞 支持

### 文檔

- 本指南：`VERIDIAN_MIXED_VERSION_GUIDE.md`
- WordPress 主題文檔：`WORDPRESS_QUICK_START.md`
- 電商擴展指南：`ECOMMERCE_EXTENSION.md`

### 常用命令

```bash
# React 開發
npm run dev          # 開發模式
npm run build        # 構建生產版本
npm run preview      # 預覽構建結果
npm test             # 運行測試

# 靜態版本
# 無需命令，直接在瀏覽器中打開 HTML 文件
```

---

## 🎯 後續步驟

1. ✅ 選擇部署方式（靜態或 React）
2. ✅ 上傳文件到伺服器/WordPress
3. ✅ 自定義顏色、文本和圖片
4. ✅ 測試所有頁面和功能
5. ✅ 配置 SEO（meta 標籤、sitemap）
6. ✅ 設置分析工具（Google Analytics）
7. ✅ 添加聯絡表單或客服功能
8. ✅ 集成支付系統（未來）

---

## 📈 版本歷史

- **v1.0** (2026-04-17)
  - 首次發布
  - 包含靜態 HTML 版本和 React 版本
  - 完整的品牌故事和首頁

---

**祝您使用愉快！Veridian 混合版本已準備就緒。**
