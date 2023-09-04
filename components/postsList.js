import Link from "next/link";
import { useRouter } from "next/router";

export default function PostsList({ posts }) {
  const { pathname } = useRouter();
  let path = "";
  if (pathname !== "/") {
    path = pathname;
  }
  return (
    <>
      <div>
        <h2>About URL</h2>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <Link href={`${path}/posts/${post.id}`}>
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
