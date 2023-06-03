import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WebBetting.module.css";
import Header from "../components/Header";
const WebBetting = () => {
  const navigate = useNavigate();
  
  const onWebBettingText1Click = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.webBetting}>
      <Header />
      <div className={styles.weboofer}>
        <img
          className={styles.webooferChild}
          alt=""
          src="/rectangle-15@2x.png"
        />
        <div className={styles.webTipsDetailsContainer}>
          <p className={styles.webTipsDetails}>
            <b>WEB TIPS DETAILS</b>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.x2}>
            <span>
              <span>1X2</span>
            </span>
          </p>
          <p className={styles.webTipsDetails}>
            <span>
              <span>OV1.5/UN1.5</span>
            </span>
          </p>
          <p className={styles.webTipsDetails}>
            <span>
              <span>OV2.5/UN2.5</span>
            </span>
          </p>
          <p className={styles.webTipsDetails}>
            <span>
              <span>HT/FT</span>
            </span>
          </p>
          <p className={styles.webTipsDetails}>
            <span>
              <span>BTTS</span>
            </span>
          </p>
          <p className={styles.webTipsDetails}>
            <span>
              <span>Mega jackpot analysis</span>
            </span>
          </p>
          <p className={styles.webTipsDetails}>
            <span>
              <span>Mid-week jackpot analysis</span>
            </span>
          </p>
        </div>
      </div>
      <b className={styles.webBetting2} onClick={onWebBettingText1Click}>
        Web Betting
      </b>
      <div className={styles.welcomeToOurContainer}>
        <p className={styles.webTipsDetails}>
          Welcome to our web-based betting platform, where data-driven insights
          meet user-friendly features. With our comprehensive web tips, you gain
          access to a wealth of information, analysis, and statistics that can
          transform your betting strategy. 
        </p>
        <p className={styles.webTipsDetails}>&nbsp;</p>
        <p className={styles.webTipsDetails}>
          Our expert team scours the depths of the sporting world to provide you
          with the most accurate predictions and valuable betting opportunities.
          From 1X2 predictions to over/under goals, halftime/fulltime results,
          goal scorers, and more – we've got you covered. 
        </p>
        <p className={styles.webTipsDetails}>&nbsp;</p>
        <p className={styles.webTipsDetails}>
          Harness the power of our web-based tips, backed by thorough research
          and expert knowledge, and watch your winnings soar. It's time to
          elevate your betting game and make informed decisions with our
          cutting-edge web tips. Join us now and start winning big!
        </p>
      </div>
      <div className={styles.vectorParent} onClick={onGroupContainerClick}>
        <img className={styles.groupChild} alt="" src="/rectangle-31.svg" />
        <b className={styles.joinNow}>Join Now</b>
      </div>
    </div>
  );
};

export default WebBetting;
