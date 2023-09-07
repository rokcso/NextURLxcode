import { useRouter } from "next/router";
import enPosts from "../public/posts/en.json";
import zhPosts from "../public/posts/zh.json";
import krPosts from "../public/posts/kr.json";
import jpPosts from "../public/posts/jp.json";
import ruPosts from "../public/posts/ru.json";

export default function getPostsData() {
  const { pathname } = useRouter();
  const languageMap = {
    "/": enPosts,
    "/zh": zhPosts,
    "/kr": krPosts,
    "/jp": jpPosts,
    "/ru": ruPosts,
  };
  const postsData = languageMap[pathname] || enPosts;
  return postsData;
}
