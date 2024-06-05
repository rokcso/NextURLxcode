import Link from "next/link";
import Layout from "../components/layout";
import URLConvertor from "../components/URLConvertor";
import PostsList from "../components/postsList";
import CustomHead from "../components/customHead";
import useI18n from "../lib/useI18n";
import getPostsData from "../lib/getPostsData";

export default function Home() {
  const texts = useI18n();
  const posts = getPostsData();
  return (
    <>
      <CustomHead texts={texts} />
      <Layout>
        <URLConvertor texts={texts} />
        <PostsList posts={posts} texts={texts} />
        <div>
          <Link href="https://z-lib.one/">
            <h3>
              Z-Lib One | Find all available Z-Library websites in one place.
            </h3>
          </Link>
          <p>
            Your one-stop Z-Library navigation center, providing real-time
            updates of Z-Library resource links, helping you quickly find the
            books you need.
          </p>
        </div>
      </Layout>
    </>
  );
}
