import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zainab Khayat</h1>
        <h2 className={styles.subtitle}>PRODUCT OWNER & FRONTEND DEVELOPER</h2>
        <p className={styles.description}>
          Strategic Product Owner with 3+ years of technical frontend expertise.  
Drives product vision, prioritizes backlogs, and delivers data-driven solutions by translating stakeholder needs into scalable products.  
Optimizes workflows and aligns cross-functional teams using Agile methodologies to maximize business value. 
        </p>
                <a href="https://drive.google.com/file/d/1MYy0sFV6Jup8y_6rLYsBnSmcqfH5YokK/view?usp=sharing" className={styles.contactBtn} target="_blank">
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
