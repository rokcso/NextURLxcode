import componentStyles from "./layout.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, texts }) {
  return (
    <>
      <Head>
        {/* BaiDu 搜索资源站点验证 */}
        <meta name="baidu-site-verification" content="codeva-yd4vTyGhor" />
        {/* Google 搜索资源站点验证 */}
        <meta name="google-site-verification" content="h9_G-edVa7uTlUrYdzBl-7zMXQbInCXjG70uZ__CVmk" />
        <title>{texts.siteTitle}</title>
        <meta name="description" content={texts.siteDescription} />
        <link rel="icon" href="/favicon/icon16x16.png" />
        <link rel="icon" href="/favicon/icon32x32.png" />
        <link rel="icon" href="/favicon/icon48x48.png" />
        <link rel="icon" href="/favicon/icon64x64.png" />
        <link rel="icon" href="/favicon/icon128x128.png" />
      </Head>
      <div className={componentStyles.layout}>
        <header className={componentStyles.header}>
          <div className={componentStyles.headerContent}>
            <Link href="/" className={componentStyles.logo}>
              <span>URL xcode</span>
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
            Copyright &copy; 2023 <Link href="/">{texts.siteName}</Link>.&nbsp;
          </span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}
