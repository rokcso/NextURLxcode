import Layout from "../../components/layout";
import PostList from "../../components/postList";
import URLConvertor from "../../components/URLConvertor";
import { zh } from "../i18n";
import { postsZh } from "../../public/posts/data";

export default function Home() {
  return (
    <Layout texts={zh}>
      <URLConvertor texts={zh} />
      <PostList posts={postsZh} />
    </Layout>
  );
}
