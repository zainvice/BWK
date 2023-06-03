import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import styles from "./ConfirmPhone.module.css";
const ConfirmPhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <div className={styles.confirmphone}>
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
        <img className={styles.image3Icon} alt="" src="/image-31@2x.png" />
        <div className={styles.loginForm}>
          <div className={styles.loginFormChild} />
          <b className={styles.support}>Support</b>
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

export default ConfirmPhone;
