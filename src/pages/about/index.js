import CustomLayout from "@/components/layouts/customLayout";
import Image from "next/image";
import styles from "./index.module.css";

import imgMe from "../../../public/Images/aboutme.jpg";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.type}>
          <span className={styles.title}>About Me</span>
          <span className={styles.name}>Hey, I'm Long</span>
        </div>
        <Image src={imgMe} className={styles.image} />
      </div>
      <div className={styles.border}></div>
      <div className={styles.content}>
        <h1>My Story</h1>
      </div>
    </div>
  );
}

About.Layout = CustomLayout;

export default About;
