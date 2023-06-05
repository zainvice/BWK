import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";
import Header from "../components/Header";
import { useState } from "react";
const ContactUs = () => {
  const navigate = useNavigate();

  const onLOGINContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contactUs}>
      <Header />
      <div className={styles.formContainer}>
        <img
          src={"/bulb.svg"}
          className={styles.formImg}
        />
        <form className={styles.form}>
          <h1>Support</h1>
          <div className={styles.inputContainer}>
            <label className={styles.inputlabel}>
              Phone Number
              <input
                className={styles.input}
                type="text"
                placeholder="eg 0712345678"
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputlabel}>
              Email
              <input
                className={styles.input}
                type="text"
                placeholder="Your Email"
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputlabel}>
              Concern
              <textarea
                cols={10}
                rows={10}
                className={styles.input + " " + styles.inputArea}
                placeholder="State your complaints or concerns"
              />
            </label>
          </div>
          <p className={styles.complaintText}>
            Submit your complaints or concerns, we'll get to you shortly!
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.submit}>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
