import Layout from "../components/layout";
import URLConvertor from "../components/URLConvertor";
import PostsList from "../components/postsList";
import useI18n from "../lib/useI18n";
import getPostsData from "../lib/getPostsData";

export default function Home() {
  const texts = useI18n();
  const posts = getPostsData();
  return (
    <Layout texts={texts}>
      <URLConvertor texts={texts} />
      <PostsList posts={posts} />
    </Layout>
  );
}
