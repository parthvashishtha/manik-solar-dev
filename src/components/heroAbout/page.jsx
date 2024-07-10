"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import { BooleanContext } from "@/app/context";

function HeroAbout() {
  const { english } = useContext(BooleanContext);
  return (
    <div className={styles.container}>
      <img src="/assets/about/bg1.png" className={styles.bg1} alt="img" />
      <img src="/assets/about/mbg1.png" className={styles.mbg1} alt="img" />
      <div className={styles.head1}>
        <img src="./assets/home/lady.png" alt="img" className={styles.lady} />
        {!english && "स्योन में आपका स्वागत है"}
        {english && " Welcome to Seon!"}
      </div>
      <div className={styles.head2}>
        {!english &&
          `हम एक अग्रणी सोलर पैनल कंपनी हैं जो विशेष रूप से ग्रामीण क्षेत्रों में ऊर्जा समाधान प्रदान करने के लिए समर्पित है। हमारा मिशन है कि हम स्वच्छ, सस्ती और सुलभ ऊर्जा को गांवों और दूरदराज के इलाकों तक`}
        {english &&
          `We are a leading solar panel company dedicated to providing energy
        solutions specifically in rural areas. Our mission is to bring clean,
        affordable, and accessible energy to villages and remote areas.`}
      </div>

      <div className={styles.heading1}>
        {!english && "हमारा उद्देश्य"}
        {english && "Our Vision"}
      </div>

      <div className={styles.desc1}>
        {!english &&
          `ग्रामीण इलाकों में बिजली की कमी एक बड़ी समस्या है। स्योन का उद्देश्य है कि हर घर को ऊर्जा की सुविधा मिले और वे भी बिजली के फायदे उठा सकें। हम सौर ऊर्जा के माध्यम से यह सुनिश्चित करते हैं कि गांवों में रहने वाले लोगों को निरंतर और विश्वसनीय बिजली मिले`}
        {english &&
          `Lack of electricity is a big problem in rural areas. The objective of
        RAISE is that every household should have access to energy and they too
        can avail the benefits of electricity. Through solar energy we ensure
        that people living in villages get continuous and reliable electricity.
        People living in villages should get continuous and reliable
        electricity, so that their daily life activities can go on without any
        interruption.`}
      </div>

      <video
        controls
        src="/assets/home/video.mp4"
        className={styles.vid1}
        poster="/assets/home/thmb.png"
      />

      <div className={styles.heading1}>
        {!english && "हमारे आंकड़े"}
        {english && `Milestones`}
      </div>

      <div className={styles.row1}>
        <div className={styles.col1}>
          {!english &&
            "स्योन के साथ, हम लगातार ऊर्जा के क्षेत्र में नई ऊंचाइयों को छू रहे हैं और ग्रामीण क्षेत्रों को ऊर्जा आत्मनिर्भर बनाने में योगदान दे रहे हैं।"}
          {english &&
            `With RAISE, we are continuously scaling new heights in the energy
          sector and contributing to making rural areas energy self-reliant.`}
        </div>
        <div className={styles.col2}>
          <div className={styles.row21}>500+</div>
          <div className={styles.row22}>
            {!english && "गांवों में स्थापना"}
            {english && `Establishment in villages`}
          </div>

          <div className={styles.row21}>50+</div>
          <div className={styles.row22}>
            {!english && "प्रशिक्षण और जागरूकता"}
            {english && `Training and Awareness`}
          </div>
        </div>

        <div className={styles.col2}>
          <div className={styles.row21}>1,000+</div>
          <div className={styles.row22}>
            {!english && "किसानों की सहायता"}
            {english && `Assistance to farmers`}
          </div>
          <div className={styles.row21}>50+</div>
          <div className={styles.row22}>
            {!english && "सरकारी सब्सिडी का उपयोग"}
            {english && `Use of government subsidies`}
          </div>
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.col21}>
          <div className={styles.heading2}>
            {!english && "हमारा मिशन"}
            {english && `Our Mission`}
          </div>
          <br />
          {!english &&
            "स्योन का मिशन है कि हम ग्रामीण भारत को स्वच्छ, सस्ती और सुलभ सौर ऊर्जा प्रदान करके ऊर्जा आत्मनिर्भर बनाएं। हमारा उद्देश्य न केवल ऊर्जा की समस्याओं को हल करना है, बल्कि पर्यावरण को संरक्षित रखना और सामाजिक विकास में योगदान देना भी है।"}
          {english &&
            `RAISE's mission is to make rural India energy self-reliant by
          providing clean, affordable and accessible solar energy. Our objective
          is not only to solve energy problems, but also to preserve the
          environment and contribute to social development.`}
        </div>
        <div className={styles.col22}>
          <img src="/assets/about/bg3.png" alt="bg2" className={styles.bg2} />
        </div>
      </div>

      <div className={styles.heading1}>
        {!english && "हमारी सेवाएं"}
        {english && `Quality Work`}
      </div>

      <div className={styles.row3}>
        <div className={styles.col31}>
          <img src="/assets/about/bg4.png" alt="bg2" className={styles.bg4} />
          <div className={styles.qhead1}>
            {!english && "उन्नत सोलर पैनल सिस्टम"}
            {english && `Advanced solar panel`}
          </div>
          <div className={styles.qdesc1}>
            {!english &&
              "स्योन उच्च गुणवत्ता वाले सोलर पैनल प्रदान करता है जो ग्रामीण क्षेत्रों के लिए विशेष रूप से डिजाइन किए गए हैं। 🌞🏆"}
            {english &&
              `Rays provides high-quality solar panels specially designed for rural
            areas. 🌞🏆`}
          </div>
        </div>
        <div className={styles.col31}>
          <img src="/assets/about/bg4.png" alt="bg2" className={styles.bg4} />
          <div className={styles.qhead1}>
            {!english && "इंस्टॉलेशन और रखरखाव"}
            {english && ` Installation and Maintenance`}
          </div>
          <div className={styles.qdesc1}>
            {!english &&
              "हमारी विशेषज्ञ टीम गांवों में सोलर पैनल की त्वरित और कुशल स्थापना करती है और उनकी नियमित जांच व रखरखाव भी सुनिश्चित करती है। 🛠️🔧"}
            {english &&
              `Our expert team ensures swift and skilled installation of solar
            panels in villages 🛠️🔧`}
          </div>
        </div>
        <div className={styles.col31}>
          <img src="/assets/about/bg4.png" alt="bg2" className={styles.bg4} />
          <div className={styles.qhead1}>
            {!english && "परामर्श और सहायता"}
            {english && `Consultation and Support`}
          </div>
          <div className={styles.qdesc1}>
            {!english &&
              "हम गांवों के निवासियों को सौर ऊर्जा के बारे में जागरूक करते हैं और उनकी ऊर्जा जरूरतों के लिए सबसे उपयुक्त समाधान प्रदान करते हैं।📞🕒"}
            {english &&
              `We raise awareness among rural residents about solar energy 📞🕒`}
          </div>
        </div>
      </div>

      <div className={styles.row4}>
        <div className={styles.col41}>
          <div className={styles.ihead1}>
            {!english &&
              `"हर गांव को सौर ऊर्जा से रोशन करें, हर दिन नई किरणों के साथ!" 🌞🏡`}
            {english &&
              `Illuminate every village with solar power, every day with new
            rays! 🌞🏡`}
          </div>
          <div className={styles.idesc}>
            {!english &&
              `स्योन का लक्ष्य है कि हम अपने प्रयासों के माध्यम से ग्रामीण भारत को ऊर्जा आत्मनिर्भर बनाएं। हमारी प्रतिबद्धता है कि हम अपने ग्राहकों को सर्वोत्तम सेवा और उत्पाद प्रदान करें, जिससे उनकी ऊर्जा जरूरतें पूरी हो सकें और वे भी आधुनिक जीवन के सभी लाभ उठा सकें।`}
            {english &&
              `At Ray, we are driven by the vision of transforming rural India into
            an energy-independent nation through our unwavering commitment to
            providing exceptional service and products. We strive to empower our
            customers with the means to meet their energy needs fully, enabling
            them to embrace the benefits of modern life.`}
          </div>
          <div className={styles.idesc}>
            {!english &&
              "स्योन के साथ, हम एक उज्जवल और स्थायी भविष्य की ओर कदम बढ़ा रहे हैं, जहां हर गांव ऊर्जा आत्मनिर्भर हो और स्वच्छ ऊर्जा का लाभ उठा सके। 🌟🌿"}
            {english &&
              `With Ray, we embark on a journey towards a brighter and sustainable
            future, where every village stands self-sufficient in energy,
            harnessing the power of clean energy sources.`}
          </div>
        </div>
        <div className={styles.col41}>
          <img
            src={english ? `/assets/about/bg5.png` : `/assets/about/hbg5.png`}
            alt="bg5"
            className={styles.bg5}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
