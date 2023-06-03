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
    navigate("/homephone");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subcriptionphone");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contactphone");
  }, [navigate]);

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/livescorephone");
  }, [navigate]);

  const onWebBettingTextClick = useCallback(() => {
    navigate("/web-bettingphone");
  }, [navigate]);

  const onSMSBettingTextClick = useCallback(() => {
    navigate("/sms-bettingphone");
  }, [navigate]);

  return (
    <div className={styles.sideBar}>
      <div className={styles.bwk}>BWK</div>
      <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      <div className={styles.loginsignup}>
        <img
          className={styles.loginsignupChild}
          alt=""
          src="/rectangle-11.svg"
          onClick={onRectangleClick}
        />
        <img
          className={styles.loginsignupItem}
          alt=""
          src="/rectangle-21.svg"
          onClick={onRectangle1Click}
        />
        <b className={styles.login} onClick={onLoginTextClick}>
          Login
        </b>
        <b className={styles.signUp} onClick={onSignUpTextClick}>
          Sign Up
        </b>
      </div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <b className={styles.x}>X</b>
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
  );
};

export default SideBar;
