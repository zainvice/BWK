import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminCSPage.module.css";
import AdminSideBar from "../components/AdminSideBar";
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
      <AdminSideBar/>
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
