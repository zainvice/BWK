import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuccesfullyRegistered.module.css";
const SuccesfullyRegistered = () => {
  const navigate = useNavigate();

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

  const onSIgnUpContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.succesfullyRegistered}>
      <img className={styles.image3Icon} alt="" src="/image-311@2x.png" />
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.bwk}>BWK</div>
          <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
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
      <div className={styles.signupForm}>
        <div className={styles.signupFormChild} />
        <div className={styles.signUp} onClick={onSIgnUpContainerClick}>
          <div className={styles.signUpChild} />
          <b className={styles.logIn}>LOG IN</b>
        </div>
        <div className={styles.ifYouHaveContainer}>
          <span>{`If you have completed `}</span>
          <span className={styles.paymentProcess}>payment process</span>
          <span>, you should be able to</span>
          <span className={styles.paymentProcess}> login</span>
          <span> now!</span>
        </div>
      </div>
      <b className={styles.youHaveBeenContainer}>
        <span>{`You have been successfully `}</span>
        <span className={styles.paymentProcess}>Registered!</span>
      </b>
    </div>
  );
};

export default SuccesfullyRegistered;
