import { useParams, Link } from "react-router-dom";
import { getCategoryInfo } from "../lib/posts";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";
import PostCard from "../components/post/PostCard";
import ui from "../config/ui.json";

export default function CategoryPage() {
  const { "*": categoryPath } = useParams();
  const { directPosts, childCategories, config } = getCategoryInfo(categoryPath);
  const parts = categoryPath.split("/");

  useSEO({ title: parts[parts.length - 1] });

  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        {/* 브레드크럼 */}
        <div className="flex items-center gap-2 flex-wrap">
          <Link to="/" className="text-sm text-stone-400 hover:text-brown-500 transition-colors">
            {ui.breadcrumb.home}
          </Link>
          <span className="text-stone-300 dark:text-stone-600 text-sm">/</span>
          <Link to="/categories" className="text-sm text-stone-400 hover:text-brown-500 transition-colors">
            {ui.breadcrumb.category}
          </Link>
          {parts.map((part, idx) => {
            const path = parts.slice(0, idx + 1).join("/");
            const isLast = idx === parts.length - 1;
            return (
              <span key={path} className="flex items-center gap-2">
                <span className="text-stone-300 dark:text-stone-600 text-sm">/</span>
                {isLast ? (
                  <span className="text-sm font-medium text-brown-500 dark:text-brown-300">{part}</span>
                ) : (
                  <Link to={`/categories/${path}`} className="text-sm text-stone-400 hover:text-brown-500 transition-colors">
                    {part}
                  </Link>
                )}
              </span>
            );
          })}
        </div>

        {/* 제목 + 설명 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-white">
            {parts[parts.length - 1]}
          </h1>
          {config.description && (
            <p className="text-sm text-stone-500 dark:text-stone-400 whitespace-pre-line leading-relaxed">
              {config.description}
            </p>
          )}
        </div>

        {/* 하위 카테고리 */}
        {childCategories.length > 0 && (
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">
              하위 카테고리
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {childCategories.map((child) => {
                const childPath = `${categoryPath}/${child}`;
                const { directPosts: cp } = getCategoryInfo(childPath, config);
                return (
                  <Link
                    key={child}
                    to={`/categories/${childPath}`}
                    className="flex items-center justify-between p-4 rounded-xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-brown-300 dark:hover:border-brown-600 hover:shadow-sm transition-all duration-200 group"
                  >
                    <span className="font-medium text-stone-800 dark:text-stone-200 group-hover:text-brown-600 dark:group-hover:text-brown-300 transition-colors">
                      {child}
                    </span>
                    <span className="text-sm text-stone-400 dark:text-stone-500 tabular-nums">
                      {cp.length}{ui.category.postCount}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* 직접 포스트 */}
        {directPosts.length > 0 && (
          <div className="flex flex-col gap-4">
            {childCategories.length > 0 && (
              <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">
                포스트
              </h2>
            )}
            {directPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {directPosts.length === 0 && childCategories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400 gap-2">
            <p className="text-sm">{ui.category.empty}</p>
            <Link to="/" className="text-sm text-brown-500 hover:underline underline-offset-2">
              {ui.notFound.backToHome}
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
