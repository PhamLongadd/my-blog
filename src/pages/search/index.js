import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CustomLayout from "@/components/layouts/customLayout";
import styles from "./index.module.css";
import { getPosts } from "@/utils/mdx-utils";

export default function SearchResult({ posts }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(router.query.query || "");

  useEffect(() => {
    if (router.query.query) {
      setSearchTerm(router.query.query);
    }
  }, [router.query.query]);

  const filteredPosts = posts.filter((post) =>
    post.data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={styles.wrapper}>
      <span className={styles.type}>Search Result</span>
      <div className={styles.search}>
        <button className={styles.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <ul className={styles.postGrid}>
          {filteredPosts.map((post) => (
            <Link
              as={`/posts/${post.filePath.replace(/\.md?$/, "")}`}
              href={`/posts/[slug]`}
              className={styles.link}
            >
              <li className={styles.listPost} key={post.filePath}>
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

SearchResult.Layout = CustomLayout;

export function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
