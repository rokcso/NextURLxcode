import Layout from "../components/layout";
import URLConvertor from "../components/URLConvertor";
import { en } from "./i18n";

export default function Home() {
  return (
    <Layout
      siteName={en.siteName}
      siteTitle={en.siteTitle}
      siteDescription={en.siteDescription}
    >
      <URLConvertor texts={en} />
    </Layout>
  );
}
