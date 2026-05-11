import BlogTitle from "../header/BlogTitle";
import NavBar from "../header/NavBar";
import BlogCover from "../header/BlogCover";
import DarkModeToggle from "../common/DarkModeToggle";

export default function Header() {
  return (
    <header>
      <div className="sticky top-0 z-10 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <BlogTitle />
          <NavBar />
          <DarkModeToggle />
        </div>
      </div>
      <BlogCover />
    </header>
  );
}
