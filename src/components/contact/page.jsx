import React, { useContext } from "react";
import styles from "./page.module.css";
import { BooleanContext } from "@/app/context";

function ContactItem() {
    const { english } = useContext(BooleanContext);
  return (
    <div className={styles.container}>
    <div className={styles.box1}>
      <div className={styles.head1}>Contact Us! 📞ें</div>
      <div className={styles.desc1}>
        At Rays Rooftop, Our experts are always ready to assist you! If you
        have any questions or would like more information about our solar
        panel services, please contact us.
      </div>
    </div>

    <div className={styles.box2}>
      <div className={styles.col1}>
        <div className={styles.head2}>Get In Touch With Us</div>
        <div className={styles.head3}>
          "Send us your questions or comments (email address) and we will
          respond as soon as possible.
        </div>
        <form>
          <input
            type="text"
            className={styles.name}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            className={styles.name2}
            placeholder="Enter Your Email"
            required
          />
          <input
            type="number"
            className={styles.name2}
            placeholder="Enter Phone Number"
            required
          />
          <input
            type="text"
            className={styles.name2}
            placeholder="How did you find us?"
            required
          />
          <button className={styles.send}>SEND</button>
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
              <div className={styles.row312}>03 5432 1234</div>
            </div>
          </div>

          <div className={styles.col31}>
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
          </div>

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
              <div className={styles.row312}>info@marcc.com</div>
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
  )
}

export default ContactItem;