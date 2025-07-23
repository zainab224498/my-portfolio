import React from "react";

import styles from "./Projects.module.css";

import product from "../../data/product.json";
import { ProjectCard } from "./ProjectCard";

export const Product = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Product Ownership Project</h2>
      <div className={styles.projects}>
        {product.map((produc, id) => {
          return <ProjectCard key={id} product={produc} />;
        })}
      </div>
    </section>
  );
};

