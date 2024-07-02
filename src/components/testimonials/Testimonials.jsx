import React from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";
import TestCarousel from "./testCarousel/TestCarousel";
import user1 from "./../../../public/assets/user1.png";
import user2 from "./../../../public/assets/user2.png";
import user3 from "./../../../public/assets/user3.png";
import user4 from "./../../../public/assets/user4.png";

const Testimonials = () => {
  const data = [
    {
      user: "Vallabh Mehta",
      img: user1,
      company: "IT Company",
      stars: "⭐⭐⭐⭐⭐",
      desc: "The service was absolutely impeccible. I see myself and my family visiting here much more frequently.",
    },
    {
      user: "Pramod badale",
      img: user2,
      company: "Businessman",
      stars: "⭐⭐⭐⭐⭐",
      desc: "The service was absolutely impeccible. I see myself and my family visiting here much more frequently.",
    },
    {
      user: "Arvind Jain",
      img: user3,
      company: "Manager",
      stars: "⭐⭐⭐⭐⭐",
      desc: "The service was absolutely impeccible. I see myself and my family visiting here much more frequently.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.review}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
              >
                <path
                  d="M7.87055 28C5.45415 28 3.52104 27.1358 2.0712 25.4074C0.690399 23.6099 0 21.2938 0 18.4593C0 14.5877 1.0356 11.0963 3.1068 7.98518C5.24703 4.80493 8.49191 2.14321 12.8414 0L13.9806 1.65926C11.9094 2.9037 10.0108 4.66666 8.28479 6.94815C6.62783 9.16049 5.79935 11.4074 5.79935 13.6889C5.79935 14.3111 5.97195 14.8296 6.31715 15.2444C6.66235 15.5901 7.18015 15.763 7.87055 15.763C9.59655 15.763 11.0464 16.3852 12.2201 17.6296C13.4628 18.8049 14.0841 20.2568 14.0841 21.9852C14.0841 23.7136 13.4628 25.1654 12.2201 26.3407C11.0464 27.4469 9.59655 28 7.87055 28ZM25.7864 28C23.37 28 21.4369 27.1358 19.9871 25.4074C18.6063 23.6099 17.9159 21.2938 17.9159 18.4593C17.9159 14.5877 18.9515 11.0963 21.0227 7.98518C23.1629 4.80493 26.4078 2.14321 30.7573 0L31.8964 1.65926C29.8252 2.9037 27.9266 4.66666 26.2006 6.94815C24.5437 9.16049 23.7152 11.4074 23.7152 13.6889C23.7152 14.3111 23.8878 14.8296 24.233 15.2444C24.5782 15.5901 25.096 15.763 25.7864 15.763C27.5124 15.763 28.9622 16.3852 30.1359 17.6296C31.3786 18.8049 32 20.2568 32 21.9852C32 23.7136 31.3786 25.1654 30.1359 26.3407C28.9622 27.4469 27.5124 28 25.7864 28Z"
                  fill="black"
                  fillOpacity="0.11"
                />
              </svg>
              {item.desc}
              <svg
                className={styles.quote}
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="29"
                viewBox="0 0 33 29"
                fill="none"
              >
                <path
                  d="M24.8835 -1.2129e-06C27.3754 -1.42611e-06 29.3689 0.895056 30.8641 2.68518C32.288 4.54691 33 6.94568 33 9.88148C33 13.8914 31.932 17.5074 29.7961 20.7296C27.589 24.0235 24.2427 26.7803 19.7573 29L18.5825 27.2815C20.7184 25.9926 22.6764 24.1667 24.4563 21.8037C26.165 19.5123 27.0194 17.1852 27.0194 14.8222C27.0194 14.1778 26.8414 13.6407 26.4854 13.2111C26.1294 12.8531 25.5955 12.6741 24.8835 12.6741C23.1036 12.6741 21.6084 12.0296 20.3981 10.7407C19.1165 9.52346 18.4757 8.01975 18.4757 6.22963C18.4757 4.4395 19.1165 2.9358 20.3981 1.71851C21.6084 0.572837 23.1036 -1.06061e-06 24.8835 -1.2129e-06ZM6.40777 3.67888e-07C8.89967 1.5468e-07 10.8932 0.895058 12.3883 2.68518C13.8123 4.54691 14.5243 6.94568 14.5243 9.88148C14.5243 13.8914 13.4563 17.5074 11.3204 20.7296C9.11327 24.0235 5.76699 26.7803 1.28156 29L0.106796 27.2815C2.24272 25.9926 4.20065 24.1667 5.98058 21.8037C7.68932 19.5123 8.54369 17.1852 8.54369 14.8222C8.54369 14.1778 8.36569 13.6407 8.00971 13.2111C7.65372 12.8531 7.11974 12.6741 6.40777 12.6741C4.62783 12.6741 3.13269 12.0296 1.92233 10.7407C0.640776 9.52346 1.94062e-06 8.01975 1.78071e-06 6.22963C1.62081e-06 4.4395 0.640775 2.9358 1.92233 1.71852C3.13268 0.572838 4.62783 5.2018e-07 6.40777 3.67888e-07Z"
                  fill="black"
                  fillOpacity="0.11"
                />
              </svg>
            </div>

            <center>
              <Image
                src={item.img}
                className={styles.userImg}
                width={50}
                style={{ height: "auto" }}
                alt="User"
              />
            </center>

            <div className={styles.userInfo}>
              <div className={styles.userName}>{item.user}</div>
              <div className={styles.userCompany}>{item.company}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.carousel}>
        <TestCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
