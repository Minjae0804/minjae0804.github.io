import { Link } from "react-router-dom";
import { getMaxDepthByRoot } from "../../lib/posts";

const maxDepthByRoot = getMaxDepthByRoot();

const BG_COLORS = [
  "bg-brown-400 text-white hover:bg-brown-500",
  "bg-brown-200 text-brown-800 hover:bg-brown-300",
  "bg-brown-100 text-brown-600 hover:bg-brown-200",
  "bg-brown-50 text-brown-400 hover:bg-brown-100",
];

export default function PostCategory({ category = "" }) {
  if (!category) return null;

  const parts = category.split("/");
  const root = parts[0];
  const rootMaxDepth = maxDepthByRoot[root] ?? parts.length;

  return (
    <div className="inline-flex items-center rounded overflow-hidden">
      {parts.map((part, idx) => {
        const path = parts.slice(0, idx + 1).join("/");
        const colorIdx = Math.min(Math.max(0, (BG_COLORS.length - 1) - (rootMaxDepth - 1 - idx)), BG_COLORS.length - 1);
        const colorClass = BG_COLORS[colorIdx];
        return (
          <Link
            key={path}
            to={`/categories/${path}`}
            className={`text-xs font-medium px-2 py-0.5 transition-colors pc-${colorIdx}`}
          >
            {part}
          </Link>
        );
      })}
    </div>
  );
}
