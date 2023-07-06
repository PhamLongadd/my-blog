import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

export const POSTS_PATH = path.join(process.cwd(), "src/posts");

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.md?$/.test(path));

export const getPosts = () => {
  let posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return posts;
};

export const getPostBySlug = async (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.md`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return { mdxSource, data, postFilePath };
};
