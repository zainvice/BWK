import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SMSBetting.module.css";
const SMSBetting = () => {
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

  const onSMSBettingText1Click = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.smsBetting}>
      <div className={styles.betOnTheContainer}>
        <p className={styles.betOnThe}>
          Bet on the go with our convenient SMS betting service. We understand
          the need for speed and simplicity, which is why we provide you with
          the option to receive our expert tips directly to your mobile device
          via SMS.
        </p>
        <p className={styles.betOnThe}>
          No matter where you are or what time it is, our timely predictions
          will be at your fingertips. Experience the ease of placing bets with
          just a few taps and stay ahead of the game. 
        </p>
        <p className={styles.betOnThe}>
          With our SMS betting service, you can save time and effort while
          enjoying the excitement of winning. Join our community of SMS bettors
          and take your betting experience to a whole new level.
        </p>
      </div>
      <div className={styles.smsoffer}>
        <img
          className={styles.smsofferChild}
          alt=""
          src="/rectangle-151@2x.png"
        />
        <div className={styles.smsTipsDetailsContainer}>
          <p className={styles.smsTipsDetails}>
            <b>SMS TIPS DETAILS</b>
          </p>
          <p className={styles.betOnThe}>1X2 </p>
          <p className={styles.betOnThe}>OV1.5/UN1.5</p>
          <p className={styles.betOnThe}>OV2.5/UN2.5</p>
          <p className={styles.betOnThe}>HT/FT</p>
          <p className={styles.betOnThe}>BTTS</p>
        </div>
      </div>
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
          <div className={styles.smsBetting1} onClick={onSMSBettingTextClick}>
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
      <b className={styles.smsBetting2} onClick={onSMSBettingText1Click}>
        SMS Betting
      </b>
      <div className={styles.vectorParent} onClick={onGroupContainerClick}>
        <img className={styles.groupChild} alt="" src="/rectangle-31.svg" />
        <b className={styles.joinNow}>Join Now</b>
      </div>
    </div>
  );
};

export default SMSBetting;
