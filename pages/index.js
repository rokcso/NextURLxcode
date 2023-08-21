import Layout from "../components/layout";
import URLConvertor from "../components/URLConvertor";
import useI18n from "../lib/useI18n";

export default function Home() {
  const texts = useI18n();
  return (
    <Layout texts={texts}>
      <URLConvertor texts={texts} />
    </Layout>
  );
}
