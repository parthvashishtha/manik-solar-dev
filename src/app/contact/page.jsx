"use client";
import React, { useState, useContext } from "react";
import styles from "./page.module.css";
import { BooleanContext } from "@/app/context";
import axios from "axios";

function Contact() {
  const { english } = useContext(BooleanContext);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    source: "",
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
      url: "/api/data/contact",
      params: {},
      data: formData,
    })
      .then(function (response) {
        setFormData({
          name: "",
          email: "",
          contact: "",
          source: "",
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
      <div className={styles.box1}>
        <div className={styles.head1}>
          {!english && `संपर्क करें`}
          {english && `Contact Us!`}
          📞ें
        </div>
        <div className={styles.desc1}>
          {!english &&
            `हमारे विशेषज्ञ आपकी सहायता के लिए हमेशा तैयार हैं! यदि आपके पास कोई प्रश्न है या आप हमारे सोलर पैनल सेवाओं के बारे में अधिक जानकारी चाहते हैं, तो कृपया हमसे संपर्क करें:`}
          {english &&
            `At Seon, Our experts are always ready to assist you! If you
          have any questions or would like more information about our solar
          panel services, please contact us.`}
        </div>
      </div>

      <div className={styles.box2}>
        <div className={styles.col1}>
          <div className={styles.head2}>
            {!english && `हमारे साथ जुड़ें`}
            {english && `Get In Touch With Us`}
          </div>
          <div className={styles.head3}>
            {!english &&
              `हमें अपने सवाल या टिप्पणियाँ भेजें (ईमेल पता डालें) और हम जल्द से जल्द जवाब देंगे।`}
            {english &&
              `Send us your questions or comments (email address) and we will
            respond as soon as possible.`}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className={styles.name}
              placeholder={english ? "Enter Your Name" : `अपना नाम दर्ज करें`}
              required
            />
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className={styles.name2}
              placeholder={
                english
                  ? "Enter Email Address(Optional)"
                  : `ईमेल पता (वैकल्पिक)`
              }
              required
            />
            <input
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              type="text"
              className={styles.name2}
              placeholder={english ? "Enter Phone No." : `फोन नंबर`}
              required
            />
            <input
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              type="text"
              className={styles.name2}
              placeholder={
                english ? "How did you find us?" : `आपने हमें कैसे खोजा?`
              }
              required
            />
            <button className={styles.send}>
              {!english && `भेजें`}
              {english && `SEND`}
            </button>
          </form>

          <div className={styles.row3}>
            <div className={styles.col31}>
              <div className={styles.col311}>
                <img
                  src="/assets/about/call.png"
                  alt="call"
                  className={styles.icall}
                />
              </div>
              <div className={styles.col312}>
                <div className={styles.row311}>PHONE</div>
                <div className={styles.row312}>+91 8069859743</div>
              </div>
            </div>

            {/* <div className={styles.col31}>
              <div className={styles.col311}>
                <img
                  src="/assets/about/fax.png"
                  alt="call"
                  className={styles.icall}
                />
              </div>
              <div className={styles.col312}>
                <div className={styles.row311}>FAX</div>
                <div className={styles.row312}>03 5432 1234</div>
              </div>
            </div> */}

            <div className={styles.col31}>
              <div className={styles.col311}>
                <img
                  src="/assets/about/mail.png"
                  alt="call"
                  className={styles.icall}
                />
              </div>
              <div className={styles.col312}>
                <div className={styles.row311}>EMAIL</div>
                <div className={styles.row312}>support@raysresidential.in</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43601947956!2d75.62574154791473!3d26.885421392921188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1718190023307!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
