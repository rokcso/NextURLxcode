import Layout from "../../components/layout";
import CustomHead from "../../components/customHead";
import postsData from "../../public/posts/ru.json";

export default function Post({ post }) {
  const pStr = post.content.split("[|]");
  return (
    <>
      <Layout>
        <CustomHead texts={post} />
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
