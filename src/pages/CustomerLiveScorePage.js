import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomerLiveScorePage.module.css";
const CustomerLiveScorePage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
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

  const onLiveScoreText1Click = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onLiveScoreWillClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  return (
    <div className={styles.customerLivescorePage}>
      <div className={styles.vectorParent} onClick={onGroupContainerClick}>
        <img className={styles.groupChild} alt="" src="/rectangle-3.svg" />
        <b className={styles.logout}>
          <p className={styles.logout1}>Logout</p>
        </b>
      </div>
      <div className={styles.header}>
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <div className={styles.bwk}>BWK</div>
          <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
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
      <b className={styles.liveScore1} onClick={onLiveScoreText1Click}>
        Live Score
      </b>
      <div className={styles.customerLivescorePageChild} />
      <b className={styles.liveScoreWill} onClick={onLiveScoreWillClick}>
        Live Score will show here
      </b>
    </div>
  );
};

export default CustomerLiveScorePage;
