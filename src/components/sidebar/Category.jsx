import { Link } from "react-router-dom";
import { getCategories } from "../../lib/posts";
import ui from "../../config/ui.json";

export default function Category() {
  const categories = getCategories();
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3">
        {ui.sidebar.category}
      </h2>
      <ul className="flex flex-col gap-1">
        {categories.map(({ name, count }) => (
          <li key={name}>
            <Link to={`/categories/${name}`}
              className="flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:bg-brown-50 dark:hover:bg-stone-800 hover:text-brown-600 dark:hover:text-brown-300 transition-colors group">
              <span>{name}</span>
              <span className="text-xs text-stone-400 dark:text-stone-500 group-hover:text-stone-500 dark:group-hover:text-stone-400 tabular-nums">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
