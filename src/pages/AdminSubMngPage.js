import { useState, useCallback } from "react";
import AdminNotifications from "./AdminNotifications";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./AdminSubMngPage.module.css";
const AdminSubMngPage = () => {
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

  const onSubscriptionManagementText1Click = useCallback(() => {
    navigate("/admin-submngpage");
  }, [navigate]);

  const onOfferedSubscriptionsTextClick = useCallback(() => {
    navigate("/admin-submngpage");
  }, [navigate]);

  return (
    <>
      <div className={styles.adminSubMngPage}>
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
            <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector15.svg" />
          </div>
        </div>
        <b
          className={styles.subscriptionManagement1}
          onClick={onSubscriptionManagementText1Click}
        >
          Subscription Management
        </b>
        <div className={styles.bwkCopyright}>{`BWK © Copyright 2023 `}</div>
        <div className={styles.adminSubMngPageChild} />
        <div className={styles.notification} onClick={openAdminNotifications}>
          <img className={styles.vectorIcon6} alt="" src="/vector12.svg" />
          <div className={styles.notNum}>
            <div className={styles.notNumChild} />
            <b className={styles.b}>5</b>
          </div>
        </div>
        <b
          className={styles.offeredSubscriptions}
          onClick={onOfferedSubscriptionsTextClick}
        >
          Offered Subscriptions
        </b>
        <b className={styles.name}>Name</b>
        <b className={styles.type}>Type</b>
        <b className={styles.duration}>Duration</b>
        <b className={styles.members}>Members</b>
        <b className={styles.activedeactive}>Active/Deactive</b>
        <div className={styles.newsubs}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.x2}>
            <p
              className={styles.p}
            >{`1X2                                                       `}</p>
            <p className={styles.p}>{`     `}</p>
          </div>
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active}>Active</b>
          <div className={styles.edit}>Edit</div>
          <div className={styles.div1}>89</div>
        </div>
        <div className={styles.newsubs1}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.ov15un15}>
            <p
              className={styles.p}
            >{`OV1.5/UN1.5                                                 `}</p>
          </div>
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active1}>Active</b>
          <div className={styles.div1}>89</div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.newsubs2}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.btts}>
            <p
              className={styles.p}
            >{`OV2.5/UN2.5                                      `}</p>
          </div>
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active}>Active</b>
          <div className={styles.div1}>89</div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.newsubs3}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.btts}>
            <p
              className={styles.p}
            >{`BTTS                                                                  `}</p>
          </div>
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active1}>Active</b>
          <div className={styles.div1}>89</div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.newsubs4}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.btts}>
            <p
              className={styles.p}
            >{`HT/FT                                                                  `}</p>
            <p className={styles.p}>{`     `}</p>
          </div>
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active1}>Active</b>
          <div className={styles.div1}>89</div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.newsubs5}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.superMultiBet}>{`Super Multi-bet     `}</div>
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active1}>Active</b>
          <div className={styles.div1}>89</div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.newsubs6}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active1}>Active</b>
          <div className={styles.div1}>89</div>
          <div className={styles.superMultiBet}>{`Mega Jackpot `}</div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.newsubs7}>
          <div className={styles.newsubsChild} />
          <div className={styles.newsubsChild} />
          <div className={styles.bronze}>Bronze</div>
          <div className={styles.div}>1/7/14/30</div>
          <b className={styles.active7}>Active</b>
          <div className={styles.div1}>89</div>
          <div className={styles.midWeekJackpot}>Mid-week Jackpot</div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.addNewBut}>
          <div className={styles.addNewButChild} />
          <img className={styles.vectorIcon7} alt="" src="/vector.svg" />
          <b className={styles.addNew}>Add New</b>
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

export default AdminSubMngPage;
