import PostTitle from "./PostTitle";
import PostUploadDateTime from "./PostUploadDateTime";
import PostTag from "./PostTag";
import PostCategory from "./PostCategory";
import PostUploader from "./PostUploader";

export default function PostHeader({ post }) {
  const { slug, title, date, tags = [], category, uploader } = post;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <PostCategory category={category} />
        <span className="text-stone-300 dark:text-stone-600 text-xs" aria-hidden="true">·</span>
        <PostUploadDateTime date={date} />
      </div>
      <PostTitle title={title} slug={slug} />
      <div className="flex items-center justify-between flex-wrap gap-2 mt-1">
        <PostTag tags={tags} />
        <PostUploader uploader={uploader} />
      </div>
    </div>
  );
}
