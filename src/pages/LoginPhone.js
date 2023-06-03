import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPhone.module.css";
const LoginPhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const onNotRegisteredYetClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  const onLOGINContainerClick = useCallback(() => {
    navigate("/customer-homephone");
  }, [navigate]);

  return (
    <>
      <div className={styles.loginPhone}>
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
        <img className={styles.image3Icon} alt="" src="/image-33@2x.png" />
        <div className={styles.loginForm}>
          <div className={styles.loginFormChild} />
          <div className={styles.loginFormItem} />
          <div className={styles.loginFormInner} />
          <div className={styles.phoneNumber}>Phone Number</div>
          <div className={styles.password}>Password</div>
          <b className={styles.logIn}>LOG IN</b>
          <div className={styles.rectangleDiv} />
          <div className={styles.keepMeSigned}>Keep me signed in</div>
          <div
            className={styles.notRegisteredYetContainer}
            onClick={onNotRegisteredYetClick}
          >
            <span>{`Not Registered yet? `}</span>
            <span className={styles.registerNow}>{`Register Now! `}</span>
          </div>
          <div className={styles.forgotPassword}>Forgot password?</div>
          <div className={styles.eg0712345678}>{`e.g 0712345678 `}</div>
          <div className={styles.yourPassword}>Your Password</div>
          <div className={styles.login} onClick={onLOGINContainerClick}>
            <div className={styles.loginChild} />
            <b className={styles.logIn1}>{`LOG IN `}</b>
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

export default LoginPhone;
