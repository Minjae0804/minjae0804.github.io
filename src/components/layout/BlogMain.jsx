import useSEO from "../../lib/useSEO";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import ProgressBar from "../common/ProgressBar";

export default function BlogMain() {
  useSEO({});
  return (
    <div className="min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      <ProgressBar />
      <Header />
      <Body />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
