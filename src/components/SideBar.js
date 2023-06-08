import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
const SideBar = ({ onClose }) => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/live-score");
  }, [navigate]);

  const onWebBettingTextClick = useCallback(() => {
    navigate("/web-betting");
  }, [navigate]);

  const onSMSBettingTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <div className={styles.sideBar}>
        <button className={styles.x} onClick={onClose}>X</button>
      <div className={styles.loginsignup}>
        <a className={styles.login+" "+styles.selectedLogin} onClick={onLoginTextClick}>
          Login
        </a>
        <a className={styles.signup} onClick={onSignUpTextClick}>
          Sign Up
        </a>
      </div>
      <div className={styles.navbar}>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.subscriptions} onClick={onSubscriptionsTextClick}>
          Subscriptions
        </div>
        <div className={styles.smsBetting} onClick={onSMSBettingTextClick}>
          SMS Bettings
        </div>
        <div className={styles.webBetting} onClick={onWebBettingTextClick}>
          Web Betting
        </div>
        <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
          Live Score
        </div>
        <div className={styles.contactUs} onClick={onContactUsTextClick}>
          Contact Us
        </div>
        <div className={styles.bwk}>BWK</div>
        <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      </div>
    </div>
  );
};

export default SideBar;
