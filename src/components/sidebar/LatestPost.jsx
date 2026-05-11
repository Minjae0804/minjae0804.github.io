// 실제 데이터 연동 전 임시 더미 데이터
const DUMMY_LATEST = [
  { id: 1, title: "Tailwind CSS v4 달라진 점 정리", date: "2025-04-10", url: "/posts/tailwind-v4" },
  { id: 2, title: "React에서 다크모드 구현하기", date: "2025-03-22", url: "/posts/react-darkmode" },
  { id: 3, title: "GitHub Pages에 Vite + React 배포하기", date: "2025-03-05", url: "/posts/github-pages-vite" },
  { id: 4, title: "useEffect 제대로 이해하기", date: "2025-02-18", url: "/posts/useeffect-deep-dive" },
  { id: 5, title: "Git 브랜치 전략 정리", date: "2025-01-30", url: "/posts/git-branch-strategy" },
];

export default function LatestPost({ posts = DUMMY_LATEST }) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
        최근 포스트
      </h2>
      <ul className="flex flex-col gap-3">
        {posts.map(({ id, title, date, url }) => {
          const formatted = new Date(date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          return (
            <li key={id}>
              <a
                href={url}
                className="flex flex-col gap-0.5 group"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1 leading-snug">
                  {title}
                </span>
                <time
                  dateTime={date}
                  className="text-xs text-gray-400 dark:text-gray-500"
                >
                  {formatted}
                </time>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
