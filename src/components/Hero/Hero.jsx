import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zainab Khayat</h1>
        <h2 className={styles.subtitle}>Business Analyst & Frontend Developer</h2>
        <p className={styles.description}>
          Technically oriented analyst with +3 years of frontend development expertise and a track record of translating business needs into scalable web solutions.
        </p>
                <a href="https://drive.google.com/file/d/1P--zK4cAu4LOD_a8u7_nucV7zthKEcOG/view?usp=sharing" className={styles.contactBtn} target="_blank">
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
