import Link from "next/link";

import CustomLayout from "@/components/layouts/customLayout";
import styles from "./index.module.css";
import { getPosts } from "../utils/mdx-utils";

export default function Home({ posts }) {
  const featuredPost = posts[1];

  return (
    <div className={styles.container}>
      <div className={styles.featuredPost}>
        <span className={styles.type}>Featured Post</span>
        <div className={styles.wrapperContent}>
          <Link
            as={`/posts/${featuredPost.filePath.replace(/\.md?$/, "")}`}
            href={`/posts/[slug]`}
            className={styles.link}
          >
            <div className={styles.content}>
              <div className={styles.wrapperTitle}>
                <span className={styles.title}>{featuredPost.data.title}</span>
                <span className={styles.date}>{featuredPost.data.date}</span>
              </div>
              <div className={styles.imageContent}>
                <img src={featuredPost.data.image} alt="ss" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.recentPost}>
        <div className={styles.type}>
          <span className={styles.typeRecentPost}>Recent Post</span>
          <Link href="/allBlogs">
            <span className={styles.seeAll}>See All</span>
          </Link>
        </div>
        <ul>
          {posts.slice(0, 4).map((post) => (
            <li key={post.filePath} className={styles.listPost}>
              <Link
                as={`/posts/${post.filePath.replace(/\.md?$/, "")}`}
                href={`/posts/[slug]`}
                className={styles.link}
              >
                <img src={post.data.image} alt="ss" />
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
Home.Layout = CustomLayout;

export function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
