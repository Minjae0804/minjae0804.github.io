import PostExcerpt from "./PostExcerpt";

export default function PostBody({ excerpt = "" }) {
  return (
    <div className="mt-3">
      <PostExcerpt excerpt={excerpt} />
    </div>
  );
}
