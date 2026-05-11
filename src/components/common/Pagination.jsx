export default function Pagination({
  currentPage = 1,
  totalPages = 5,
  basePath = "/posts",
}) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page) => `${basePath}?page=${page}`;

  // 현재 페이지 기준 앞뒤 2페이지씩 + 처음/끝 표시
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      }
    }

    // 생략 부호(...) 삽입
    const result = [];
    let prev = null;
    for (const page of pages) {
      if (prev !== null && page - prev > 1) {
        result.push("...");
      }
      result.push(page);
      prev = page;
    }
    return result;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="페이지 네비게이션" className="flex items-center justify-center gap-1">
      {/* 이전 페이지 */}
      {currentPage > 1 ? (
        <a
          href={getPageUrl(currentPage - 1)}
          aria-label="이전 페이지"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
      ) : (
        <span className="w-9 h-9 flex items-center justify-center text-gray-300 dark:text-gray-700 cursor-not-allowed">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </span>
      )}

      {/* 페이지 번호 */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-sm text-gray-400 dark:text-gray-500">
            ···
          </span>
        ) : (
          <a
            key={page}
            href={getPageUrl(page)}
            aria-label={`${page}페이지`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-colors
              ${page === currentPage
                ? "bg-indigo-600 text-white font-medium"
                : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            {page}
          </a>
        )
      )}

      {/* 다음 페이지 */}
      {currentPage < totalPages ? (
        <a
          href={getPageUrl(currentPage + 1)}
          aria-label="다음 페이지"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      ) : (
        <span className="w-9 h-9 flex items-center justify-center text-gray-300 dark:text-gray-700 cursor-not-allowed">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      )}
    </nav>
  );
}
