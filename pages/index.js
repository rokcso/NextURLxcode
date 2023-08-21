import Layout from "../components/layout";
import PostList from "../components/postList";
import URLConvertor from "../components/URLConvertor";
import { en } from "./i18n";
import { postsEn } from "../public/posts/data";

export default function Home() {
  return (
    <Layout texts={en}>
      <URLConvertor texts={en} />
      <PostList posts={postsEn} />
    </Layout>
  );
}
