import DefaultLayout from "@/components/layouts/defaultLayout";
import styles from "./index.module.css";
import Link from "next/link";

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
              <li className={styles.listPost}>
                <img
                  src="https://anhdep123.com/wp-content/uploads/2021/01/hinh-nen-thien-nhien-4k.jpg"
                  alt="ss"
                />
                <span className={styles.title}>{post.data.title}</span>
                <span className={styles.date}>{post.data.date}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.btn}>
        <button className={styles.button}>Back</button>
        <span>1/4</span>
        <button className={styles.button}>Next</button>
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
