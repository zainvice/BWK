import { useState, useCallback } from "react";
import AdminNotifications from "./AdminNotifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AdminUsrMngPage.module.css";
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
        <img
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
            <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
          </div>
        </div>
        <b
          className={styles.userManagement1}
          onClick={onUserManagementText1Click}
        >
          User Management
        </b>
        <div className={styles.bwkCopyright}>{`BWK © Copyright 2023 `}</div>
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
