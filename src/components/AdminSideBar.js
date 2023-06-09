// import {} from react;
// import {} from "react-router-dom";
import styles from "./AdminSideBar.module.css";

const AdminSideBar = () => {
  const isActive = ({ isActive }) => {
    return isActive === true
      ? styles.sideNavlink + " " + styles.activeLink
      : styles.sideNavlink;
  };
  return (
    <div className={styles.adminSibarContainer}>
      <div className={styles.adminSidebarLogo}>
        <div className={styles.bwk}>BWK</div>
        <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      </div>

      <div className={styles.adminSidebarNav}>
        <ul className={styles.sideNavigation}>
          <li className={styles.sideNavlink}>
            <span className="material-symbols-outlined">dashboard</span>
            <a className={styles.link}>Dashboard</a>
          </li>
          <li className={styles.sideNavlink + " " + styles.activeLink}>
            <span className="material-symbols-outlined">person</span>
            <a>Users</a>
          </li>
          <li className={styles.sideNavlink}>
            <span className="material-symbols-outlined">credit_card</span>
            <a>Subscriptions</a>
          </li>
          <li className={styles.sideNavlink}>
            <span className="material-symbols-outlined">library_books</span>
            <a>Content</a>
          </li>
          <li className={styles.sideNavlink}>
            <span className="material-symbols-outlined">tips_and_updates</span>
            <a>Betting Tips</a>
          </li>
          <li className={styles.sideNavlink}>
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
