import { useState, useCallback } from "react";
import CustSideBar from "../components/CustSideBar";
import PortalPopup from "../components/PortalPopup";
import styles from "./CustomerHomePhone.module.css";
const CustomerHomePhone = () => {
  const [isCustSideBarOpen, setCustSideBarOpen] = useState(false);

  const openCustSideBar = useCallback(() => {
    setCustSideBarOpen(true);
  }, []);

  const closeCustSideBar = useCallback(() => {
    setCustSideBarOpen(false);
  }, []);

  return (
    <>
      <div className={styles.customerHomePhone}>
        <img className={styles.image2Icon} alt="" src="/image-21@2x.png" />
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
        <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
        <b className={styles.welcomeToBetContainer}>
          <span>{`WELCOME TO `}</span>
          <span className={styles.betWiseKenya1}>BET WISE KENYA!</span>
        </b>
        <b className={styles.customerName}>Customer Name</b>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-331.svg" />
          <b className={styles.viewLatestTips}>View Latest Tips</b>
        </div>
        <b className={styles.latestTips}>Latest Tips</b>
        <div className={styles.div}>
          ...................................................................................
        </div>
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

export default CustomerHomePhone;
