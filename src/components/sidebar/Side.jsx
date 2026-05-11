import SearchBar from "./SearchBar";
import AboutMe from "./AboutMe";
import Category from "./Category";
import LatestPost from "./LatestPost";
import TagCloud from "./TagCloud";

export default function Side() {
  return (
    <>
      <SearchBar />
      <Divider />
      <AboutMe />
      <Divider />
      <Category />
      <Divider />
      <LatestPost />
      <Divider />
      <TagCloud />
    </>
  );
}

function Divider() {
  return (
    <hr className="border-none border-t border-gray-100 dark:border-gray-800" />
  );
}
