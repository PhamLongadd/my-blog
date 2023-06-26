import CustomLayout from "@/components/layouts/customLayout";
import styles from "./index.module.css";

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
          <span className={styles.seeAll}>See All</span>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.filePath} className={styles.listPost}>
              <p className={styles.title}>{post.data.title}</p>
            </li>
          ))}
        </ul>
        {/* <ul>
          <li className={styles.listPost}>
            <img
              src="https://anhdep123.com/wp-content/uploads/2021/01/hinh-nen-thien-nhien-4k.jpg"
              alt="ss"
            />
            <p className={styles.title}>
              7 Things about web design your boss wants you to know
            </p>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
Home.Layout = CustomLayout;

export function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
