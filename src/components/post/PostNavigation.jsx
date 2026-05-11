import { Link } from "react-router-dom";
import { allPosts } from "../../lib/posts";

function NavBlock({ prev, next, label }) {
  if (!prev && !next) return null;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {prev ? (
            <Link to={`/posts/${prev.slug}`} className="flex flex-col gap-0.5 group">
              <span className="text-xs text-stone-400 dark:text-stone-500">← 이전</span>
              <span className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors line-clamp-2 leading-snug">
                {prev.title}
              </span>
            </Link>
          ) : <div />}
        </div>
        <div className="text-right">
          {next ? (
            <Link to={`/posts/${next.slug}`} className="flex flex-col gap-0.5 items-end group">
              <span className="text-xs text-stone-400 dark:text-stone-500">다음 →</span>
              <span className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors line-clamp-2 leading-snug">
                {next.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}

export default function PostNavigation({ slug, category }) {
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const allPrev = allPosts[idx + 1] ?? null;
  const allNext = allPosts[idx - 1] ?? null;

  const categoryPosts = allPosts.filter((p) => p.category === category);
  const catIdx = categoryPosts.findIndex((p) => p.slug === slug);
  const catPrev = categoryPosts[catIdx + 1] ?? null;
  const catNext = categoryPosts[catIdx - 1] ?? null;

  const hasCategoryNav = (catPrev || catNext) &&
    (catPrev?.slug !== allPrev?.slug || catNext?.slug !== allNext?.slug);

  return (
    <div className="mt-12 pt-6 border-t border-stone-100 dark:border-stone-800 flex flex-col gap-6">
      {hasCategoryNav && (
        <NavBlock prev={catPrev} next={catNext} label={`${category} 카테고리`} />
      )}
      <NavBlock prev={allPrev} next={allNext} label="전체 포스트" />
    </div>
  );
}
