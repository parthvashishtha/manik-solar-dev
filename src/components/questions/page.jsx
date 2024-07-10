"use client";
import React, { useContext, useState } from "react";
import styles from "./page.module.css";
import { BooleanContext } from "@/app/context";

function Questions() {
  const { english } = useContext(BooleanContext);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);
  const [open18, setOpen18] = useState(false);
  const handleClickOne = () => {
    setOpen1(!open1);
  };
  const handleClickTwo = () => {
    setOpen2(!open2);
  };
  const handleClickThree = () => {
    setOpen3(!open3);
  };
  const handleClickFour = () => {
    setOpen4(!open4);
  };
  const handleClickFive = () => {
    setOpen5(!open5);
  };
  const handleClickSix = () => {
    setOpen6(!open6);
  };
  const handleClickSeven = () => {
    setOpen7(!open7);
  };
  const handleClickEight = () => {
    setOpen8(!open8);
  };
  const handleClickNine = () => {
    setOpen9(!open9);
  };
  const handleClickTen = () => {
    setOpen10(!open10);
  };
  const handleClickEleven = () => {
    setOpen11(!open11);
  };
  const handleClickTwelve = () => {
    setOpen12(!open12);
  };
  const handleClickThirteen = () => {
    setOpen13(!open13);
  };
  const handleClickForteen = () => {
    setOpen14(!open14);
  };
  const handleClickFifteen = () => {
    setOpen15(!open15);
  };
  const handleClickSixteen = () => {
    setOpen16(!open16);
  };
  const handleClickSeventeen = () => {
    setOpen17(!open17);
  };
  const handleClickEighteen = () => {
    setOpen18(!open18);
  };
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <center>
          <div className={styles.qhead}>
            {!english && `स्थापना और आवश्यकताएँ`}
            {english && `Installation and Requirements`}
          </div>
        </center>
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickOne}>
            {!english &&
              `1. सोलर पैनल इंस्टॉलेशन का सामान्य समय (TAT) क्या है?`}
            {english &&
              `1. What is the typical installation time (TAT) for solar panels?`}
          </div>
          {!open1 && (
            <div onClick={handleClickOne} className={styles.col2}>
              +
            </div>
          )}
          {open1 && (
            <div onClick={handleClickOne} className={styles.col2}>
              -
            </div>
          )}
          {open1 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: सोलर पैनल इंस्टॉलेशन का सामान्य समय 3 महीने है।`}
              {english && `Answer: The typical installation time is 3 months.`}
            </div>
          )}
        </div>

        {/* ques 2 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickTwo}>
            {!english && `2. सोलर पैनल का सही आकार क्या है और कितनी जगह चाहिए?`}
            {english &&
              `2. What is the correct size of a solar panel, and how much space is required?`}
          </div>
          {!open2 && (
            <div onClick={handleClickTwo} className={styles.col2}>
              +
            </div>
          )}
          {open2 && (
            <div onClick={handleClickTwo} className={styles.col2}>
              -
            </div>
          )}
          {open2 && (
            <div className={styles.col3}>
              {!english && (
                <>
                  उत्तर: आवश्यक जगह आपके द्वारा चुने गए सोलर सिस्टम के आकार पर
                  निर्भर करती है। सामान्य दिशानिर्देश निम्नलिखित हैं: <br />
                  1 KW सिस्टम: लगभग 50 वर्ग फुट जगह चाहिए। <br />
                  2 KW सिस्टम: लगभग 100 वर्ग फुट जगह चाहिए। <br />3 KW सिस्टम:
                  लगभग 150 वर्ग फुट जगह चाहिए।
                </>
              )}
              {english && (
                <>
                  Answer: The space required depends on the size of the solar
                  system you choose. Here are the general guidelines:
                  <br />
                  1 KW System: Requires approximately 50 square feet of space.
                  <br />
                  2 KW System: Requires approximately 100 square feet of space.
                  <br />3 KW System: Requires approximately 150 square feet of
                  space.
                </>
              )}
            </div>
          )}
        </div>

        <center>
          <div className={styles.qhead}>
            {!english && `वित्त और भुगतान`}
            {english && `Finance and Payment`}
          </div>
        </center>

        {/* ques 3 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickThree}>
            {!english && `1. सब्सिडी कब तक आती है?`}
            {english && `1. When will the subsidy be credited?`}
          </div>
          {!open3 && (
            <div onClick={handleClickThree} className={styles.col2}>
              +
            </div>
          )}
          {open3 && (
            <div onClick={handleClickThree} className={styles.col2}>
              -
            </div>
          )}
          {open3 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: कमीशनिंग और स्वीकृति के 3 महीने बाद सब्सिडी प्राप्त होगी।`}
              {english &&
                `Answer: The subsidy will be credited within 3 months after commissioning and approval.`}
            </div>
          )}
        </div>

        {/* ques 4 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickFour}>
            {!english && `2. फाइल और सब्सिडी कब तक स्वीकृत हो जाएगी?`}
            {english &&
              `2. How long does it take for the file and subsidy to be approved?`}
          </div>
          {!open4 && (
            <div onClick={handleClickFour} className={styles.col2}>
              +
            </div>
          )}
          {open4 && (
            <div onClick={handleClickFour} className={styles.col2}>
              -
            </div>
          )}
          {open4 && (
            <div className={styles.col3}>
              {!english && `उत्तर: स्वीकृति में सामान्यत: 2-3 दिन लगते हैं।`}
              {english && `Answer: Approval typically takes 2-3 days.`}
            </div>
          )}
        </div>

        {/* ques 5 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickFive}>
            {!english &&
              `3. सब्सिडी स्वीकृत हुई है या नहीं, कैसे पता कर सकते हैं?`}
            {english && `3. How can I check if the subsidy has been approved?`}
          </div>
          {!open5 && (
            <div onClick={handleClickFive} className={styles.col2}>
              +
            </div>
          )}
          {open5 && (
            <div onClick={handleClickFive} className={styles.col2}>
              -
            </div>
          )}
          {open5 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: आप हमारी सहायता टीम से संपर्क कर सकते हैं। हम सरकारी पोर्टल पर आपके लिए स्थिति जांचेंगे।`}
              {english &&
                `Answer: You can reach out to our support team, and we will check the status on the Government portal for you.`}
            </div>
          )}
        </div>

        {/* ques 6 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickSix}>
            {!english && `4. लोन कैसे और कितना मिलता है?`}
            {english && `4. How can I get a loan, and how much can I get?`}
          </div>
          {!open6 && (
            <div onClick={handleClickSix} className={styles.col2}>
              +
            </div>
          )}
          {open6 && (
            <div onClick={handleClickSix} className={styles.col2}>
              -
            </div>
          )}
          {open6 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: हमारे बैंक साझेदार आपको लोन प्रदान करेंगे। अधिक जानकारी के लिए कृपया हमारी टीम से संपर्क करें।`}
              {english &&
                `Answer: Our bank partners provide loan options. For more information, please contact our team.`}
            </div>
          )}
        </div>

        {/* ques 7 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickSeven}>
            {!english &&
              `5. क्या मुझे भुगतान सब्सिडी घटाकर करना है या पूरा करना है?`}
            {english &&
              `5. How should I make the payment—after subtracting the subsidy or the full amount?`}
          </div>
          {!open7 && (
            <div onClick={handleClickSeven} className={styles.col2}>
              +
            </div>
          )}
          {open7 && (
            <div onClick={handleClickSeven} className={styles.col2}>
              -
            </div>
          )}
          {open7 && (
            <div className={styles.col3}>
              {!english && (
                <>
                  उत्तर: सीधा भुगतान करने के लिए, आपको हमारे टाइमलाइन के अनुसार
                  पूरा भुगतान करना होगा: <br />
                  1. बुकिंग राशि: ₹2100
                  <br />
                  2. 80% स्थापना से पहले, अनुमोदन और कमीशनिंग के बाद
                  <br />
                  3. 20% प्रोजेक्ट के पूरा होने के बाद
                  <br />
                  वित्तीय विकल्प के लिए, आपको शेष राशि पर ईएमआई का भुगतान करना
                  होगा।
                </>
              )}
              {english && (
                <>
                  Answer: For direct payment, you must pay the full amount
                  according to our timeline:
                  <br />
                  1. Rs. 2100 as a booking amount.
                  <br />
                  2. 80% before installation, after approvals and commissioning.
                  <br />
                  3. 20% after the completion of the project.
                  <br />
                  For the financing option, you must pay the EMI on the
                  remaining amount.
                </>
              )}
            </div>
          )}
        </div>

        {/* ques 8 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickEight}>
            {!english && `6. बुकिंग शुल्क क्या है?`}
            {english && `6. What is the booking fee?`}
          </div>
          {!open8 && (
            <div onClick={handleClickEight} className={styles.col2}>
              +
            </div>
          )}
          {open8 && (
            <div onClick={handleClickEight} className={styles.col2}>
              -
            </div>
          )}
          {open8 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: बुकिंग शुल्क ₹2100 है। बुकिंग पर, हम यह राशि और सभी आवश्यक दस्तावेज एकत्र करेंगे और कमीशनिंग और फाइलिंग प्रक्रिया शुरू करेंगे।`}
              {english &&
                `Answer: The booking fee is Rs. 2100. Upon booking, we will collect this amount along with all required documents to start the commissioning and filing process.`}
            </div>
          )}
        </div>

        {/* ques 9 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickNine}>
            {!english && `7. क्या कोई अतिरिक्त शुल्क है?`}
            {english && `7. Are there any additional charges?`}
          </div>
          {!open9 && (
            <div onClick={handleClickNine} className={styles.col2}>
              +
            </div>
          )}
          {open9 && (
            <div onClick={handleClickNine} className={styles.col2}>
              -
            </div>
          )}
          {open9 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: कोई भी अतिरिक्त शुल्क सरकारी कार्यालय द्वारा लगाए गए शुल्क के समान होगा (जैसे लोड क्षमता बढ़ाना, कागजी कार्रवाई और फाइलिंग)।`}
              {english &&
                `Answer: Any additional charges will be the same as those charged by the government office (e.g., load capacity increase, paperwork, and filing).`}
            </div>
          )}
        </div>

        {/* ques 10 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickTen}>
            {!english && `8. दर सूची कहां मिल सकती है?`}
            {english && `8. Where can I find the rate list?`}
          </div>
          {!open10 && (
            <div onClick={handleClickTen} className={styles.col2}>
              +
            </div>
          )}
          {open10 && (
            <div onClick={handleClickTen} className={styles.col2}>
              -
            </div>
          )}
          {open10 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: विस्तृत मूल्य निर्धारण के लिए कृपया हमारी टीम से संपर्क करें।`}
              {english &&
                `Answer: For detailed pricing, please contact our team.`}
            </div>
          )}
        </div>

        <center>
          <div className={styles.qhead}>
            {!english && `उत्पाद`}
            {english && `Product`}
          </div>
        </center>

        {/* ques 11 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickEleven}>
            {!english && `1. बिजली जाने पर क्या यह सिस्टम काम करता है?`}
            {english && `1. Does the system work during power outages?`}
          </div>
          {!open11 && (
            <div onClick={handleClickEleven} className={styles.col2}>
              +
            </div>
          )}
          {open11 && (
            <div onClick={handleClickEleven} className={styles.col2}>
              -
            </div>
          )}
          {open11 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: पीएम सूर्यघर योजना के तहत स्थापित रूफटॉप सिस्टम ऑन-ग्रिड सिस्टम के रूप में डिजाइन किए गए हैं, इसलिए बिजली जाने पर ये काम नहीं करते। हालाँकि, यदि आप सिस्टम के साथ एक अतिरिक्त बैटरी जोड़ते हैं, तो आप बिजली तक पहुंच सकते हैं।`}
              {english &&
                `Answer: The rooftop systems installed under the PM Suryaghar Scheme are designed to be on-grid, which means they do not operate during power outages. However, you can access electricity during outages if you choose to add an additional battery to the system.`}
            </div>
          )}
        </div>

        {/* ques 12 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickTwelve}>
            {!english && `2. क्या सिस्टम में बैटरी शामिल है?`}
            {english && `2. Does the system include a battery?`}
          </div>
          {!open12 && (
            <div onClick={handleClickTwelve} className={styles.col2}>
              +
            </div>
          )}
          {open12 && (
            <div onClick={handleClickTwelve} className={styles.col2}>
              -
            </div>
          )}
          {open12 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: मानक रूफटॉप सिस्टम में बैटरी शामिल नहीं है। बैटरी जोड़ना संभव है, लेकिन उच्च लागत के कारण हम इसे सामान्यत: अनुशंसा नहीं करते हैं।`}
              {english &&
                `Answer: The standard rooftop system does not come with a battery. While adding a battery is possible, it is generally not recommended due to the high cost.`}
            </div>
          )}
        </div>

        {/* ques 13 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickThirteen}>
            {!english && `3. सिस्टम की वारंटी क्या है?`}
            {english && `3. What is the warranty for the system?`}
          </div>
          {!open13 && (
            <div onClick={handleClickThirteen} className={styles.col2}>
              +
            </div>
          )}
          {open13 && (
            <div onClick={handleClickThirteen} className={styles.col2}>
              -
            </div>
          )}
          {open13 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: सिस्टम के साथ 25 साल की वारंटी आती है। वारंटी और सेवाओं पर अधिक विस्तृत जानकारी के लिए कृपया हमारी टीम से संपर्क करें।`}
              {english &&
                `Answer: The system comes with a 25-year warranty. For more detailed information on warranties and services, please contact our team.`}
            </div>
          )}
        </div>

        <center>
          <div className={styles.qhead}>
            {!english && `सोलर पैनल और सिस्टम`}
            {english && `Solar Panel and System`}
          </div>
        </center>

        {/* ques 14 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickForteen}>
            {!english && `1. सोलर पैनल इंस्टॉलेशन में कितना समय लगता है?`}
            {english && `1. How long does solar panel installation take?`}
          </div>
          {!open14 && (
            <div onClick={handleClickForteen} className={styles.col2}>
              +
            </div>
          )}
          {open14 && (
            <div onClick={handleClickForteen} className={styles.col2}>
              -
            </div>
          )}
          {open14 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: कमीशनिंग और अनुमोदन के बाद सोलर पैनल इंस्टॉलेशन में सामान्यत: 2-3 दिन लगते हैं।`}
              {english &&
                `Answer: Solar panel installation typically takes 2-3 days to complete after all necessary commissioning and approvals are obtained.`}
            </div>
          )}
        </div>

        {/* ques 15 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickFifteen}>
            {!english && `2. सोलर पैनल की देखभाल और रखरखाव कैसे करें?`}
            {english &&
              `2. What precautions and maintenance are required for solar panels?`}
          </div>
          {!open15 && (
            <div onClick={handleClickFifteen} className={styles.col2}>
              +
            </div>
          )}
          {open15 && (
            <div onClick={handleClickFifteen} className={styles.col2}>
              -
            </div>
          )}
          {open15 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: सोलर पैनल को बहुत कम रखरखाव की आवश्यकता होती है। मुख्य कार्य हर कुछ महीनों में पैनलों को साफ करना होता है ताकि जमा धूल हट सके। पहले पांच साल की देखभाल हमारी जिम्मेदारी है।`}
              {english &&
                `Answer: Solar panels require minimal maintenance. The main task is to clean the panels every few months to remove accumulated dust. For the first five years, maintenance is covered by us.`}
            </div>
          )}
        </div>

        {/* ques 16 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickSixteen}>
            {!english && `3. सोलर सिस्टम का जीवनकाल कितना होता है?`}
            {english && `3. What is the lifespan of a solar panel system?`}
          </div>
          {!open16 && (
            <div onClick={handleClickSixteen} className={styles.col2}>
              +
            </div>
          )}
          {open16 && (
            <div onClick={handleClickSixteen} className={styles.col2}>
              -
            </div>
          )}
          {open16 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: सोलर सिस्टम का जीवनकाल लंबा होता है। ये आजीवन चल सकते हैं, हालाँकि 20 साल बाद इनकी दक्षता लगभग 80% हो जाती है। यह एक रेफ्रिजरेटर की तरह है; यह जीवन भर चल सकता है, लेकिन प्रदर्शन धीरे-धीरे कम होने लगता है।`}
              {english &&
                `Answer: Solar panel systems have a long lifespan. They can last a lifetime, though their efficiency may decrease to about 80% after 20 years. It's similar to a refrigerator; it can last a lifetime, but performance may decline over time.`}
            </div>
          )}
        </div>

        {/* ques 17 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickSeventeen}>
            {!english && `4. क्या सोलर पैनल बिजली का बिल कम कर सकता है?`}
            {english && `4. Can solar panels reduce my electricity bill?`}
          </div>
          {!open17 && (
            <div onClick={handleClickSeventeen} className={styles.col2}>
              +
            </div>
          )}
          {open17 && (
            <div onClick={handleClickSeventeen} className={styles.col2}>
              -
            </div>
          )}
          {open17 && (
            <div className={styles.col3}>
              {!english &&
                `उत्तर: हाँ, सोलर पैनल आपके बिजली बिल को काफी कम कर सकते हैं, इसे शून्य तक ला सकते हैं।`}
              {english &&
                `Answer: Yes, solar panels can significantly reduce your electricity bill, potentially bringing it down to zero.`}
            </div>
          )}
        </div>

        {/* ques 18 */}
        <div className={styles.row}>
          <div className={styles.col1} onClick={handleClickEighteen}>
            {!english && `5. सोलर पैनल कितनी बिजली उत्पन्न करते हैं?`}
            {english && `5. How much electricity do solar panels generate?`}
          </div>
          {!open18 && (
            <div onClick={handleClickEighteen} className={styles.col2}>
              +
            </div>
          )}
          {open18 && (
            <div onClick={handleClickEighteen} className={styles.col2}>
              -
            </div>
          )}
          {open18 && (
            <div className={styles.col3}>
              {!english && (
                <>
                  उत्तर: उत्पन्न बिजली की मात्रा सोलर सिस्टम के आकार पर निर्भर
                  करती है। सामान्यत: 1 किलोवाट सिस्टम एक महीने में लगभग 120
                  यूनिट बिजली उत्पन्न करता है, मानक चमकीले धूप वाले दिनों को
                  ध्यान में रखते हुए।
                </>
              )}
              {english &&
                `Answer: The amount of electricity generated depends on the size of the solar system. Typically, a 1 KW system generates around 120 units of electricity per month, assuming normal bright sunny days.`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questions;
