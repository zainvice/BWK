import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PortalPopup from "./PortalPopup";
import AdminNotifications from "../pages/AdminNotifications";
import styles from "./AdminHeader.module.css";

const AdminHeader = ({ children }) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const onNotificationClick = () => {
    setNotificationsOpen((open) => !open );
  }
  return (
    <>
      <div className={styles.adminLayout}>
        <div className={styles.adminHeader}>
          <h1 className={styles.pageTitle}>Dashboard</h1>
          <div className={styles.adminOptions}>
            <p className={styles.welcome}>
              {"Welcome "}
              <span>Admin</span>
            </p>
            <label className={styles.notifications}>
              <span className="material-symbols-outlined">notifications</span>
              <input type="checkbox" onChange={onNotificationClick} />
            </label>
            <Link to="/customer-supportpage" className={styles.support}>
              <img class={styles.supportImg} alt="" src="/image-41@2x.png" />
            </Link>
          </div>
        </div>
        <div className={styles.adminContent}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      {isNotificationsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={onNotificationClick}
        >
          <AdminNotifications onClose={onNotificationClick} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminHeader;
