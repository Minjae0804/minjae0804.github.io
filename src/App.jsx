import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogMain from "./components/layout/BlogMain";
import PostsPage from "./pages/PostsPage";
import PostDetail from "./pages/PostDetail";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import TagsPage from "./pages/TagsPage";
import TagPage from "./pages/TagPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTopOnNavigate from "./lib/ScrollToTopOnNavigate";
import PortfolioPage from "./pages/PortfolioPage";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<BlogMain />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:slug" element={<PostDetail />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/*" element={<CategoryPage />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/tags/:name" element={<TagPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
