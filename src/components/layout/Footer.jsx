import CopyRight from "../footer/CopyRight";
import PoweredBy from "../footer/PoweredBy";
import SocialLinks from "../footer/SocialLinks";
import RSSLink from "../footer/RSSLink";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-100 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <CopyRight />
        <div className="flex items-center gap-4 text-stone-400 dark:text-stone-500">
          <SocialLinks />
          <span className="w-px h-4 bg-stone-200 dark:bg-stone-700" aria-hidden="true" />
          <RSSLink />
          <span className="w-px h-4 bg-stone-200 dark:bg-stone-700" aria-hidden="true" />
          <PoweredBy />
        </div>
      </div>
    </footer>
  );
}
