import {} from "react";
import {} from "react-router-dom";
import styles from "./AdminSideBar.module.css";

const AdminSideBar = () => {
  return (
    <div className={styles.adminSibarContainer}>
      <div className={styles.adminSidebarLogo}>
        <div className={styles.bwk}>BWK</div>
        <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      </div>

      <div className={styles.adminSidebarNav}>
        <ul className={styles.sideNavigation}>
          <li className={styles.sideNavlink}>
            
            <a className={styles.link}>Dashboard</a>
          </li>
          <li className={styles.sideNavlink+" "+styles.activeLink}>
            <a>Users</a>
          </li>
          <li className={styles.sideNavlink}>
            <a>Subscriptions</a>
          </li>
          <li className={styles.sideNavlink}>
            Content<a></a>
          </li>
          <li className={styles.sideNavlink}>
            Betting Tips<a></a>
          </li>
          <li className={styles.sideNavlink}>
            Reports and Analytics<a></a>
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
