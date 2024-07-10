import React, { useState, useContext } from "react";
import styles from "./page.module.css";
import { BooleanContext } from "@/app/context";
import axios from "axios";

function Schedule() {
  const { english } = useContext(BooleanContext);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    pin: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    contact: "",
    pin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for contact and pin
    if (name === "contact") {
      if (!/^\d{10,13}$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          contact: english
            ? "Please enter a valid phone number."
            : "कृपया एक वैध फोन नंबर दर्ज करें।",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          contact: "",
        }));
      }
    }

    if (name === "pin") {
      if (!/^\d{6}$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: english
            ? "Pincode must be 6 digits"
            : "पिनकोड 6 अंकों का होना चाहिए",
        }));
        console.log(errors);
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: "",
        }));
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submitting
    if (!/^\d{10,13}$/.test(formData.contact)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contact: english
          ? "Please enter a valid phone number."
          : "कृपया एक वैध फोन नंबर दर्ज करें।",
      }));
      return;
    }

    if (!/^\d{6}$/.test(formData.pin)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pin: english
          ? "Pincode must be 6 digits"
          : "पिनकोड 6 अंकों का होना चाहिए",
      }));
      return;
    }

    setLoading(true);
    axios({
      method: "post",
      url: "/api/data/form",
      data: formData,
    })
      .then(function (response) {
        setFormData({
          name: "",
          contact: "",
          email: "",
          pin: "",
          city: "",
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
      <div className={styles.head}>
        {!english && `सोलर के बारे में अधिक जानने के लिए`}
        {english && `Schedule a free consultation with`}
        <br /> {!english && `संपर्क करें!`}
        {english && `us today!`} 📞✨
      </div>

      <div className={styles.box}>
        <div className={styles.col1}>
          <form onSubmit={handleSubmit}>
            <div className={styles.label}>
              {!english && `नाम`}
              {english && `Name`}
            </div>
            <input
              className={styles.name}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={english ? "Enter Your Name" : `अपना नाम दर्ज करें`}
              required
            />
            <div className={styles.label}>
              {!english && `फोन नंबर`}
              {english && `Phone Number`}
            </div>
            <input
              className={styles.name}
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder={english ? "Enter Phone No." : `फोन नंबर`}
              required
            />
            {errors.contact && (
              <div className={styles.errorMessage}>
                {errors.contact}
              </div>
            )}
            <div className={styles.label}>
              {!english && `ईमेल पता (वैकल्पिक)`}
              {english && `Email Address (Optional)`}
            </div>
            <input
              className={styles.name}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={english ? "Enter Email Address" : `ईमेल पता`}
              required
            />
            <div className={styles.pincity}>
              <div className={styles.pin}>
                <div className={styles.label}>
                  {!english && `पिनकोड`}
                  {english && `Pincode`}
                </div>
                <input
                  className={styles.ipin}
                  type="text"
                  id="pin"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  placeholder={english ? "Enter Pincode" : `पिनकोड`}
                  required
                />
                {errors.pin && (
                  <div className={styles.errorMessage}>
                    {errors.pin}
                  </div>
                )}
              </div>
              <div className={styles.city}>
                <div className={styles.label}>
                  {!english && `शहर`}
                  {english && `City`}
                </div>
                <input
                  className={styles.ipin}
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder={english ? "Enter Your City" : `शहर`}
                  required
                />
              </div>
            </div>
            <center>
              <button type="submit" className={styles.submit}>
                {!english && `शुरू करें`}
                {english && `SEND`}
              </button>
            </center>
          </form>
        </div>

        <div className={styles.col2}>
          <img
            src={english ? `/assets/home/solar.png` : `/assets/home/hsolar.png`}
            alt="solar"
            className={styles.solar}
          />
          <img
            src={
              english ? `/assets/home/msolar.png` : `/assets/home/mhsolar.png`
            }
            alt="solar"
            className={styles.msolar}
          />
        </div>
      </div>

      <img
        src="/assets/home/vector2.png"
        alt="solar"
        className={styles.vector2}
      />

      <div className={styles.head}>
        {!english && `हमारी विशेषताएं`}
        {english && `Our Features`}☀️🌟
      </div>

      <video
        controls
        src="/assets/home/video.mp4"
        className={styles.feature}
        poster="/assets/home/thmb.png"
      />

      <div className={styles.section2}>
        <div className={styles.card}>
          <img src="/assets/home/f1.png" alt="solar" className={styles.f1} />
          <div className={styles.cardHead}>
            {!english && `ग्रामीण क्षेत्रों पर विशेष ध्यान`}
            {english && `Long-term Durability`}
          </div>
          <div className={styles.cardDesc}>
            {!english &&
              `स्योन का मुख्य फोकस ग्रामीण इलाकों में सौर ऊर्जा का प्रसार करना है, जिससे उन क्षेत्रों को बिजली की सुविधा सस्ती एवं सुचारु रूप से मिल सके। 🌾🏡`}
            {english &&
              `Extremely durable and suitable for long-term use. This ensures that
            you receive reliable energy for years to come.🌞🔋`}
          </div>
        </div>

        <div className={styles.card}>
          <img src="/assets/home/f2.png" alt="solar" className={styles.f1} />
          <div className={styles.cardHead}>
            {!english && `स्मार्ट मॉनिटरिंग सिस्टम`}
            {english && `Smart Monitoring System`}
          </div>
          <div className={styles.cardDesc}>
            {!english &&
              `सोलर पैनल सिस्टम में उन्नत स्मार्ट मॉनिटरिंग तकनीक शामिल है, जो आपको आपके ऊर्जा उत्पादन और खपत की वास्तविक समय में निगरानी करने की सुविधा देती है। 📊🔧`}
            {english &&
              `Allowing you to monitor your energy production and consumption in
            real-time. 📊🔧`}
          </div>
        </div>

        <div className={styles.card}>
          <img src="/assets/home/f3.png" alt="solar" className={styles.f1} />
          <div className={styles.cardHead}>
            {!english && `ग्रामीण-विशिष्ट समाधान`}
            {english && `Designed for Rural Areas`}
          </div>
          <div className={styles.cardDesc}>
            {!english &&
              `सोलर पैनल समाधान विशेष रूप से ग्रामीण क्षेत्रों की आवश्यकताओं को ध्यान में रखते हुए डिज़ाइन किए गए हैं, ताकि वहां के निवासियों को बेहतर और विश्वसनीय ऊर्जा स्रोत मिल सके।`}
            {english &&
              `Providing better and more reliable energy sources for the residents
            there.`}
            🌾🏡
          </div>
        </div>

        <div className={styles.card}>
          <img src="/assets/home/f4.png" alt="solar" className={styles.f1} />
          <div className={styles.cardHead}>
            {!english && `जागरूकता और प्रशिक्षण`}
            {english && `Training for Solar Energy`}
          </div>
          <div className={styles.cardDesc}>
            {!english &&
              `स्थानीय समुदायों में सौर ऊर्जा के लाभों के बारे में जागरूकता फैलाते हैं और उन्हें उपयोग और रखरखाव के लिए प्रशिक्षण भी प्रदान करते हैं।`}
            {english &&
              `Benefits of solar energy in local communities and provide training
            for their use and maintenance. `}
            👥✨
          </div>
        </div>
      </div>

      <img
        src="/assets/home/vector3.png"
        alt="solar"
        className={styles.vector3}
      />

      <div className={styles.head}>
        {!english && `हमारे साथ जुड़ने के फायद`}
        {english && `Benefits with us!`}
        👥✨
      </div>

      <img
        src="/assets/home/benefits.png"
        alt="solar"
        className={styles.benefits}
      />
      <img
        src={
          english ? `/assets/home/mbenefits.png` : `/assets/home/mhbenefits.png`
        }
        alt="solar"
        className={styles.mbenefits}
      />

      <div className={styles.benefits2}>
        <div className={styles.ben1}>
          <div className={styles.bhead}>
            {!english && `बड़ी बचत`}
            {english && `Long-term Savings`}
          </div>
          <div className={styles.bdesc}>
            {!english &&
              `सोलर पैनल से आपके बिजली बिल में उल्लेखनीय कमी आएगी, जिससे आप हर महीने पैसे बचा सकते हैं।`}
            {english &&
              `Invest in solar energy today and enjoy long-term savings! By choosing
            Seon Solar Panel Company`}
            💸📉
          </div>
        </div>
        <div className={styles.ben1}>
          <div className={styles.bhead}>
            {!english && `दीर्घकालिक बचत`}
            {english && `Discounted Installation`}
          </div>
          <div className={styles.bdesc}>
            {!english &&
              `सोलर पैनल से आपके बिजली बिल में उल्लेखनीय कमी आएगी, जिससे आप हर महीने पैसे बचा सकते हैं।`}
            {english &&
              `Enjoy a special discount on the installation of your solar panel
            system.`}
            💸📉
          </div>
        </div>
        <div className={styles.ben1}>
          <div className={styles.bhead}>
            {!english && `मुफ़्त सलाह`}
            {english && `Free Consultation`}
          </div>
          <div className={styles.bdesc}>
            {!english &&
              `हमारे विशेषज्ञों से बिना किसी लागत के सलाह प्राप्त करें और अपनी ऊर्जा आवश्यकताओं के अनुसार सही समाधान पाएं। `}
            {english &&
              `Schedule a free consultation with us today to explore how solar energy can benefit you!📞✨`}
            📞✨
          </div>
        </div>
        <div className={styles.ben1}>
          <div className={styles.bhead}>
            {!english && `24/7 सहायता`}
            {english && `24/7 Support`}
          </div>
          <div className={styles.bdesc}>
            {!english &&
              `हमारी अनुभवी सहायता टीम हमेशा आपकी सेवा में तैयार है, जिससे आप कभी भी समस्या का समाधान पा सकते हैं।`}
            {english &&
              `Benefit from our round-the-clock support to ensure your solar system
            operates smoothly at all times.`}
            📞🕒
          </div>
        </div>
      </div>

      <div className={styles.head}>
        {!english &&
          `घर में सोलर पैनल इंस्टॉल करें और पैसा बचाएं, सौर ऊर्जा सही मायने में मेहनत का फल है।`}
        {english &&
          `“**Install solar panels at home and save money, no electricity theft,
        solar energy is the true fruit of labour`}
        🌞🔋ै”
      </div>

      <img
        src="/assets/home/labour.png"
        alt="solar"
        className={styles.feature}
      />

      <img
        src="/assets/home/rest.png"
        alt="solar-rest"
        className={styles.vector4}
      />

      <div className={styles.head} id="portfolio">
        {!english && `हमारे प्रदर्शन का संग्रह`}
        {english && `Our Porfolio`}
      </div>

      <div className={styles.pdesc}>
        {!english &&
          `स्योन में, हम विभिन्न क्षेत्रों में सोलर पैनल इंस्टॉलेशन के सफल प्रोजेक्ट्स की एक विस्तृत श्रृंखला पर गर्व करते हैं। हमारे पोर्टफोलियो में शामिल हैं`}
        {english &&
          `At Seon, we are proud of a wide range of successful solar panel
        installation projects in various sectors. Our portfolio includes:`}
      </div>

      <img
        src="/assets/home/portfolio.png"
        alt="solar"
        className={styles.portfolio}
      />
    </div>
  );
}

export default Schedule;
