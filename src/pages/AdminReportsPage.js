import { useState, useCallback } from "react";
import AdminNotifications from "./AdminNotifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AdminReportsPage.module.css";
import AdminSideBar from "../components/AdminSideBar";
const AdminReportsPage = () => {
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

  const onReportsAndAnalytics1Click = useCallback(() => {
    navigate("/admin-reportspage");
  }, [navigate]);

  const onUsersTextClick = useCallback(() => {
    navigate("/admin-reportspage");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/admin-reportspage");
  }, [navigate]);

  const onWebsiteVisitsTextClick = useCallback(() => {
    navigate("/admin-reportspage");
  }, [navigate]);

  const onRevenueTextClick = useCallback(() => {
    navigate("/admin-reportspage");
  }, [navigate]);

  const onShowingForLastClick = useCallback(() => {
    navigate("/admin-homepage");
  }, [navigate]);

  return (
    <>
      <div className={styles.adminReportsPage}>
       <AdminSideBar/>
        <b
          className={styles.reportsAndAnalytics1}
          onClick={onReportsAndAnalytics1Click}
        >
          Reports And Analytics
        </b>
       
        <div className={styles.adminReportsPageChild} />
        <b className={styles.users} onClick={onUsersTextClick}>{`Users `}</b>
        <b className={styles.subscriptions} onClick={onSubscriptionsTextClick}>
          Subscriptions
        </b>
        <b className={styles.websiteVisits} onClick={onWebsiteVisitsTextClick}>
          Website Visits
        </b>
        <b className={styles.revenue} onClick={onRevenueTextClick}>
          Revenue
        </b>
        <div className={styles.notification} onClick={openAdminNotifications}>
          <img className={styles.vectorIcon6} alt="" src="/vector12.svg" />
          <div className={styles.notNum}>
            <div className={styles.notNumChild} />
            <b className={styles.b}>5</b>
          </div>
        </div>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
        <img className={styles.image8Icon} alt="" src="/image-6@2x.png" />
        <img className={styles.image9Icon} alt="" src="/image-6@2x.png" />
        <div className={styles.filter}>
          <div className={styles.filterChild} />
          <img className={styles.filterItem} alt="" src="/vector-5.svg" />
          <div
            className={styles.showingForLast}
            onClick={onShowingForLastClick}
          >
            Showing for last 30 days
          </div>
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
    </>
  );
};

export default AdminReportsPage;
