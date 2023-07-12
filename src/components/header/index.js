import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";
import Link from "next/link";
import SearchContext from "../header/searchContext";

export default function Header() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const searchQuery = event.target.value;
      router.push(`/search?query=${searchQuery}`);
    }
  };

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
            <Link href="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </button>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
