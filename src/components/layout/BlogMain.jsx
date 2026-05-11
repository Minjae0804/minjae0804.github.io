import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import ProgressBar from "../common/ProgressBar";

export default function BlogMain() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ProgressBar />
      <Header />
      <Body />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
