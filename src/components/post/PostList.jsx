import PostCard from "./PostCard";

// 실제 데이터 연동 전 임시 더미 데이터
const DUMMY_POSTS = [
  {
    id: 1,
    title: "Tailwind CSS v4 달라진 점 정리",
    date: "2025-04-10",
    category: "Frontend",
    tags: ["tailwind", "css"],
    uploader: "minjae0804",
    excerpt: "Tailwind CSS v4가 출시되면서 설정 방식과 성능이 크게 달라졌습니다. 무엇이 바뀌었는지 핵심만 정리해봤습니다.",
    content: "Tailwind CSS v4가 출시되면서 설정 방식과 성능이 크게 달라졌습니다. 무엇이 바뀌었는지 핵심만 정리해봤습니다. 기존의 tailwind.config.js 대신 CSS 파일에서 직접 설정하는 방식으로 변경되었고, Rust 기반 엔진으로 빌드 속도가 대폭 향상되었습니다.",
    url: "/posts/tailwind-v4",
  },
  {
    id: 2,
    title: "React에서 다크모드 구현하기",
    date: "2025-03-22",
    category: "React",
    tags: ["react", "darkmode", "tailwind"],
    uploader: "minjae0804",
    excerpt: "Tailwind의 dark: 변형과 localStorage를 조합해서 다크모드를 깔끔하게 구현하는 방법을 소개합니다.",
    content: "Tailwind의 dark: 변형과 localStorage를 조합해서 다크모드를 깔끔하게 구현하는 방법을 소개합니다. tailwind.config에서 darkMode를 class로 설정하고, html 엘리먼트에 dark 클래스를 토글하는 방식으로 동작합니다.",
    url: "/posts/react-darkmode",
  },
  {
    id: 3,
    title: "GitHub Pages에 Vite + React 배포하기",
    date: "2025-03-05",
    category: "DevOps",
    tags: ["github", "vite", "deploy"],
    uploader: "minjae0804",
    excerpt: "vite.config.js 설정 한 줄과 GitHub Actions 워크플로우로 자동 배포 파이프라인을 구성하는 과정을 정리했습니다.",
    content: "vite.config.js 설정 한 줄과 GitHub Actions 워크플로우로 자동 배포 파이프라인을 구성하는 과정을 정리했습니다. base 경로 설정과 gh-pages 브랜치 구성이 핵심입니다.",
    url: "/posts/github-pages-vite",
  },
];

export default function PostList({ posts = DUMMY_POSTS }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400 dark:text-gray-500 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
        </svg>
        <p className="text-sm">아직 작성된 포스트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
