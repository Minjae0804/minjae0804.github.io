// 실제 데이터 연동 전 임시 더미 데이터
const DUMMY_TAGS = [
  { name: "react", count: 8 },
  { name: "tailwind", count: 6 },
  { name: "typescript", count: 5 },
  { name: "vite", count: 4 },
  { name: "github", count: 4 },
  { name: "css", count: 7 },
  { name: "hooks", count: 3 },
  { name: "deploy", count: 3 },
  { name: "algorithm", count: 6 },
  { name: "git", count: 5 },
];

// 태그 빈도에 따라 글씨 크기 결정
function getFontSize(count, min, max) {
  if (max === min) return "text-sm";
  const ratio = (count - min) / (max - min);
  if (ratio > 0.66) return "text-base font-medium";
  if (ratio > 0.33) return "text-sm";
  return "text-xs";
}

export default function TagCloud({ tags = DUMMY_TAGS }) {
  const counts = tags.map((t) => t.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);

  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
        태그
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ name, count }) => (
          <a
            key={name}
            href={`/tags/${name}`}
            className={`${getFontSize(count, min, max)} px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
          >
            #{name}
          </a>
        ))}
      </div>
    </div>
  );
}
