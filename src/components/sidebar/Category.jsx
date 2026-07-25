import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories, getCategoryInfo } from "../../lib/posts";
import ui from "../../config/ui.json";
import blog from "../../config/blog.json";

function CategoryItem({ name, path, depth = 0, parentConfig = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const maxPosts = blog.sidebar.categoryPostCount ?? 3;
  const moreCount = blog.sidebar.categoryMoreCount ?? 3;
  const [visibleCount, setVisibleCount] = useState(maxPosts);
  const { directPosts, childCategories, config } = getCategoryInfo(path, parentConfig);
  const hasChildren = childCategories.length > 0;
  const visiblePosts = directPosts.slice(0, visibleCount);
  const navigate = useNavigate();

  return (
    <li style={{ minWidth: 0, width: "100%" }}>
      <div
        style={{ display: "flex", alignItems: "center", overflow: "hidden" }}
        className="rounded-md hover:bg-brown-50 dark:hover:bg-stone-800 transition-colors group"
      >
        <a
          href={`/categories/${path}`}
          onClick={(e) => { e.preventDefault(); navigate(`/categories/${path}`); }}
          style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", padding: "6px 8px", fontSize: "0.875rem", fontWeight: 600 }}
          className="text-stone-600 dark:text-stone-400 group-hover:text-brown-600 dark:group-hover:text-brown-300 transition-colors"
        >
          {name}
        </a>
        <div className="flex-1 self-stretch" onClick={() => setIsOpen((prev) => !prev)} />
        {(hasChildren || directPosts.length > 0) && (
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-6 h-6 flex items-center justify-center text-stone-400 group-hover:text-brown-500 transition-colors shrink-0"
            aria-label={isOpen ? "접기" : "펼치기"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              className={`w-3 h-3 transition-transform duration-150 ${isOpen ? "rotate-90" : ""}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="ml-3 pl-2 border-l border-stone-100 dark:border-stone-800 flex flex-col gap-1 pb-1">
          <hr className="border-stone-200 dark:border-stone-700 mb-1" />

          {hasChildren && (
            <ul className="flex flex-col gap-0.5">
              {childCategories.map((child) => (
                <CategoryItem
                  key={child}
                  name={child}
                  path={`${path}/${child}`}
                  depth={depth + 1}
                  parentConfig={config}
                />
              ))}
            </ul>
          )}

          {directPosts.length > 0 && (
            <ul className="flex flex-col gap-0.5">
              {visiblePosts.map((post) => (
                <li key={post.slug} className="overflow-hidden">
                  <Link
                    to={`/posts/${post.slug}`}
                    className="block px-2 py-1 text-xs text-stone-500 dark:text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors truncate"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
              {visibleCount < directPosts.length && (
                <li>
                  <button
                    onClick={() => setVisibleCount((prev) => prev + moreCount)}
                    className="block w-full text-left px-2 py-1 text-xs text-stone-400 dark:text-stone-500 hover:text-brown-500 transition-colors"
                  >
                    +{Math.min(moreCount, directPosts.length - visibleCount)}개 더보기
                  </button>
                </li>
              )}
              {visibleCount >= directPosts.length && directPosts.length > maxPosts && (
                <li>
                  <button
                    onClick={() => setVisibleCount(maxPosts)}
                    className="block w-full text-left px-2 py-1 text-xs text-stone-400 dark:text-stone-500 hover:text-brown-500 transition-colors"
                  >
                    접기
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}

export default function Category() {
  const categories = getCategories();

  return (
    <div className="overflow-hidden">
      <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3">
        {ui.sidebar.category}
      </h2>
      <ul className="flex flex-col gap-1 overflow-hidden">
        {categories.map(({ name }) => (
          <CategoryItem key={name} name={name} path={name} depth={0} />
        ))}
      </ul>
    </div>
  );
}
