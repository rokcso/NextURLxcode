import Layout from "../../../components/layout";
import useI18n from "../../../lib/useI18n";
import postsData from "../../../public/posts/jp.json";

export default function Post({ post }) {
  const texts = useI18n();
  return (
    <>
      <Layout texts={texts}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = postsData.map((post) => ({
    params: {
      id: post.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const post = postsData.find((post) => post.id === id);
  return {
    props: {
      post,
    },
  };
}
