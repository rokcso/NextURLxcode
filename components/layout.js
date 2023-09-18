import componentStyles from "./layout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const homePath = pathname.split("/")[1] || "";
  const languageOptions = [
    { path: "/", label: "English" },
    { path: "/zh", label: "简体中文" },
    { path: "/tc", label: "繁體中文" },
    { path: "/kr", label: "한국인" },
    { path: "/jp", label: "日本語" },
    { path: "/ru", label: "Русский" },
    { path: "/es", label: "Español" },
    { path: "/vn", label: "Tiếng Việt" },
  ];

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
            {pathname.length <= 3 && (
              <nav>
                {languageOptions.map((item) => (
                  <span key={item.path}>
                    &nbsp;
                    <Link href={item.path}>{item.label}</Link>
                  </span>
                ))}
              </nav>
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
