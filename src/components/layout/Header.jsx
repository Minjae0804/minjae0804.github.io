import BlogTitle from "../header/BlogTitle";
import NavBar from "../header/NavBar";
import BlogCover from "../header/BlogCover";
import BlogDescription from "../header/BlogDescription";
import DarkModeToggle from "../common/DarkModeToggle";

export default function Header() {
  return (
    <header>
      {/* 상단 네비게이션 바 */}
      <div className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <BlogTitle />
          <NavBar />
          <DarkModeToggle />
        </div>
      </div>

      {/* 커버 이미지 + 블로그 설명 */}
      <div className="relative">
        <BlogCover />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <BlogDescription />
          </div>
        </div>
      </div>
    </header>
  );
}
