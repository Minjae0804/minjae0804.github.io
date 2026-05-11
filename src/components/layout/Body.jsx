import { getPostsByPage } from "../../lib/posts";
import blog from "../../config/blog.json";
import Side from "../sidebar/Side";
import PostList from "../post/PostList";
import Pagination from "../common/Pagination";

export default function Body() {
  const page = Number(new URLSearchParams(window.location.search).get("page")) || 1;
  const perPage = blog.sidebar.postsPerPage;
  const { totalPages } = getPostsByPage(page, perPage);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <section className="flex-1 min-w-0 flex flex-col gap-6">
          <PostList page={page} perPage={perPage} />
          <Pagination currentPage={page} totalPages={totalPages} basePath="/" />
        </section>
        <aside className="w-full lg:w-72 lg:shrink-0">
          <div className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-6">
            <Side />
          </div>
        </aside>
      </div>
    </main>
  );
}
