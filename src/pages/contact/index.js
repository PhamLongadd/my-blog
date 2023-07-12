import DefaultLayout from "@/components/layouts/defaultLayout";

import styles from "./index.module.css";
import Image from "next/image";
import imgMe from "../../../public/images/aboutme.jpg";

function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.type}>
          <span className={styles.title}>Contact</span>
          <span className={styles.name}>Want to chat?</span>
        </div>
        <Image src={imgMe} className={styles.image} alt="ss" />
      </div>
      <div className={styles.wrapperContact}>
        <button className={styles.btnContact}>longblue2001@gmail.com</button>
        <button className={styles.btnContact}>0966-112-125</button>
      </div>
    </div>
  );
}

Contact.Layout = DefaultLayout;

export default Contact;
