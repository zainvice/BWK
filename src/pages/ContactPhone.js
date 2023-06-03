import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ContactPhone.module.css";
const ContactPhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const onLOGINContainerClick = useCallback(() => {
    navigate("/confirmphone");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <>
      <div className={styles.contactPhone}>
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
          <div className={styles.loginFormItem} />
          <div className={styles.loginFormInner} />
          <div className={styles.phoneNumber}>Phone Number</div>
          <div className={styles.concern}>Concern</div>
          <div className={styles.eg0712345678}>{`e.g 0712345678 `}</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.email}>Email</div>
          <div className={styles.yourEmail}>{`Your Email `}</div>
          <div className={styles.stateYourComplaints}>
            State your complaints or concerns
          </div>
          <div className={styles.submitYourComplaint}>
            Submit your complaint or concern, we’ll get to you shortly
          </div>
          <div className={styles.login} onClick={onLOGINContainerClick}>
            <div className={styles.loginChild} />
            <b className={styles.submit}>SUBMIT</b>
          </div>
          <b className={styles.support} onClick={onSupportTextClick}>
            Support
          </b>
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

export default ContactPhone;
