import CustomLayout from "@/components/layouts/customLayout";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

import avatar from "../../../public/Images/avatar.jpg";
import { getPosts, postFilePaths, getPostBySlug } from "../../utils/mdx-utils";
import { MDXRemote } from "next-mdx-remote";

export default function PostPage({ posts, frontMatter, source }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.titlePost}>{frontMatter.title}</span>
      <img
        src="https://anhdep123.com/wp-content/uploads/2021/01/hinh-nen-thien-nhien-4k.jpg"
        alt="ss"
        className={styles.imgPost}
      />
      <div className={styles.wrapperContent}>
        <div className={styles.timePost}>
          <span>Posted {frontMatter.date}</span>
          <span>4 min read</span>
        </div>
        <div className={styles.author}>
          <Image src={avatar} className={styles.avatar} />
          <span>By {frontMatter.author}</span>
        </div>
        <span className={styles.desciption}>{frontMatter.description}</span>
        <p className={styles.content}>
          <MDXRemote {...source} />
        </p>
      </div>
      <div className={styles.otherArticles}>
        <div className={styles.type}>
          <span className={styles.typeOtherArticles}>Other articles</span>
          <Link href="/allBlogs">
            <span className={styles.seeAll}>See All</span>
          </Link>
        </div>
        <ul>
          {posts.slice(0, 3).map((post) => (
            <li className={styles.listPost}>
              <Link
                as={`/posts/${post.filePath.replace(/\.md?$/, "")}`}
                href={`/posts/[slug]`}
                className={styles.link}
              >
                <img
                  src="https://anhdep123.com/wp-content/uploads/2021/01/hinh-nen-thien-nhien-4k.jpg"
                  alt="ss"
                />
                <span className={styles.title}>{post.data.title}</span>
                <span className={styles.date}>{post.data.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

PostPage.Layout = CustomLayout;

export async function getStaticProps({ params }) {
  const posts = getPosts();
  const { mdxSource, data } = await getPostBySlug(params.slug);

  return { props: { posts, source: mdxSource, frontMatter: data } };
}

export async function getStaticPaths() {
  const paths = postFilePaths
    .map((path) => path.replace(/\.md?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
