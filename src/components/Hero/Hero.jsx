import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Zenab Kheat</h1>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <p className={styles.description}>
          I'm a Frontend Developer with more than 4 years of experience in frontend development with a passion for building
responsive and performant websites.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Check Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
