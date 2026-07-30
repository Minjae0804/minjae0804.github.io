import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchPosts } from "../../lib/search";
import ui from "../../config/ui.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const results = query.trim().length >= 1 ? searchPosts(query) : [];

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef}>
      <div className="relative">
        <input
          id="search"
          name="search"
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={ui.sidebar.searchPlaceholder}
          aria-label={ui.sidebar.searchPlaceholder}
          className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-brown-300/40 focus:border-brown-400 transition-colors"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="absolute left-2.5 top-2.5 w-4 h-4 text-stone-400" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
        </svg>

        {/* 드롭다운 */}
        {isOpen && query.trim() && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg shadow-md z-50 overflow-hidden">
            {results.length === 0 ? (
              <div className="px-4 py-3 text-xs text-stone-400 dark:text-stone-500">
                {ui.search.empty}
              </div>
            ) : (
              <ul>
                {results.slice(0, 6).map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/posts/${post.slug}`}
                      onClick={handleSelect}
                      className="flex flex-col gap-0.5 px-4 py-2.5 hover:bg-brown-50 dark:hover:bg-stone-800 transition-colors"
                    >
                      <span className="text-sm text-stone-800 dark:text-stone-200 line-clamp-1 leading-snug">
                        {post.title}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {post.category && (
                          <span className="text-xs text-brown-500 dark:text-brown-300">
                            {post.category}
                          </span>
                        )}
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-stone-400 dark:text-stone-500">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
