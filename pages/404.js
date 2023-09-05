import Layout from "../components/layout";
import CustomHead from "../components/customHead";
import Link from "next/link";

export default function Custom404() {
  const texts = {
    siteTitle: "404 Not Found - URL Encode/Decode Online Tool - URLxcode.com",
    siteDescription:
      "URLxcode is a collection of easy-to-use URL online tools, providing URL encoding/decoding services, supporting URL parameter parsing and converting to JSON, including URL-related knowledge.",
    siteKeywords: "URL, Encode, Decode, Online, Tool",
  };
  return (
    <Layout>
      <CustomHead texts={texts} />
      <div>
        <h1>⚠️ 404 Not Found 🚧</h1>
        <h2>
          <Link href="/">➡️ Home 🏠</Link>
        </h2>
      </div>
    </Layout>
  );
}
