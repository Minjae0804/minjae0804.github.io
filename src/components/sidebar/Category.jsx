// 실제 데이터 연동 전 임시 더미 데이터
const DUMMY_CATEGORIES = [
  { name: "Frontend", count: 12 },
  { name: "React", count: 8 },
  { name: "DevOps", count: 4 },
  { name: "Algorithm", count: 6 },
  { name: "회고", count: 3 },
];

export default function Category({ categories = DUMMY_CATEGORIES }) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
        카테고리
      </h2>
      <ul className="flex flex-col gap-1">
        {categories.map(({ name, count }) => (
          <li key={name}>
            <a
              href={`/categories/${name}`}
              className="flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors group"
            >
              <span>{name}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 tabular-nums">
                {count}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
