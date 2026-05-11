import heroImage from "../../assets/hero.png";

export default function BlogCover() {
  return (
    <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden bg-gray-200 dark:bg-gray-800">
      <img
        src={heroImage}
        alt="블로그 커버 이미지"
        className="w-full h-full object-cover"
      />
      {/* 하단 그라디언트 오버레이 — 텍스트 가독성 확보 */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)" }}
        aria-hidden="true"
      />
    </div>
  );
}
