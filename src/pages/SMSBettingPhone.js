import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./SMSBettingPhone.module.css";
const SMSBettingPhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const onSMSBettingTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onJoinNowContainerClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  return (
    <>
      <div className={styles.smsBettingPhone}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
            <img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav1.svg"
              onClick={openSideBar}
            />
          </div>
        </div>
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
            enjoying the excitement of winning. Join our community of SMS
            bettors and take your betting experience to a whole new level.
          </p>
        </div>
        <b className={styles.smsBetting} onClick={onSMSBettingTextClick}>
          SMS Betting
        </b>
        <div className={styles.smsoffer}>
          <img
            className={styles.smsofferChild}
            alt=""
            src="/rectangle-1511@2x.png"
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

export default SMSBettingPhone;
