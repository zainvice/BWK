import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SMSBetting.module.css";
import Header from "../components/Header";
const SMSBetting = () => {
  const navigate = useNavigate();
  
  const onSMSBettingText1Click = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.smsBetting}>
      <Header />
      <div className={styles.betOnTheContainer}>
        <b className={styles.smsBetting2} onClick={onSMSBettingText1Click}>
          SMS Betting
        </b>
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
      
      <div className={styles.vectorParent}>
        <button className={styles.joinNow} onClick={onGroupContainerClick}>Join Now</button>
      </div>
    </div>
  );
};

export default SMSBetting;
