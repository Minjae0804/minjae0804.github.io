import { Link } from "react-router-dom";
import { getTags } from "../lib/posts";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";

function getFontSize(count, min, max) {
  if (max === min) return "text-sm";
  const ratio = (count - min) / (max - min);
  if (ratio > 0.66) return "text-lg font-medium";
  if (ratio > 0.33) return "text-base";
  return "text-sm";
}

export default function TagsPage() {
  const tags = getTags();
  const counts = tags.map((t) => t.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);

  useSEO({ title: "태그" });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-white">태그</h1>
          <span className="text-sm text-stone-400 dark:text-stone-500">{tags.length}개</span>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map(({ name, count }) => (
            <Link
              key={name}
              to={`/tags/${name}`}
              className={`${getFontSize(count, min, max)} flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-brown-300 dark:hover:border-brown-600 hover:text-brown-600 dark:hover:text-brown-300 transition-colors`}
            >
              <span>#{name}</span>
              <span className="text-xs text-stone-400 dark:text-stone-500">({count})</span>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
