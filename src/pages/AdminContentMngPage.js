import { useState, useCallback } from "react";
import AdminNotifications from "./AdminNotifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AdminContentMngPage.module.css";
const AdminContentMngPage = () => {
  const [isAdminNotificationsOpen, setAdminNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const openAdminNotifications = useCallback(() => {
    setAdminNotificationsOpen(true);
  }, []);

  const closeAdminNotifications = useCallback(() => {
    setAdminNotificationsOpen(false);
  }, []);

  const onImage4Click = useCallback(() => {
    navigate("/admin-cspage");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/admin-homepage");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/admin-homepage");
  }, [navigate]);

  const onUserManagementTextClick = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onSubscriptionManagementTextClick = useCallback(() => {
    navigate("/admin-submngpage");
  }, [navigate]);

  const onContentManagementTextClick = useCallback(() => {
    navigate("/admin-contentmngpage");
  }, [navigate]);

  const onBettingTipsManagementClick = useCallback(() => {
    navigate("/admin-bettingtipspage");
  }, [navigate]);

  const onReportsAndAnalyticsClick = useCallback(() => {
    navigate("/admin-reportspage");
  }, [navigate]);

  const onContentManagementText1Click = useCallback(() => {
    navigate("/admin-contentmngpage");
  }, [navigate]);

  const onManageContentTextClick = useCallback(() => {
    navigate("/admin-contentmngpage");
  }, [navigate]);

  return (
    <>
      <div className={styles.adminContentMngPage}>
        <img
          className={styles.image4Icon}
          alt=""
          src="/image-41@2x.png"
          onClick={onImage4Click}
        />
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.logo} onClick={onLogoContainerClick}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
          </div>
          <div className={styles.navbar}>
            <div className={styles.dashboard} onClick={onDashboardTextClick}>
              Dashboard
            </div>
            <div
              className={styles.userManagement}
              onClick={onUserManagementTextClick}
            >
              User Management
            </div>
            <div
              className={styles.subscriptionManagement}
              onClick={onSubscriptionManagementTextClick}
            >
              Subscription Management
            </div>
            <div
              className={styles.contentManagement}
              onClick={onContentManagementTextClick}
            >
              Content Management
            </div>
            <div
              className={styles.bettingTipsManagement}
              onClick={onBettingTipsManagementClick}
            >
              Betting Tips Management
            </div>
            <div
              className={styles.reportsAndAnalytics}
              onClick={onReportsAndAnalyticsClick}
            >
              Reports And Analytics
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector14.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
          </div>
        </div>
        <b
          className={styles.contentManagement1}
          onClick={onContentManagementText1Click}
        >
          Content Management
        </b>
        <div className={styles.bwkCopyright}>{`BWK © Copyright 2023 `}</div>
        <div className={styles.adminContentMngPageChild} />
        <div className={styles.notification} onClick={openAdminNotifications}>
          <img className={styles.vectorIcon6} alt="" src="/vector12.svg" />
          <div className={styles.notNum}>
            <div className={styles.notNumChild} />
            <b className={styles.b}>5</b>
          </div>
        </div>
        <b className={styles.manageContent} onClick={onManageContentTextClick}>
          Manage Content
        </b>
        <div className={styles.adminContentMngPageItem} />
        <div className={styles.adminContentMngPageInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.adminContentMngPageChild1} />
        <div className={styles.adminContentMngPageChild2} />
        <div className={styles.adminContentMngPageChild3} />
        <b className={styles.updateLogIn}>Update Log in Picture</b>
        <b className={styles.welcomeAdmin}>
          <span>{`Welcome, `}</span>
          <span className={styles.admin}>Admin!</span>
        </b>
        <b className={styles.manageOtherAdmins}>Manage Other Admins</b>
        <b className={styles.updateMainScreenContainer}>
          <p className={styles.updateMainScreen}>{`Update Main Screen `}</p>
          <p className={styles.updateMainScreen}>Picture</p>
        </b>
        <b className={styles.updateLogo}>Update Logo</b>
        <b className={styles.updateSupportScreenContainer}>
          <p className={styles.updateMainScreen}>{`Update Support Screen `}</p>
          <p className={styles.updateMainScreen}>Picture</p>
        </b>
        <b className={styles.updateSignUp}>Update Sign Up Picture</b>
      </div>
      {isAdminNotificationsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAdminNotifications}
        >
          <AdminNotifications onClose={closeAdminNotifications} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminContentMngPage;
