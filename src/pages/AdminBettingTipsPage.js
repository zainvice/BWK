import { useState, useCallback } from "react";
import AdminNotifications from "./AdminNotifications";
import PortalPopup from "../components/PortalPopup";
import PostTipOverlay from "./PostTipOverlay";
import { useNavigate } from "react-router-dom";
import styles from "./AdminBettingTipsPage.module.css";
import AdminSideBar from "../components/AdminSideBar";
const AdminBettingTipsPage = () => {
  const [isAdminNotificationsOpen, setAdminNotificationsOpen] = useState(false);
  const [isPostTipOverlayOpen, setPostTipOverlayOpen] = useState(false);
  const navigate = useNavigate();

  const openAdminNotifications = useCallback(() => {
    setAdminNotificationsOpen(true);
  }, []);

  const closeAdminNotifications = useCallback(() => {
    setAdminNotificationsOpen(false);
  }, []);

  const openPostTipOverlay = useCallback(() => {
    setPostTipOverlayOpen(true);
  }, []);

  const closePostTipOverlay = useCallback(() => {
    setPostTipOverlayOpen(false);
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

  const onBettingTipsManagement1Click = useCallback(() => {
    navigate("/admin-bettingtipspage");
  }, [navigate]);

  const onBettingTipsTextClick = useCallback(() => {
    navigate("/admin-bettingtipspage");
  }, [navigate]);

  return (
    <>
      <div className={styles.adminBettingtipsPage}>
        <AdminSideBar/>
        {/* <img
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
            <img className={styles.vectorIcon2} alt="" src="/vector13.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
          </div>
        </div> */}

        <b
          className={styles.bettingTipsManagement1}
          onClick={onBettingTipsManagement1Click}
        >
          Betting Tips Management
        </b>
        <div className={styles.adminBettingtipsPageChild} />
        <b className={styles.bettingTips} onClick={onBettingTipsTextClick}>
          Betting Tips
        </b>
        <div className={styles.notification} onClick={openAdminNotifications}>
          <img className={styles.vectorIcon6} alt="" src="/vector12.svg" />
          <div className={styles.notNum}>
            <div className={styles.notNumChild} />
            <b className={styles.b}>5</b>
          </div>
        </div>
        <b className={styles.name}>Name</b>
        <b className={styles.posted}>Posted</b>
        <b className={styles.views}>Views</b>
        <b className={styles.status}>Status</b>
        <div className={styles.newsubs}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.thisIsJust}>This is just tip content</div>
          <div className={styles.justNow}>Just Now</div>
          <b className={styles.posted1}>Posted</b>
          <div className={styles.edit}>Edit</div>
          <div className={styles.div}>30</div>
        </div>
        <div className={styles.addNewBut} onClick={openPostTipOverlay}>
          <div className={styles.addNewButChild} />
          <img className={styles.vectorIcon7} alt="" src="/vector.svg" />
          <b className={styles.addNew}>Add New</b>
        </div>
        <b className={styles.welcomeAdmin}>
          <span>{`Welcome, `}</span>
          <span className={styles.admin}>Admin!</span>
        </b>
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
      {isPostTipOverlayOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePostTipOverlay}
        >
          <PostTipOverlay onClose={closePostTipOverlay} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminBettingTipsPage;
