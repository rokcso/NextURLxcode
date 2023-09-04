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
        <br /><br /><br /><br /><br /><br />
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
