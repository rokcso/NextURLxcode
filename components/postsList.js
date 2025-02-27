import Link from "next/link";
import { useRouter } from "next/router";

export default function PostsList({ posts, texts }) {
  const safeTexts = texts || {};
  const { pathname } = useRouter();
  let path = "";
  if (pathname !== "/") {
    path = pathname;
  }
  return (
    <>
      <div>
        {/* <a href="https://ko-fi.com/D1D4YYEMT" target="_blank">
          <img
            height="36"
            style={{ border: "0px", height: "36px" }}
            src="https://storage.ko-fi.com/cdn/kofi1.png?v=3"
            border="0"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a> */}
        <h2>{safeTexts.aboutURL}</h2>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <Link href={`${path}/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
