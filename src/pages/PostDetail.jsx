import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getPostBySlug } from "../lib/posts";
import useSEO from "../lib/useSEO";
import useTOC from "../lib/useTOC";
import PageLayout from "./PageLayout";
import PostCategory from "../components/post/PostCategory";
import PostTag from "../components/post/PostTag";
import PostUploadDateTime from "../components/post/PostUploadDateTime";
import PostNavigation from "../components/post/PostNavigation";
import PostSidebar from "../components/post/PostSidebar";
import ui from "../config/ui.json";

export default function PostDetail() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const { headings, activeId } = useTOC(post?.html ?? "");

  useSEO({
    title: post?.title,
    description: post?.excerpt,
  });

  // 코드블록 복사 버튼 주입
  useEffect(() => {
    if (!post) return;
    const cleanups = [];

    const inject = () => {
      const codeBlocks = document.querySelectorAll("article pre");
      codeBlocks.forEach((pre) => {
        if (pre.querySelector(".copy-btn")) return;

        const btn = document.createElement("button");
        btn.className = "copy-btn absolute top-2 right-2 text-xs px-2 py-1 rounded bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-brown-100 dark:hover:bg-brown-800 transition-colors";
        btn.textContent = "복사";
        pre.style.position = "relative";
        pre.appendChild(btn);

        const handleClick = () => {
          const code = pre.querySelector("code")?.innerText ?? pre.innerText;
          navigator.clipboard.writeText(code).then(() => {
            btn.textContent = "완료 ✓";
            setTimeout(() => { btn.textContent = "복사"; }, 1500);
          });
        };

        btn.addEventListener("click", handleClick);
        cleanups.push(() => btn.removeEventListener("click", handleClick));
      });
    };

    const timer = setTimeout(inject, 0);
    return () => {
      clearTimeout(timer);
      cleanups.forEach((fn) => fn());
    };
  }, [post]);

  if (!post) {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <p className="text-lg font-medium text-stone-900 dark:text-white">{ui.post.notFound}</p>
          <Link to="/" className="text-sm text-brown-500 hover:underline underline-offset-2">{ui.notFound.backToHome}</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="flex gap-10 justify-center">
        {/* 본문 */}
        <article className="flex-1 max-w-3xl min-w-0">
          <header className="mb-8 pb-8 border-b border-stone-100 dark:border-stone-800">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <PostCategory category={post.category} />
              <span className="text-stone-300 dark:text-stone-600 text-xs" aria-hidden="true">·</span>
              <PostUploadDateTime date={post.date} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-white leading-snug mb-4">
              {post.title}
            </h1>
            <PostTag tags={post.tags} />
          </header>

          <div
            className="prose prose-stone dark:prose-invert max-w-none
              prose-headings:font-semibold
              prose-a:text-brown-500 dark:prose-a:text-brown-300 prose-a:no-underline hover:prose-a:underline
              prose-code:text-brown-600 dark:prose-code:text-brown-300
              prose-pre:bg-stone-50 dark:prose-pre:bg-stone-900
              prose-blockquote:border-brown-300 dark:prose-blockquote:border-brown-600"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <PostNavigation slug={post.slug} category={post.category} />

          <div className="mt-6">
            <Link to="/" className="text-sm text-brown-500 dark:text-brown-300 hover:underline underline-offset-2">
              {ui.post.backToList}
            </Link>
          </div>
        </article>

        {/* 포스트 사이드바 */}
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-24">
            <PostSidebar
              headings={headings}
              activeId={activeId}
              currentSlug={post.slug}
              category={post.category}
            />
          </div>
        </aside>
      </div>
    </PageLayout>
  );
}
