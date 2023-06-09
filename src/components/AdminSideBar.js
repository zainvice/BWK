import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminSideBar.module.css";

const AdminSideBar = () => {
  const navigate = useNavigate();
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
    <div className={styles.adminSibarContainer}>
      <div className={styles.adminSidebarLogo}>
        <div className={styles.bwk}>BWK</div>
        <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      </div>

      <div className={styles.adminSidebarNav}>
        <ul className={styles.sideNavigation}>
          <li className={styles.sideNavlink} onClick={onDashboardTextClick}>
            <span className="material-symbols-outlined">dashboard</span>
            <a className={styles.link} >Dashboard</a>
          </li>
          <li className={styles.sideNavlink + " " + styles.activeLink} onClick={onUserManagementTextClick}>
            <span className="material-symbols-outlined">person</span>
            <a >Users</a>
          </li>
          <li className={styles.sideNavlink} onClick={onSubscriptionManagementTextClick}>
            <span className="material-symbols-outlined">credit_card</span>
            <a>Subscriptions</a>
          </li>
          <li className={styles.sideNavlink} onClick={onContentManagementTextClick}>
            <span className="material-symbols-outlined">library_books</span>
            <a>Content</a>
          </li>
          <li className={styles.sideNavlink} onClick={onBettingTipsManagementClick}>
            <span className="material-symbols-outlined">tips_and_updates</span>
            <a>Betting Tips</a>
          </li>
          <li className={styles.sideNavlink} onClick={onReportsAndAnalyticsClick}>
            <span className="material-symbols-outlined">insights</span>
            <a>Reports and Analytics</a>
          </li>
        </ul>
      </div>

      <div className={styles.adminSidebarFoot}>
        <p>BWK &copy; Copyright 2023</p>
      </div>
    </div>
  );
};

export default AdminSideBar;
