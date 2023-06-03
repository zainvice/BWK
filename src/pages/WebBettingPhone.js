import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./WebBettingPhone.module.css";
const WebBettingPhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const onWebBettingTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onJoinNowContainerClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  return (
    <>
      <div className={styles.webBettingPhone}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
            <img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav.svg"
              onClick={openSideBar}
            />
          </div>
        </div>
        <b className={styles.webBetting} onClick={onWebBettingTextClick}>
          Web Betting
        </b>
        <div className={styles.welcomeToOurContainer}>
          <p className={styles.welcomeToOur}>
            Welcome to our web-based betting platform, where data-driven
            insights meet user-friendly features. With our comprehensive web
            tips, you gain access to a wealth of information, analysis, and
            statistics that can transform your betting strategy. 
          </p>
          <p className={styles.welcomeToOur}>&nbsp;</p>
          <p className={styles.welcomeToOur}>
            Our expert team scours the depths of the sporting world to provide
            you with the most accurate predictions and valuable betting
            opportunities. From 1X2 predictions to over/under goals,
            halftime/fulltime results, goal scorers, and more – we've got you
            covered. 
          </p>
          <p className={styles.welcomeToOur}>&nbsp;</p>
          <p className={styles.welcomeToOur}>
            Harness the power of our web-based tips, backed by thorough research
            and expert knowledge, and watch your winnings soar. It's time to
            elevate your betting game and make informed decisions with our
            cutting-edge web tips. Join us now and start winning big!
          </p>
        </div>
        <div className={styles.weboofer}>
          <img
            className={styles.webooferChild}
            alt=""
            src="/rectangle-152@2x.png"
          />
          <div className={styles.webTipsAnalysisContainer}>
            <p className={styles.welcomeToOur}>
              <b>WEB TIPS ANALYSIS</b>
            </p>
            <p className={styles.blankLine2}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.x2}>
              <span>
                <span>1X2</span>
              </span>
            </p>
            <p className={styles.welcomeToOur}>
              <span>
                <span>OV1.5/UN1.5</span>
              </span>
            </p>
            <p className={styles.welcomeToOur}>
              <span>
                <span>OV2.5/UN2.5</span>
              </span>
            </p>
            <p className={styles.welcomeToOur}>
              <span>
                <span>HT/FT</span>
              </span>
            </p>
            <p className={styles.welcomeToOur}>
              <span>
                <span>BTTS</span>
              </span>
            </p>
            <p className={styles.welcomeToOur}>
              <span>
                <span>Mega jackpot analysis</span>
              </span>
            </p>
            <p className={styles.welcomeToOur}>
              <span>
                <span>Mid-week jackpot analysis</span>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.joinNow} onClick={onJoinNowContainerClick}>
          <img
            className={styles.joinNowChild}
            alt=""
            src="/rectangle-321.svg"
          />
          <b className={styles.joinNow1}>Join Now</b>
        </div>
      </div>
      {isSideBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSideBar}
        >
          <SideBar onClose={closeSideBar} />
        </PortalPopup>
      )}
    </>
  );
};

export default WebBettingPhone;
