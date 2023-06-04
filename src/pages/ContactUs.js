import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";
import Header from "../components/Header";
const ContactUs = () => {
  const navigate = useNavigate();

  const onLOGINContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <div className={styles.contactUs}>
      <Header />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.loginForm}>
        <div className={styles.loginFormChild} />
        <div className={styles.loginFormItem} />
        <div className={styles.loginFormInner} />
        <div className={styles.phoneNumber}>Phone Number</div>
        <div className={styles.concern}>Concern</div>
        <div className={styles.eg0712345678}>{`e.g 0712345678 `}</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.email}>Email</div>
        <div className={styles.yourEmail}>{`Your Email `}</div>
        <div className={styles.stateYourComplaints}>
          State your complaints or concerns
        </div>
        <div className={styles.submitYourComplaint}>
          Submit your complaint or concern, we’ll get to you shortly
        </div>
        <div className={styles.login2} onClick={onLOGINContainerClick}>
          <div className={styles.loginItem} />
          <b className={styles.submit}>SUBMIT</b>
        </div>
        <b className={styles.support} onClick={onSupportTextClick}>
          Support
        </b>
      </div>
    </div>
  );
};

export default ContactUs;
