import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Iform from "@/components/iForms/page";
import data from "@/data/services.json";

const Service = ({ params }) => {
  const slug = params.slug;
  const service = data[slug];
  return (
    <>
      <div className={styles.home}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.homeData}>
              <h1 className={styles.homeHeading}>{service.title}</h1>
              <p className={styles.homePara}>{service.para_1}</p>
              <p className={styles.homePara2}>{service.para_2}</p>
            </div>
            <div className={styles.imgWrapper}>
              <Image
                className={styles.homeImg}
                src={service.image}
                width={500}
                height={500}
                placeholder="blur"
                alt={service.title}
                blurDataURL={service.image}
              />
            </div>
          </div>
        </div>
        <Iform title={service.title} />
      </div>
    </>
  );
};

export default Service;
