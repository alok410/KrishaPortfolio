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
              <p>I am passionate about programming and have proficiency in languages like Python,Java along with web
 development skills in HTML, CSS, JavaScript, and frameworks like Node.js, React js and Express.js and
 database like MongoDB, SQL. I enjoy solving complex problems using data structures, algorithms, and
 competitive programming.I am detail-oriented, a quick learner, and always eager to expand my knowledge.</p>
            </div>
          </li>
          </ul>
      </div>
    </section>
  );
};
