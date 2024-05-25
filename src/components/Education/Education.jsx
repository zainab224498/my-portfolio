import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img  src={getImageUrl("about/uni2.jpg")} className={styles.imageEducation} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Software Engineering</h3>
              <p>
              Tishreen University
              </p>
              <h4>
              Sep 2016 - Dec 2021
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
