import { useState } from "react";
import SearchBar from "./SearchBar";
import AboutMe from "./AboutMe";
import Category from "./Category";
import Series from "./Series";
import Archive from "./Archive";
import TagCloud from "./TagCloud";

const TABS = [
  { id: "category", label: "카테고리" },
  { id: "series", label: "시리즈" },
  { id: "tags", label: "태그" },
  // { id: "archive", label: "아카이브" },
];

function Accordion({ title, id, children, defaultOpen = false }) {
  const storageKey = `accordion-${id}`;
  const [isOpen, setIsOpen] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) return stored === "true";
    return defaultOpen;
  });

  const toggle = () => {
    setIsOpen((prev) => {
      localStorage.setItem(storageKey, String(!prev));
      return !prev;
    });
  };

  return (
    <div>
      <button onClick={toggle}
        className="flex items-center justify-between w-full py-1 text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
      >
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
          className={`w-3 h-3 transition-transform duration-150 ${isOpen ? "rotate-90" : ""}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Side() {
  const [activeTab, setActiveTab] = useState("category");

  return (
    <div className="flex flex-col gap-4 lg:pt-2">
      <Accordion title="검색" id="search" defaultOpen={true}>
        <SearchBar />
      </Accordion>

      <hr className="border-none border-t border-gray-100 dark:border-gray-800" />

      <Accordion title="소개" id="about" defaultOpen={true}>
        <AboutMe />
      </Accordion>

      <hr className="border-none border-t border-gray-100 dark:border-gray-800" />

      {/* 탭 */}
      <div className="flex flex-col gap-4">
        <div className="flex border-b border-stone-100 dark:border-stone-800 overflow-x-hidden no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-s font-medium whitespace-nowrap transition-colors border-b-2 -mb-px
                ${activeTab === tab.id
                  ? "border-brown-400 text-brown-600 dark:text-brown-300 font-semibold "
                  : "border-transparent text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {activeTab === "category" && <Category />}
          {activeTab === "series" && <Series />}
          {activeTab === "archive" && <Archive />}
          {activeTab === "tags" && <TagCloud />}
        </div>
      </div>
    </div>
  );
}
