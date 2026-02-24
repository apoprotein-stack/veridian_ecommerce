import { describe, it, expect } from "vitest";
import BrandStory from "./BrandStory";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BrandStory Component", () => {
  // ═══ Hero Section Tests ═══
  it("should display hero title with main message", () => {
    render(<BrandStory />);
    expect(screen.getByText(/與其補充燃料/)).toBeInTheDocument();
    expect(screen.getByText(/不如修復發電機/)).toBeInTheDocument();
  });

  it("should display hero subtitle about cellular health", () => {
    render(<BrandStory />);
    expect(screen.getByText(/我們從細胞最深處出發/)).toBeInTheDocument();
  });

  it("should display brand story eyebrow text", () => {
    render(<BrandStory />);
    expect(screen.getByText(/Veridian — Brand Story/)).toBeInTheDocument();
  });

  // ═══ Origin Section Tests ═══
  it("should display origin section label", () => {
    render(<BrandStory />);
    expect(screen.getByText("Origin")).toBeInTheDocument();
  });

  it("should display origin section heading", () => {
    render(<BrandStory />);
    expect(screen.getByText(/一個很多人都有，卻說不清楚的感覺/)).toBeInTheDocument();
  });

  it("should explain the market problem", () => {
    render(<BrandStory />);
    expect(screen.getByText(/幾十年來，這個市場的邏輯是「補充缺乏的東西」/)).toBeInTheDocument();
  });

  // ═══ Insight Section Tests ═══
  it("should display insight section label", () => {
    render(<BrandStory />);
    expect(screen.getByText("Insight")).toBeInTheDocument();
  });

  it("should explain mitochondria concept", () => {
    render(<BrandStory />);
    expect(screen.getByText(/你的細胞裡有一座發電廠，它比你想的更需要照顧/)).toBeInTheDocument();
  });

  it("should display core insight pullquote", () => {
    render(<BrandStory />);
    expect(screen.getByText(/與其盲目補充燃料，不如先修復發電機本身/)).toBeInTheDocument();
  });

  it("should explain gut-brain-skin connection", () => {
    render(<BrandStory />);
    expect(screen.getByText(/腸道是這一切的上游/)).toBeInTheDocument();
  });

  // ═══ Science Section Tests ═══
  it("should display science section label", () => {
    render(<BrandStory />);
    expect(screen.getByText("Science")).toBeInTheDocument();
  });

  it("should mention ProFit postbiotic technology", () => {
    render(<BrandStory />);
    expect(screen.getByText(/Veridian 所有產品的技術核心/)).toBeInTheDocument();
  });

  it("should explain probiotics vs postbiotics", () => {
    render(<BrandStory />);
    expect(screen.getByText(/益生菌 vs 後生元：一個簡單的比喻/)).toBeInTheDocument();
  });

  it("should detail ProFit technology specifications", () => {
    render(<BrandStory />);
    expect(screen.getByText(/13 株專利菌株、72 小時精準發酵/)).toBeInTheDocument();
  });

  it("should explain gut-brain axis", () => {
    render(<BrandStory />);
    expect(screen.getByText(/腸腦軸線 — 睡眠、壓力、情緒/)).toBeInTheDocument();
  });

  it("should explain gut-skin axis", () => {
    render(<BrandStory />);
    expect(screen.getByText(/腸皮軸線 — 皮膚屏障、膚況、抗老/)).toBeInTheDocument();
  });

  it("should explain serotonin production in gut", () => {
    render(<BrandStory />);
    expect(screen.getByText(/身體裡超過 90% 的血清素由腸道製造/)).toBeInTheDocument();
  });

  // ═══ Philosophy Section Tests ═══
  it("should display philosophy section label", () => {
    render(<BrandStory />);
    expect(screen.getByText("Philosophy")).toBeInTheDocument();
  });

  it("should explain brand name etymology", () => {
    render(<BrandStory />);
    expect(screen.getByText(/Veridian 這個名字來自拉丁文的兩個詞根/)).toBeInTheDocument();
  });

  it("should display warmth pillar", () => {
    render(<BrandStory />);
    expect(screen.getByText(/01 — Warmth/)).toBeInTheDocument();
    expect(screen.getByText(/科學可以是體貼的/)).toBeInTheDocument();
  });

  it("should display autonomy pillar", () => {
    render(<BrandStory />);
    expect(screen.getByText(/02 — Autonomy/)).toBeInTheDocument();
    expect(screen.getByText(/試用先行不是策略噱頭/)).toBeInTheDocument();
  });

  it("should display transparency pillar", () => {
    render(<BrandStory />);
    expect(screen.getByText(/03 — Transparency/)).toBeInTheDocument();
    expect(screen.getByText(/我們不仰賴代言人的光環/)).toBeInTheDocument();
  });

  it("should explain trial-first approach", () => {
    render(<BrandStory />);
    expect(screen.getByText(/試用先行不是策略噱頭/)).toBeInTheDocument();
  });

  // ═══ Promise Section Tests ═══
  it("should display promise section label", () => {
    render(<BrandStory />);
    expect(screen.getByText("Promise")).toBeInTheDocument();
  });

  it("should display promise section heading", () => {
    render(<BrandStory />);
    expect(screen.getByText(/我們希望你先體驗，再決定/)).toBeInTheDocument();
  });

  it("should explain experience timeline D7-D14", () => {
    render(<BrandStory />);
    expect(screen.getByText(/D7-D14/)).toBeInTheDocument();
  });

  it("should explain experience timeline D30", () => {
    render(<BrandStory />);
    expect(screen.getByText(/D30/)).toBeInTheDocument();
  });

  it("should explain experience timeline D35-D56", () => {
    render(<BrandStory />);
    expect(screen.getByText(/D35-D56/)).toBeInTheDocument();
  });

  it("should display promise pullquote about trust", () => {
    render(<BrandStory />);
    expect(screen.getByText(/我們希望你對 Veridian 的信任，是因為你感受到了/)).toBeInTheDocument();
  });

  // ═══ Closing Section Tests ═══
  it("should display closing section heading", () => {
    render(<BrandStory />);
    expect(screen.getByText(/細胞的能量，是一切的起點/)).toBeInTheDocument();
  });

  it("should display closing brand statement", () => {
    render(<BrandStory />);
    expect(screen.getByText(/Veridian — Verde × Veritas/)).toBeInTheDocument();
  });

  it("should explain pathway from gut to daily experience", () => {
    render(<BrandStory />);
    expect(screen.getByText(/從腸道開始，經過粒線體，流向睡眠、皮膚、精力/)).toBeInTheDocument();
  });

  // ═══ Brand Values Tests ═══
  it("should emphasize quiet, sustainable change", () => {
    render(<BrandStory />);
    expect(screen.getByText(/不需要奇蹟。就是那種安靜的、可以持續的、真實的不一樣/)).toBeInTheDocument();
  });

  it("should reject miracle claims", () => {
    render(<BrandStory />);
    expect(screen.getByText(/我們知道這個市場裡有太多「革命性突破」/)).toBeInTheDocument();
  });

  it("should explain gut barrier and collagen synthesis", () => {
    render(<BrandStory />);
    expect(screen.getByText(/當腸道屏障完整，發炎訊號減少，皮膚幹細胞的更新能力提升/)).toBeInTheDocument();
  });

  // ═══ Accessibility Tests ═══
  it("should render without crashing", () => {
    const { container } = render(<BrandStory />);
    expect(container).toBeInTheDocument();
  });

  it("should have proper semantic structure", () => {
    const { container } = render(<BrandStory />);
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("should display all major section labels", () => {
    render(<BrandStory />);
    const labels = ["Origin", "Insight", "Science", "Philosophy", "Promise"];
    labels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
