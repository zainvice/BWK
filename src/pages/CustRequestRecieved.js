import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustRequestRecieved.module.css";
const CustRequestRecieved = () => {
  const navigate = useNavigate();

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

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

  return (
    <div className={styles.custRequestRecieved}>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.loginForm}>
        <div className={styles.loginFormChild} />
        <b className={styles.support} onClick={onSupportTextClick}>
          Support
        </b>
      </div>
      <div className={styles.weHaveReceivedContainer}>
        <p className={styles.weHaveReceivedYouRequest}>
          <span className={styles.weHave}>{`We have `}</span>
          <span className={styles.received}>received</span>
          <span> you request, we’ll reach out soon!</span>
        </p>
        <p className={styles.weHaveReceivedYouRequest}>
          Feel free to browse our site till then!
        </p>
      </div>
      <div className={styles.vectorParent} onClick={onGroupContainerClick}>
        <img className={styles.groupChild} alt="" src="/rectangle-3.svg" />
        <b className={styles.logout}>
          <p className={styles.weHaveReceivedYouRequest}>Logout</p>
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
        src="/image-4@2x.png"
        onClick={onImage4Click}
      />
    </div>
  );
};

export default CustRequestRecieved;
