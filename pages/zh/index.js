import Layout from "../../components/layout";
import URLConvertor from "../../components/URLConvertor";
import PostsList from "../../components/postsList";
import CustomHead from "../../components/customHead";
import useI18n from "../../lib/useI18n";
import getPostsData from "../../lib/getPostsData";
import Link from "next/link";
import AdBanner from "../../components/adBanner";

export default function Home() {
  const texts = useI18n();
  const posts = getPostsData();
  return (
    <>
      <CustomHead texts={texts} />
      <Layout>
        <URLConvertor texts={texts} />
        <AdBanner />
        <PostsList posts={posts} texts={texts} />
        <div>
          <Link href="https://www.pansou.vip/">
            <h3>盘搜 VIP ⛅ 云盘搜索工具精选导航</h3>
          </Link>
          <p>
            本站最新作品，精选各大人工亲测好用的云盘搜索工具，提供云盘搜索工具一站式导航，给你
            VIP 的体验。
          </p>
        </div>
      </Layout>
    </>
  );
}
