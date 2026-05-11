import { Link } from "react-router-dom";
import { getTags } from "../../lib/posts";
import ui from "../../config/ui.json";

function getFontSize(count, min, max) {
  if (max === min) return "text-sm";
  const ratio = (count - min) / (max - min);
  if (ratio > 0.66) return "text-base font-medium";
  if (ratio > 0.33) return "text-sm";
  return "text-xs";
}

export default function TagCloud() {
  const tags = getTags();
  const counts = tags.map((t) => t.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3">
        {ui.sidebar.tag}
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ name, count }) => (
          <Link key={name} to={`/tags/${name}`}
            className={`${getFontSize(count, min, max)} px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-brown-300 dark:hover:border-brown-600 hover:text-brown-600 dark:hover:text-brown-300 transition-colors`}>
            #{name}
          </Link>
        ))}
      </div>
    </div>
  );
}
