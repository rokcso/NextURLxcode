export async function getStaticPaths() {
  // 返回需要预渲染的路径集合

  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const { posts } = await import("../../public/posts/data");

  const post = posts.find((p) => p.id === id);

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      {post.content}
    </div>
  );
}
