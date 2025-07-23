import React from "react";

import styles from "./Skill.module.css";
import skills from "../../data/skills.json";
import productskills from "../../data/productskills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Skill = () => {
  return (
    <section className={styles.container} id="skill">
      <h2 className={styles.title}>Skills</h2>
      <h3 className={styles.titlesub}>Product Owner Skills</h3>
      <div className={styles.content}>
        <div className={styles.skills}>
          {productskills.map((proskill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(proskill.imageSrc)} alt={proskill.title} />
                </div>
                <p>{proskill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className={styles.titlesub}>Frontend Skills</h3>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
