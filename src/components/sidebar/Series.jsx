import { Link } from "react-router-dom";
import { getSeries } from "../../lib/posts";

export default function Series() {
  const series = getSeries();

  if (series.length === 0) return null;

  return (
    <ul className="flex flex-col gap-2">
      {series.map(({ path, name, config, count }) => (
        <li key={path}>
          <Link
            to={`/categories/${path}`}
            className="flex items-center justify-between group"
          >
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm font-semibold text-stone-700 dark:text-stone-300 group-hover:text-brown-600 dark:group-hover:text-brown-300 transition-colors truncate">
                {name}
              </span>
              {config.description && (
                <span className="text-xs text-stone-400 dark:text-stone-500 truncate">
                  {config.description.split("\n")[0]}
                </span>
              )}
            </div>
            <span className="text-xs text-stone-400 dark:text-stone-500 tabular-nums shrink-0 ml-2">
              {count}편
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
