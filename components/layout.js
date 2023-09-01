import componentStyles from "./layout.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, texts }) {
  const safeTexts = texts || {};
  return (
    <>
      <Head>
        {/* BaiDu 搜索资源站点验证 */}
        <meta name="baidu-site-verification" content="codeva-yd4vTyGhor" />
        {/* Google 搜索资源站点验证 */}
        <meta
          name="google-site-verification"
          content="h9_G-edVa7uTlUrYdzBl-7zMXQbInCXjG70uZ__CVmk"
        />
        <title>{safeTexts.siteTitle}</title>
        <meta name="description" content={safeTexts.siteDescription} />
        <link rel="icon" href="/favicon/icon16x16.png" />
        <link rel="icon" href="/favicon/icon32x32.png" />
        <link rel="icon" href="/favicon/icon48x48.png" />
        <link rel="icon" href="/favicon/icon64x64.png" />
        <link rel="icon" href="/favicon/icon128x128.png" />

        {/* 私有化部署的 umami 统计分析 */}
        <script
          async
          defer
          data-website-id="1e1604b8-2b44-4b5f-87f8-f65c78879ff4"
          src="https://umami.waringhu.com/umami.js"
        ></script>
        <script
          async
          src="https://umami.rokcso.com/script.js"
          data-website-id="6cdcdba8-3a86-4ae9-9244-bfc1ef144b6e"
        ></script>
        {/* 百度统计分析 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?54ef289bd991df8f8430238e83790b15";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    `,
          }}
        />
        {/* Google 统计分析 */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B1CEHJ1G63"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-B1CEHJ1G63');
    `,
          }}
        />
      </Head>
      <div className={componentStyles.layout}>
        <header className={componentStyles.header}>
          <div className={componentStyles.headerContent}>
            <Link href="/" className={componentStyles.logo}>
              <span>URLxcode</span>
              <br />
              <span>x = En/De</span>
            </Link>
            <nav>
              <Link href="/">English</Link>
              &nbsp;
              <Link href="/zh">简体中文</Link>
              &nbsp;
              <Link href="/kr">한국인</Link>
              &nbsp;
              <Link href="/jp">日本語</Link>
            </nav>
          </div>
        </header>
        <main className={componentStyles.main}>{children}</main>
        <footer className={componentStyles.footer}>
          <span>Online URL Encode/Decode Tool.&nbsp;</span>
          <span>
            Copyright &copy; 2023 <Link href="https://rok.ink">rok.ink</Link>
            .&nbsp;
          </span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}
