import CustomLayout from "@/components/layouts/customLayout";
import Image from "next/image";

import styles from "./index.module.css";
import imgMe from "../../../public/images/aboutme.jpg";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.type}>
          <span className={styles.title}>About Me</span>
          <span className={styles.name}>Hey, I'm Long</span>
        </div>
        <Image src={imgMe} className={styles.image} alt="ss" />
      </div>
      <div className={styles.border}></div>
      <div className={styles.wrapperContent}>
        <p className={styles.content}>
          Hi! I'm Long, a passionate Frontend Developer in the field of
          technology. I would like to share a bit about myself and my journey in
          this profession.
        </p>
        <h4 className={styles.title}>Skills and Experience</h4>
        <p className={styles.content}>
          1: Deep knowledge of HTML, CSS, JavaScript, React.js, Next.js:I
          possess a strong foundation in these essential web technologies and
          have successfully applied them in various projects.
        </p>
        <p className={styles.content}>
          2: Ability to work independently and in a team: I am capable of
          working effectively both independently and collaboratively within a
          team. I have excellent communication skills, enabling me to interact
          with clients and colleagues efficiently.
        </p>
        <p className={styles.content}>
          I continuously update and enhance my skills in Frontend Development to
          ensure that I can meet the demands and tackle new challenges in the
          industry.
        </p>
        <h4 className={styles.title}>Passion and Goals</h4>
        <p className={styles.content}>
          Passion and Goals I have a genuine passion for my work and always seek
          opportunities for self-development. My goal is to become a skilled
          Frontend Developer, and I continuously strive to learn and improve my
          skills to achieve that goal. I believe that technology is a field full
          of potential, and I am dedicated to making contributions and driving
          advancements within the industry.
        </p>
        <h4 className={styles.title}>This Website</h4>
        <p className={styles.content}>
          This website is created to share information and knowledge about
          technology. I hope it provides you with valuable insights and helps me
          connect with the community. You can find articles, tutorials, and
          resources related to technology on this website.
        </p>
      </div>
    </div>
  );
}

About.Layout = CustomLayout;

export default About;
