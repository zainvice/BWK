import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
const SideBar = ({ onClose }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/loginphone");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/loginphone");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contactphone");
  }, [navigate]);

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/livescorephone");
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
        <div className={styles.contactUs} onClick={onContactUsTextClick}>
          Contact Us
        </div>
        <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
          Live Score
        </div>
        <div className={styles.webBetting} onClick={onWebBettingTextClick}>
          Web Betting
        </div>
        <div className={styles.smsBetting} onClick={onSMSBettingTextClick}>
          SMS Betting
        </div>
      </div>
    </div>
  );
};

export default SideBar;
