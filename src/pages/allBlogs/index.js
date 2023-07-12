import Link from "next/link";

import DefaultLayout from "@/components/layouts/defaultLayout";
import styles from "./index.module.css";
import { getPosts } from "@/utils/mdx-utils";

function AllBlogs({ posts }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.allPosts}>All Blog Posts</span>
      <div>
        <ul className={styles.postGrid}>
          {posts.map((post) => (
            <Link
              as={`/posts/${post.filePath.replace(/\.md?$/, "")}`}
              href={`/posts/[slug]`}
              className={styles.link}
            >
              <li key={post.filePath} className={styles.listPost}>
                <img src={post.data.image} alt="ss" />
                <span className={styles.title}>{post.data.title}</span>
                <span className={styles.date}>{post.data.date}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

AllBlogs.Layout = DefaultLayout;

export default AllBlogs;

export function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
