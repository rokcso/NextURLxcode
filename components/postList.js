import componentStyles from "./postList.module.css";
import Link from "next/link";

export default function PostList({ posts }) {
  if (!posts) {
    return <div>Loading posts...</div>;
  }
  return (
    <div className={componentStyles.postList}>
      {posts.map((post) => (
        // <Link key={post.id} href="/posts/[id]" as={`/posts/${post.id}`}>
        <div key={post.id} className={componentStyles.post}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
        // </Link>
      ))}
    </div>
  );
}
