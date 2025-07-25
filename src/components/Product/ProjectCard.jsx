import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  product: { title, imageSrc, description, demo },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
          <div className={styles.left}>
            <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.image}
            />
            <div className={styles.links}>
              <a href={demo} className={styles.link} target="_blank">
                Demo
              </a>
            </div>
          </div>
        <div className={styles.right}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      
    </div>
  );
};


