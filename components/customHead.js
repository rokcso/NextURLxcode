import Head from "next/head";

export default function CustomHead({ texts }) {
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
        <meta name="keywords" content={safeTexts.siteKeywords} />
        <link rel="canonical" href={safeTexts.siteCanonical} />
        <link rel="icon" href="/favicon/icon16x16.png" />
        <link rel="icon" href="/favicon/icon32x32.png" />
        <link rel="icon" href="/favicon/icon48x48.png" />
        <link rel="icon" href="/favicon/icon64x64.png" />
        <link rel="icon" href="/favicon/icon128x128.png" />

        {/* 私有化部署的 umami 统计分析 */}
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
    </>
  );
}
