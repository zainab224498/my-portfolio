import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Zenab Kheat</h1>
        <h2 className={styles.subtitle}>Frontend Web Developer</h2>
        <p className={styles.description}>
          I'm a Frontend Web Developer with more than 4 years of experience in frontend web development with a passion for building
responsive and performant websites.
        </p>
                <a href="https://drive.google.com/file/d/1X1E-pZcbelT6Ftv-Or0c8fZErAFHPoRq/view?usp=sharing" className={styles.contactBtn} target="_blank">
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
