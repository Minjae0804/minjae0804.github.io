import { Link } from "react-router-dom";
import { getCategories } from "../lib/posts";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";
import ui from "../config/ui.json";

export default function CategoriesPage() {
  const categories = getCategories();

  useSEO({ title: "카테고리" });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-white">카테고리</h1>
          <span className="text-sm text-stone-400 dark:text-stone-500">{categories.length}개</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map(({ name, count }) => (
            <Link
              key={name}
              to={`/categories/${name}`}
              className="flex items-center justify-between p-4 rounded-xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-brown-300 dark:hover:border-brown-600 hover:shadow-sm transition-all duration-200 group"
            >
              <span className="font-medium text-stone-800 dark:text-stone-200 group-hover:text-brown-600 dark:group-hover:text-brown-300 transition-colors">
                {name}
              </span>
              <span className="text-sm text-stone-400 dark:text-stone-500 tabular-nums">
                {count}{ui.category.postCount}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
