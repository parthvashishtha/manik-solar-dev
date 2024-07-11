"use client";
import React, { useState } from "react";
import stars from "../../../public/assets/stars.png";
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "post",
      url: "/api/data/newsletter",
      params: {},
      data: formData,
    })
      .then(function (response) {
        setFormData({
          email: "",
        });
        alert("Your message/query has been submitted successfully.");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  };
  return (
    <div className={styles.container}>
      <img src="/assets/footbg.png" alt="img" className={styles.footbg} />
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div className={styles.head1}>Syon</div>
          <div className={styles.desc2}>Solar & Renewable Energy</div>
          <div className={styles.desc1}>
            At Mentary, we believe in the power of renewable energy to create a
            more sustainable future.
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.head2}>Services</div>
          <div className={styles.desc3}>Solar Panel Installation</div>
          <div className={styles.desc3}>Wind Turbine Installation</div>
          <div className={styles.desc3}>Solar Panel Maintenance</div>
          <div className={styles.desc3}>Energy Efficiency Audits</div>
        </div>
        <div className={styles.col1}>
          <div className={styles.head2}>Contact Info</div>
          <div className={styles.desc3}>
            4th Floor Sheel Mohar Plaza, Yudhister Marg, C Scheme, Jaipur,
            Rajasthan 302001
          </div>
          <div className={styles.desc3}>Phone: +918069859743</div>
          <div className={styles.desc3}>Email: support@raysresidential.in</div>
        </div>
        <div className={styles.col1}>
          <div className={styles.head2}>Newsletter</div>
          <div className={styles.desc3}>
            Subscribe to our newsletter to stay up-to-date with the latest news,
            tips, and trends in the industry
          </div>
          <div className={styles.newsInput}>
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="Your Email"
                className={styles.inp}
              />
              <button className={styles.emailBtn}>→</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.mnews}>
        <center>
          <div className={styles.head2}>Newsletter</div>
          <div className={styles.desc3}>
            Subscribe to our newsletter to stay up-to-date with the latest news,
            tips, and trends in the industry
          </div>
          <div className={styles.newsInput}>
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="Your Email"
                className={styles.inp}
              />
              <button className={styles.emailBtn}>→</button>
            </form>
          </div>
        </center>
      </div>

      <div className={styles.location}>Locations</div>

      <div className={styles.cities}>
        • Delhi NCR • <u>Solar in Delhi</u> • <u>Solar in Gurugram</u> • Gujarat
        • <u> Solar in Ahmedabad</u> • <u>Solar in Anand</u> •
        <u> Solar in Gandhinagar</u> <u>Solar in Surat</u> •
        <u> Solar in Vadodara</u> • Karnataka • <u> Solar in Bengaluru</u> •
        <u> Solar in Mysuru</u> • Madhya Pradesh • <u>Solar in Bhopal</u> •
        <u> Solar in Gwalior</u> •<u> Solar in Indore</u> •
        <u> Solar in Jabalpur</u> • Maharashtra • <u>Solar in Aurangabad</u> •
        <u> Solar in Jalgaon</u> •<u> Solar in Mumbai</u> •
        <u> Solar in Nagpur</u> •<u> Solar in Nashik</u> •<u> Solar in Pune</u>•
        <u> Solar in Thane</u> • Rajasthan • <u>Solar in Ajmer</u> •
        <u> Solar in Jaipur</u> • Telangana • <u>Solar in Hyderabad</u> •
        <u> Solar in Rangareddy</u> •<u> Solar in Sangareddy</u> •
        <u> Solar in Trimulgherry</u> •<u> Solar in Warangal</u> • Uttar Pradesh
        •<u> Solar in Gautam Buddha Nagar</u> •<u> Solar in Kanpur Nagar</u> •
        <u> Solar in Lucknow</u> •<u> Solar in Varanasi</u> •
      </div>
    </div>
  );
};

export default Footer;
