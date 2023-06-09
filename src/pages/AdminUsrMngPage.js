import { useState, useCallback } from "react";
import AdminNotifications from "./AdminNotifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AdminUsrMngPage.module.css";
import AdminSideBar from "../components/AdminSideBar";
const AdminUsrMngPage = () => {
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

  const onUserManagementText1Click = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  const onManageUsersTextClick = useCallback(() => {
    navigate("/admin-usrmngpage");
  }, [navigate]);

  return (
    <>
      <div className={styles.adminUsrMngPage}>
        <AdminSideBar/>
       <b
          className={styles.userManagement1}
          onClick={onUserManagementText1Click}
        >
          User Management
        </b>
        
        <div className={styles.adminUsrMngPageChild} />
        <b className={styles.manageUsers} onClick={onManageUsersTextClick}>
          Manage Users
        </b>
        <div className={styles.notification} onClick={openAdminNotifications}>
          <img className={styles.vectorIcon6} alt="" src="/vector12.svg" />
          <div className={styles.notNum}>
            <div className={styles.notNumChild} />
            <b className={styles.b}>5</b>
          </div>
        </div>
        <div className={styles.newuser}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <div className={styles.newuser1}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <div className={styles.newuser2}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <div className={styles.newuser3}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <div className={styles.newuser4}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <div className={styles.newuser5}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <div className={styles.newuser6}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <div className={styles.newuser7}>
          <div className={styles.newuserChild} />
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.ddmmyy}>DD/MM/YY</div>
          <div className={styles.goldSuper}>Gold Super</div>
          <b className={styles.active}>Active</b>
          <div className={styles.johndoemailcom1234567}>
            johndoe@mail.com/+1 234 567 8901
          </div>
        </div>
        <b className={styles.username}>Username</b>
        <b className={styles.joined}>Joined</b>
        <b className={styles.subscription}>Subscription</b>
        <b className={styles.contact}>Contact</b>
        <b className={styles.activedeactivated}>Active/Deactivated</b>
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

export default AdminUsrMngPage;
