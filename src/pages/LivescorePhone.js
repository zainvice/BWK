import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./LivescorePhone.module.css";
const LivescorePhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const onLiveScoresTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onJoinNowContainerClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  return (
    <>
      <div className={styles.livescorePhone}>
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
        <b className={styles.liveScores} onClick={onLiveScoresTextClick}>
          Live Scores
        </b>
        <div className={styles.livescorePhoneChild} />
        <b className={styles.theApiWill}>THE API WILL DISPLAY SCORE HERE</b>
        <div className={styles.joinNow} onClick={onJoinNowContainerClick}>
          <img
            className={styles.joinNowChild}
            alt=""
            src="/rectangle-321.svg"
          />
          <b className={styles.joinNow1}>Join Now</b>
        </div>
      </div>
    </>
  );
};

export default LivescorePhone;
