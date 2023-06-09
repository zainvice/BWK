import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminNotifications.module.css";

const AdminNotifications = ({ onClose }) => {
  const navigate = useNavigate();

  const onNewSupportRequestClick = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onJustNowTextClick = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onNewSupportRequest1Click = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onMinAgoTextClick = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onShowMoreTextClick = useCallback(() => {
    navigate("/admin-cspage");
  }, [navigate]);

  const onNewSupportRequest2Click = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onMinAgoText1Click = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onNewSupportRequest3Click = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onHrAgoTextClick = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onNotificationsTextClick = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  return (
    <div className={styles.adminNotifications}>
      <div className={styles.adminNotificationsChild} />
      <div className={styles.noti}>
        <div className={styles.notiChild} />
        <div
          className={styles.newSupportRequestContainer}
          onClick={onNewSupportRequestClick}
        >
          <span>{`New Support request received `}</span>
          <b>!</b>
        </div>
        <div className={styles.justNow} onClick={onJustNowTextClick}>
          Just Now
        </div>
      </div>
      <div className={styles.noti1}>
        <div className={styles.notiChild} />
        <div
          className={styles.newSupportRequestContainer1}
          onClick={onNewSupportRequest1Click}
        >
          <span>{`New Support request received `}</span>
          <b>!</b>
        </div>
        <div className={styles.minAgo} onClick={onMinAgoTextClick}>
          1 min ago
        </div>
        <div className={styles.showMore} onClick={onShowMoreTextClick}>
          Show More
        </div>
      </div>
      <div className={styles.noti2}>
        <div className={styles.notiChild} />
        <div
          className={styles.newSupportRequestContainer}
          onClick={onNewSupportRequest2Click}
        >
          <span>{`New Support request received `}</span>
          <b>!</b>
        </div>
        <div className={styles.minAgo1} onClick={onMinAgoText1Click}>
          5 min ago
        </div>
      </div>
      <div className={styles.noti3}>
        <div className={styles.notiChild} />
        <div
          className={styles.newSupportRequestContainer}
          onClick={onNewSupportRequest3Click}
        >
          <span>{`New Support request received `}</span>
          <b>!</b>
        </div>
        <div className={styles.justNow} onClick={onHrAgoTextClick}>
          1 hr ago
        </div>
      </div>
      <b className={styles.notifications} onClick={onNotificationsTextClick}>
        Notifications
      </b>
    </div>
  );
};

export default AdminNotifications;
