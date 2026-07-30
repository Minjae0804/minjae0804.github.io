import { useState } from "react";
import { Link } from "react-router-dom";
import { getArchive } from "../../lib/posts";

export default function Archive() {
  const archive = getArchive();
  const [openYears, setOpenYears] = useState(() => new Set([archive[0]?.year]));

  const toggleYear = (year) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  };

  return (
    <ul className="flex flex-col gap-1">
      {archive.map(({ year, months }) => (
        <li key={year}>
          <button
            onClick={() => toggleYear(year)}
            className="flex items-center justify-between w-full px-2 py-1.5 rounded-md text-sm font-semibold text-stone-600 dark:text-stone-400 hover:bg-brown-50 dark:hover:bg-stone-800 hover:text-brown-600 dark:hover:text-brown-300 transition-colors"
          >
            <span>{year}년</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              className={`w-3 h-3 transition-transform duration-150 ${openYears.has(year) ? "rotate-90" : ""}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          {openYears.has(year) && (
            <ul className="ml-3 pl-2 border-l border-stone-100 dark:border-stone-800 flex flex-col gap-0.5 pb-1">
              {months.map(({ month, count }) => (
                <li key={month}>
                  <Link
                    to={`/posts?year=${year}&month=${month}`}
                    className="flex items-center justify-between px-2 py-1 text-xs text-stone-500 dark:text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors"
                  >
                    <span>{month}월</span>
                    <span className="tabular-nums text-stone-400 dark:text-stone-500">{count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
