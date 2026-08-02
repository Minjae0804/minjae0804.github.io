import { useState, useEffect, useMemo } from "react";

export default function useTOC(html) {
  const headings = useMemo(() => {
    if (!html) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const els = doc.querySelectorAll("h2, h3");

    return Array.from(els).map((el) => ({
      id: el.id,
      text: el.textContent,
      level: Number(el.tagName[1]),
    }));
  }, [html]);

  const [activeIds, setActiveIds] = useState([]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100;

      let currentId = "";
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop - offset <= scrollY) {
          currentId = id;
        }
      }
      const ids = [currentId];
      const currentHeading = headings.find(h => h.id === currentId);
      if (currentHeading?.level === 3) {
        const idx = headings.findIndex(h => h.id === currentId);
        for (let i = idx - 1; i >= 0; i--) {
          if (headings[i].level === 2) {
            ids.push(headings[i].id);
            break;
          }
        }
      }
      setActiveIds(ids);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return { headings, activeIds };
}
