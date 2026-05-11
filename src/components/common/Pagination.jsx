import ui from "../../config/ui.json";

export default function Pagination({ currentPage = 1, totalPages = 5, basePath = "/" }) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page) => `${basePath}?page=${page}`;

  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) pages.push(i);
    }
    const result = [];
    let prev = null;
    for (const page of pages) {
      if (prev !== null && page - prev > 1) result.push("...");
      result.push(page);
      prev = page;
    }
    return result;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label={ui.pagination.prev} className="flex items-center justify-center gap-1">
      {currentPage > 1 ? (
        <a href={getPageUrl(currentPage - 1)} aria-label={ui.pagination.prev}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
      ) : (
        <span className="w-9 h-9 flex items-center justify-center text-stone-300 dark:text-stone-700 cursor-not-allowed">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </span>
      )}

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-sm text-stone-400 dark:text-stone-500">···</span>
        ) : (
          <a key={page} href={getPageUrl(page)}
            aria-label={`${page}페이지`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-colors
              ${page === currentPage
                ? "bg-brown-500 text-white font-medium"
                : "text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              }`}>
            {page}
          </a>
        )
      )}

      {currentPage < totalPages ? (
        <a href={getPageUrl(currentPage + 1)} aria-label={ui.pagination.next}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      ) : (
        <span className="w-9 h-9 flex items-center justify-center text-stone-300 dark:text-stone-700 cursor-not-allowed">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      )}
    </nav>
  );
}
