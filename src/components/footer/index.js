import styles from "./index.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">MY BLOG</Link>
      </div>
      <div className={styles.right}>
        <div className={styles.information}>
          <span>CATEGORIES</span>
          <Link href="/">Entrepreneurship</Link>
          <Link href="/">Creator</Link>
          <Link href="/">Tech</Link>
          <Link href="/allBlogs">All</Link>
        </div>
        <div className={styles.information}>
          <span>PAGES</span>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
        </div>
        <div className={styles.information}>
          <span>CONTACT</span>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Email me</Link>
        </div>
      </div>
    </div>
  );
}
