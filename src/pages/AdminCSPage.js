import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminCSPage.module.css";
const AdminCSPage = () => {
  const navigate = useNavigate();

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

  return (
    <div className={styles.adminCsPage}>
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
          <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </div>
      </div>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <b className={styles.customerSupport}>CUSTOMER SUPPORT</b>
      <div className={styles.bwkCopyright}>{`BWK © Copyright 2023 `}</div>
      <div className={styles.adminCsPageChild} />
      <div className={styles.adminCsPageItem} />
      <div className={styles.adminCsPageInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.adminCsPageChild1} />
      <div className={styles.adminCsPageChild2} />
      <div className={styles.adminCsPageChild3} />
      <div className={styles.adminCsPageChild4} />
      <div className={styles.adminCsPageChild5} />
      <div className={styles.adminCsPageChild6} />
      <div className={styles.adminCsPageChild7} />
      <div className={styles.adminCsPageChild8} />
      <b className={styles.welcomeAdmin}>
        <span>{`Welcome, `}</span>
        <span className={styles.admin}>Admin!</span>
      </b>
    </div>
  );
};

export default AdminCSPage;
