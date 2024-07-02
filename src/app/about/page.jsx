import React from "react";
import styles from "./page.module.css";
import HeroAbout from "@/components/heroAbout/page";

function About() {
  return (
    <div className={styles.container}>
      <HeroAbout />
    </div>
  );
}

export default About;
