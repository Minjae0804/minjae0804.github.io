import PostTitle from "./PostTitle";
import PostUploadDateTime from "./PostUploadDateTime";
import PostTag from "./PostTag";
import PostCategory from "./PostCategory";
import PostUploader from "./PostUploader";

export default function PostHeader({ post }) {
  const { title, date, tags = [], category, uploader, url } = post;

  return (
    <div className="flex flex-col gap-2">
      {/* 카테고리 + 날짜 */}
      <div className="flex items-center gap-2 flex-wrap">
        <PostCategory category={category} />
        <span className="text-gray-300 dark:text-gray-600 text-xs" aria-hidden="true">·</span>
        <PostUploadDateTime date={date} />
      </div>

      {/* 제목 */}
      <PostTitle title={title} url={url} />

      {/* 태그 + 작성자 */}
      <div className="flex items-center justify-between flex-wrap gap-2 mt-1">
        <PostTag tags={tags} />
        <PostUploader uploader={uploader} />
      </div>
    </div>
  );
}
