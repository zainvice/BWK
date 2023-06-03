import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";
const ContactUs = () => {
  const navigate = useNavigate();

  const onSignupContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLOginContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onSMSBettingTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onWebBettingTextClick = useCallback(() => {
    navigate("/web-betting");
  }, [navigate]);

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/live-score");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLOGINContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <div className={styles.contactUs}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.bwk}>BWK</div>
          <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
        </div>
        <div className={styles.loginsignup}>
          <div className={styles.signup} onClick={onSignupContainerClick}>
           
            <b className={styles.signUp}>Sign Up</b>
          </div>
          <div className={styles.login} onClick={onLOginContainerClick}>
            
            <b className={styles.login1}>Login</b>
          </div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div
            className={styles.subscriptions}
            onClick={onSubscriptionsTextClick}
          >
            Subscriptions
          </div>
          <div className={styles.smsBetting} onClick={onSMSBettingTextClick}>
            SMS Betting
          </div>
          <div className={styles.webBetting} onClick={onWebBettingTextClick}>
            Web Betting
          </div>
          <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
            Live Score
          </div>
          <div className={styles.contactUs1} onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
      </div>
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
