import { useState } from "react";
import TOC from "./TOC";
import RelatedPosts from "./RelatedPosts";

export default function PostSidebar({ headings, activeIds, currentSlug, category }) {
  const [activeTab, setActiveTab] = useState("toc");

  const hasTOC = headings.length > 0;
  const hasCategory = !!category;

  if (!hasTOC && !hasCategory) return null;

  // 탭이 하나만 있으면 탭 없이 바로 표시
  if (!hasTOC) return <RelatedPosts currentSlug={currentSlug} category={category} />;
  if (!hasCategory) return <TOC headings={headings} activeId={activeIds} />;

  return (
    <div className="flex flex-col gap-4">
      {/* 탭 */}
      <div className="flex gap-1 border-b border-stone-100 dark:border-stone-800">
        <button
          onClick={() => setActiveTab("toc")}
          className={`px-3 py-1.5 text-s font-medium transition-colors border-b-2 -mb-px
            ${activeTab === "toc"
              ? "border-brown-400 text-brown-600 dark:text-brown-300 font-semibold"
              : "border-transparent text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300"
            }`}
        >
          목차
        </button>
        <button
          onClick={() => setActiveTab("category")}
          className={`px-3 py-1.5 text-s font-medium transition-colors border-b-2 -mb-px
            ${activeTab === "category"
              ? "border-brown-400 text-brown-600 dark:text-brown-300 font-semibold"
              : "border-transparent text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300"
            }`}
        >
          카테고리
        </button>
      </div>

      {/* 탭 내용 */}
      <div className="overflow-y-auto max-h-[calc(100vh-12rem)]">
        {activeTab === "toc" && <TOC headings={headings} activeId={activeIds} />}
        {activeTab === "category" && <RelatedPosts currentSlug={currentSlug} category={category} />}
      </div>
    </div>
  );
}
