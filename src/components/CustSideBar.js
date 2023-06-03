import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustSideBar.module.css";
const CustSideBar = ({ onClose }) => {
  const navigate = useNavigate();

  const onLoginSignUpContainerClick = useCallback(() => {
    navigate("/homephone");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/customer-homephone");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/custsubcriptionphone");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/custcontactphone");
  }, [navigate]);

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/custlivescorephone");
  }, [navigate]);

  return (
    <div className={styles.custsideBar}>
      <div className={styles.bwk}>BWK</div>
      <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      <div className={styles.loginsignup} onClick={onLoginSignUpContainerClick}>
        <img
          className={styles.loginsignupChild}
          alt=""
          src="/rectangle-11.svg"
        />
        <b className={styles.logout}>Logout</b>
      </div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <b className={styles.x}>X</b>
      <div className={styles.subscriptions} onClick={onSubscriptionsTextClick}>
        Subscriptions
      </div>
      <div className={styles.contactUs} onClick={onContactUsTextClick}>
        Contact Us
      </div>
      <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
        Live Score
      </div>
    </div>
  );
};

export default CustSideBar;
