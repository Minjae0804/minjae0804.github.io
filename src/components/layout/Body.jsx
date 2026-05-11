import Side from "../sidebar/Side";
import PostList from "../post/PostList";
import Pagination from "../common/Pagination";

export default function Body() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col-reverse lg:flex-row gap-8">

        {/* 센터: 포스트 목록 */}
        <section className="flex-1 min-w-0 flex flex-col gap-6">
          <PostList />
          <Pagination />
        </section>

        {/* 사이드바: lg 이상에서만 표시 */}
        <aside className="w-full lg:w-72 lg:shrink-0">
          {/* 모바일에서는 인라인, 데스크탑에서는 sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-6">
            <Side />
          </div>
        </aside>

      </div>
    </main>
  );
}
