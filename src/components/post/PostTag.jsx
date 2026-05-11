import { Link } from "react-router-dom";

export default function PostTag({ tags = [] }) {
  if (tags.length === 0) return null;
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {tags.map((tag) => (
        <Link
          key={tag}
          to={`/tags/${tag}`}
          className="text-xs px-2 py-0.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-brown-300 dark:hover:border-brown-600 hover:text-brown-600 dark:hover:text-brown-300 transition-colors"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
