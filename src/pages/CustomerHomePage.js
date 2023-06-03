import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomerHomePage.module.css";
const CustomerHomePage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/customer-homepage");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/customer-homepage");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/customer-subpage");
  }, [navigate]);

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/customer-livescorepage");
  }, [navigate]);

  const onImage4Click = useCallback(() => {
    navigate("/customer-supportpage");
  }, [navigate]);

  return (
    <div className={styles.customerHomePage}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <b className={styles.welcomeToBetContainer}>
        <span>{`WELCOME TO `}</span>
        <span className={styles.betWiseKenya}>BET WISE KENYA!</span>
      </b>
      <div className={styles.customerHomePageChild} />
      <b className={styles.latestTips}>
        <span>{`LATEST `}</span>
        <span className={styles.tips}>TIPS</span>
      </b>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <b className={styles.customerName}>CUSTOMER NAME</b>
      <div className={styles.vectorParent} onClick={onGroupContainerClick}>
        <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
        <b className={styles.viewLatestTips}>View Latest Tips</b>
      </div>
      <div className={styles.vectorGroup} onClick={onGroupContainer1Click}>
        <img className={styles.groupItem} alt="" src="/rectangle-3.svg" />
        <b className={styles.logout}>
          <p className={styles.logout1}>Logout</p>
        </b>
      </div>
      <b className={styles.postedTipsWill}>Posted Tips will show here!</b>
      <div className={styles.header}>
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <div className={styles.bwk}>BWK</div>
          <div className={styles.betWiseKenya1}>Bet Wise Kenya</div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div
            className={styles.subscriptions}
            onClick={onSubscriptionsTextClick}
          >
            Subscriptions
          </div>
          <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
            Live Score
          </div>
        </div>
      </div>
      <img
        className={styles.image4Icon}
        alt=""
        src="/image-41@2x.png"
        onClick={onImage4Click}
      />
    </div>
  );
};

export default CustomerHomePage;
