import Layout from "../../components/layout";
import URLConvertor from "../../components/URLConvertor";
import PostsList from "../../components/postsList";
import CustomHead from "../../components/customHead";
import useI18n from "../../lib/useI18n";
import getPostsData from "../../lib/getPostsData";
import Link from "next/link";

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
          <Link href="https://www.pansou.vip/">
            <h3>盘搜 VIP ⛅ 云盘搜索工具精选导航</h3>
          </Link>
          <p>
            本站最新作品，精选各大人工亲测好用的云盘搜索工具，提供云盘搜索工具一站式导航，给你
            VIP 的体验。
          </p>
        </div>
        <div>
          <Link href="https://z-lib.one/">
            <h3>Z-Lib One | 在一个地方查找所有可用的 Z-Library 网站</h3>
          </Link>
          <p>
            一站式 Z-Library 导航中心，提供 Z-Library
            资源链接的实时更新，帮助你快速找到所需的书籍。
          </p>
        </div>
      </Layout>
    </>
  );
}
