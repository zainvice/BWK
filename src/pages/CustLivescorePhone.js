import { useState, useCallback } from "react";
import CustSideBar from "../components/CustSideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./CustLivescorePhone.module.css";
const CustLivescorePhone = () => {
  const [isCustSideBarOpen, setCustSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openCustSideBar = useCallback(() => {
    setCustSideBarOpen(true);
  }, []);

  const closeCustSideBar = useCallback(() => {
    setCustSideBarOpen(false);
  }, []);

  const onLiveScoresTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <>
      <div className={styles.custLivescorePhone}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
            <img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav1.svg"
              onClick={openCustSideBar}
            />
          </div>
        </div>
        <b className={styles.liveScores} onClick={onLiveScoresTextClick}>
          Live Scores
        </b>
        <div className={styles.custLivescorePhoneChild} />
        <b className={styles.theApiWill}>THE API WILL DISPLAY SCORE HERE</b>
      </div>
      {isCustSideBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCustSideBar}
        >
          <CustSideBar onClose={closeCustSideBar} />
        </PortalPopup>
      )}
    </>
  );
};

export default CustLivescorePhone;
