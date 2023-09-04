import Layout from "../../components/layout";
import useI18n from "../../lib/useI18n";
import postsData from "../../public/posts/en.json";

export default function Post({ post }) {
  const texts = useI18n();
  const pStr = post.content.split("[|]");
  return (
    <>
      <Layout texts={texts}>
        <div>
          <h1>{post.title}</h1>
          {pStr.map((str, index) => (
            <p key={index}>{`${str}`}</p>
          ))}
        </div>
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
