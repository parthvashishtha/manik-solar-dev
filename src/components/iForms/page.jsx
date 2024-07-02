"use client";
import React, { useState } from "react";
import Image from "next/image";
import strategy from "../../../public/assets/strategy.png";
import styles from "@/components/iForms/page.module.css";
import CustomDropdown from "../selector/page";
import axios from "axios";

const data = [
  {
    id: 1,
    title: "Trusted, intelligent security solutions partner",
    para: "By using and developing world-leading technology and expertise, we strive to be a trusted, intelligent security solution partner and ensure the safety of your assets and people.",
  },
  {
    id: 2,
    title:"People development, client centricity and data as strategic drivers",
    para: "Protecting our world starts with protecting our people. Our commitment to this principle is rooted in the understanding that human capital is one of our most valuable assets.",
  },
  {
    id: 3,
    title: "Offering integrated security solutions",
    para: "We understand that security threats are complex. That is why we are committed to offering integrated security solutions that can address the different facets. But it is not just about providing security solutions that work. We are also committed to doing so in a sustainable way.",
  },
];

const Iform = (props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    pincode: "",
    serviceType: props.title,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceTypeChange = (selectedServiceType) => {
    setFormData((prevData) => ({
      ...prevData,
      serviceType: selectedServiceType,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    axios({
      method: "post",
      url: "/api/data/form",
      params: {},
      data: formData,
    })
      .then(function (response) {
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          address: "",
          pincode: "",
          serviceType: props.title,
          message: "",
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
    <div className={styles.strategy}>
      <div className={styles.form}>
        <h2 className={styles.formHeading}>ENQUIRE NOW</h2>
        <form className={styles.homeForm} onSubmit={handleSubmit}>
          <div className={styles.inputline}>
            <div className={styles.inputDiv}>
              <label htmlFor="name" className={styles.HomeFormTitle}>
                Name:{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className={styles.inputPlace}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="email" className={styles.HomeFormTitle}>
                Email:{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className={styles.inputPlace}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.inputline}>
            <div className={styles.inputDiv}>
              <label htmlFor="phoneNumber" className={styles.HomeFormTitle}>
                Phone:{" "}
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                className={styles.inputPlace}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="pincode" className={styles.HomeFormTitle}>
                Pincode:{" "}
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                className={styles.inputPlace}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.inputline}>
            <div className={styles.inputDiv}>
              <label className={styles.HomeFormTitle}>Type of Security: </label>
              <CustomDropdown
                className={styles.inputPlace}
                title={props.title}
                onServiceTypeChange={handleServiceTypeChange}
              />
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.HomeFormTitle}>Location:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                className={styles.inputPlace}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.inputline}>
            <div className={styles.inputDiv1}>
              <label className={styles.HomeFormTitle}>Message(if any):</label>
              <textarea
                type="text"
                id="message"
                name="message"
                value={formData.message}
                className={styles.inputPlace1}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className={styles.buttonForm}>
            SEND
          </button>
        </form>
      </div>
      <div className={styles.home}>
        <div className={styles.homeData}>
          <h1 className={styles.homeHeading}>Our Strategy</h1>
          <p className={styles.homePara}>
            We operate in a rapidly evolving global security landscape,
            determining us to stand guard and protect what really matters – the
            safety of people and property all over the world, the sustained
            development of our society, and the operational success of our
            clients.
          </p>
        </div>
        <Image
          className={styles.homeImg}
          src={strategy}
          width={1000}
          style={{ height: "auto" }}
          placeholder="blur"
        />
      </div>
      <div className={styles.cardDiv}>
        {data.map((item, index) => (
          <div key={index} className={styles.cardData}>
            <h3 className={styles.cardHead}>{item.title}</h3>
            <p className={styles.cardPara}>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iform;
