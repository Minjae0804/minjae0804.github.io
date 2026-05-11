import PostExcerpt from "./PostExcerpt";
import ReadingTime from "./ReadingTime";

export default function PostBody({ excerpt = "", content = "" }) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <PostExcerpt excerpt={excerpt} />
      <ReadingTime content={content} />
    </div>
  );
}
