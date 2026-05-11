import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import blog from "../../config/blog.json";
import ui from "../../config/ui.json";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav className="hidden md:flex items-center gap-1" aria-label="메인 네비게이션">
        {blog.nav.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} to={href} aria-current={isActive ? "page" : undefined}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors
                ${isActive
                  ? "text-brown-600 dark:text-brown-300 font-medium bg-brown-50 dark:bg-brown-800"
                  : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800"
                }`}>
              {label}
            </Link>
          );
        })}
      </nav>

      <button onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? ui.nav.closeMenu : ui.nav.openMenu}
        aria-expanded={isOpen}
        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
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

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-20 md:hidden bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="모바일 네비게이션">
            {blog.nav.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} to={href} aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm transition-colors
                    ${isActive
                      ? "text-brown-600 dark:text-brown-300 font-medium bg-brown-50 dark:bg-brown-800"
                      : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800"
                    }`}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
