import React, { useContext } from "react";
import styles from "./page.module.css";
import { BooleanContext } from "@/app/context";
import Link from "next/link";

function Hero() {
  const { english } = useContext(BooleanContext);

  return (
    <div className={styles.container}>
      <img src="./assets/home/bg1.png" alt="img" className={styles.bg1} />
      <img src="./assets/home/mbg1.png" alt="img" className={styles.mbg1} />
      <div className={styles.head1}>
        <img src="./assets/home/lady.png" alt="img" className={styles.lady} />
        {!english && "स्योन में आपका स्वागत है"}
        {english && " Welcome to Syon!"}
      </div>
      <div className={styles.head2}>
        <p>
          {!english && `हर गांव को `}
          {english && `Light up`}
          <span className={styles.orangeText}>
            &nbsp; {!english && `सौर ऊर्जा`}
            {english && `every village`} &nbsp;
          </span>

          {!english && `से रोशन करें, हर दिन नई किरणों के साथ! 🌞🌾`}
          {english && `with solar energy, with new rays every day!🌞🌾`}
        </p>
      </div>

      {!english && (
        <Link href="/contact">
          <img
            src="./assets/home/hget.png"
            alt="get-started"
            className={styles.get}
          />
        </Link>
      )}
      {english && (
        <Link href="/contact">
          <img
            src="./assets/home/get.png"
            alt="get-started"
            className={styles.get}
          />
        </Link>
      )}

      <img src="./assets/home/camel.png" alt="img" className={styles.camel} />
    </div>
  );
}

export default Hero;
