import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RequestRecieved.module.css";
const RequestRecieved = () => {
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
    navigate("/");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <div className={styles.requestRecieved}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.bwk}>BWK</div>
          <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
        </div>
        <div className={styles.loginsignup}>
          <div className={styles.signup} onClick={onSignupContainerClick}>
            <img className={styles.signupChild} alt="" src="/rectangle-2.svg" />
            <b className={styles.signUp}>Sign Up</b>
          </div>
          <div className={styles.login} onClick={onLOginContainerClick}>
            <img className={styles.loginChild} alt="" src="/rectangle-1.svg" />
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
          <div className={styles.contactUs} onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
      </div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.loginForm}>
        <div className={styles.loginFormChild} />
        <b className={styles.support} onClick={onSupportTextClick}>
          Support
        </b>
      </div>
      <div className={styles.weHaveReceivedContainer}>
        <p className={styles.weHaveReceivedYouRequest}>
          <span className={styles.weHave}>{`We have `}</span>
          <span className={styles.received}>received</span>
          <span> you request, we’ll reach out soon!</span>
        </p>
        <p className={styles.weHaveReceivedYouRequest}>
          Feel free to browse our site till then!
        </p>
      </div>
    </div>
  );
};

export default RequestRecieved;
