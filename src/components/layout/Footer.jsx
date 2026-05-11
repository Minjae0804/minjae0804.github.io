import CopyRight from "../footer/CopyRight";
import PoweredBy from "../footer/PoweredBy";
import SocialLinks from "../footer/SocialLinks";
import RSSLink from "../footer/RSSLink";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <CopyRight />
        <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
          <SocialLinks />
          <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
          <RSSLink />
          <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
          <PoweredBy />
        </div>
      </div>
    </footer>
  );
}
