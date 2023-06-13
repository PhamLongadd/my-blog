import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">MY BLOG</Link>
      </div>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div className={styles.search}>
          <button className={styles.searchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}
