import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            <p>
          I'm a motivated and versatile individual, always eager to take on new challenges. 
          With a passion for learning I am dedicated to delivering high quality results. 
          With a positive attitude and a growth mindset, I am ready to make a meaningful 
          contribution and achieve great things.
        </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
