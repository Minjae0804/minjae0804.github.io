import { Link } from "react-router-dom";
import { getMaxDepthByRoot } from "../../lib/posts";

const maxDepthByRoot = getMaxDepthByRoot();
const COLORS_LENGTH = 4;

export default function PostCategory({ category = "", fontSize = "0.75rem", rootCategory = null }) {
  if (!category) return null;

  const parts = category.split("/");
  const root = rootCategory ? rootCategory.split("/")[0] : parts[0];
  const rootMaxDepth = maxDepthByRoot[root] ?? parts.length;
  const rootParts = rootCategory ? rootCategory.split("/") : null;
  const startDepth = rootParts ? rootParts.indexOf(parts[0]) : 0;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", borderRadius: "4px", overflow: "hidden" }}>
      {parts.map((part, idx) => {
        const path = rootParts
          ? rootParts.slice(0, startDepth + idx + 1).join("/")
          : parts.slice(0, idx + 1).join("/");
        const colorIdx = Math.min(
          Math.max(0, (COLORS_LENGTH - 1) - (rootMaxDepth - 1 - (idx + startDepth))),
          COLORS_LENGTH - 1
        );
        return (
          <Link
            key={path}
            to={`/categories/${path}`}
            className={`pc-${colorIdx} font-medium transition-colors`}
            style={{ fontSize, padding: "2px 8px" }}
          >
            {part}
          </Link>
        );
      })}
    </div>
  );
}
