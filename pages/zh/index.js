import Layout from "../../components/layout";
import URLConvertor from "../../components/URLConvertor";
import { zh } from "../i18n";

export default function Home() {
  return (
    <Layout
      siteName={zh.siteName}
      siteTitle={zh.siteTitle}
      siteDescription={zh.siteDescription}
    >
      <URLConvertor texts={zh} />
    </Layout>
  );
}
