import componentStyles from "./layout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  let homePath = "";
  if (pathname.split("/")[1].length !== 2) {
    homePath = "";
  } else {
    homePath = pathname.split("/")[1] || "";
  }

  return (
    <>
      <div className={componentStyles.layout}>
        <header className={componentStyles.header}>
          <div className={componentStyles.headerContent}>
            <Link href={`/${homePath}`} className={componentStyles.logo}>
              <span>URLxcode</span>
              <br />
              <span>x = En/De</span>
            </Link>
            {pathname.length <= 3 ? (
              <nav>
                <Link href={`/`}>English</Link>
                &nbsp;
                <Link href={`/zh`}>简体中文</Link>
                &nbsp;
                <Link href={`/kr`}>한국인</Link>
                &nbsp;
                <Link href={`/jp`}>日本語</Link>&nbsp;
                <Link href={`/ru`}>Русский</Link>
              </nav>
            ) : (
              ""
            )}
          </div>
        </header>
        <main className={componentStyles.main}>{children}</main>
        <footer className={componentStyles.footer}>
          <span>Online URL Encode/Decode Tool.&nbsp;</span>
          <span>
            Copyright &copy; 2023 <Link href="https://rokcso.com">rokcso</Link>
            .&nbsp;
          </span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}
