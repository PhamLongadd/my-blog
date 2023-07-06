import CustomLayout from "@/components/layouts/customLayout";
import styles from "./index.module.css";
import Link from "next/link";

import { getPosts } from "../utils/mdx-utils";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.featuredPost}>
        <span className={styles.type}>Featured Post</span>
        <div className={styles.wrapperContent}>
          <div className={styles.content}>
            <div className={styles.wrapperTitle}>
              <span className={styles.title}>
                Designers who changed the web
              </span>
              <span className={styles.date}>July 28, 2022</span>
            </div>
            <div className={styles.imageContent}>
              <img
                src="https://anhdep123.com/wp-content/uploads/2021/01/hinh-nen-thien-nhien-4k.jpg"
                alt="ss"
              />
            </div>
          </div>
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
Home.Layout = CustomLayout;

export function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
