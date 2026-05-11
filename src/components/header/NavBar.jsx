import { useState } from "react";

const NAV_LINKS = [
  { label: "홈", href: "/" },
  { label: "포스트", href: "/posts" },
  { label: "카테고리", href: "/categories" },
  { label: "태그", href: "/tags" },
  { label: "소개", href: "/about" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <>
      {/* 데스크탑 네비게이션 */}
      <nav className="hidden md:flex items-center gap-1" aria-label="메인 네비게이션">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = currentPath === href;
          return (
            <a
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors
                ${isActive
                  ? "text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* 모바일 햄버거 버튼 */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isOpen}
        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-20 md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="모바일 네비게이션">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = currentPath === href;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm transition-colors
                    ${isActive
                      ? "text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-gray-800"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
