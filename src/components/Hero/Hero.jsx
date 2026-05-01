import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zainab Khayat</h1>
        <h2 className={styles.subtitle}>Product Owner</h2>
        <p className={styles.description}>
          Strategic Product Owner & Software Engineer bridging the gap between technical precision and e-commerce growth.
          With 6+ years of experience and 40+ stores developed, I transform platforms into profitable success stories. 
        </p>
                <a href="https://drive.google.com/file/d/1_4ShU8cUu-ekOGwO9EOidD8bJx1b5wOU/view?usp=sharing" className={styles.contactBtn} target="_blank">
          Check Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
