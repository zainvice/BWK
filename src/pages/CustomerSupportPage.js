import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomerSupportPage.module.css";
const CustomerSupportPage = () => {
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

  const onLOGINContainerClick = useCallback(() => {
    navigate("/cust-request-recieved");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <div className={styles.customerSupportPage}>
      <div className={styles.vectorParent} onClick={onGroupContainerClick}>
        <img className={styles.groupChild} alt="" src="/rectangle-3.svg" />
        <b className={styles.logout}>
          <p className={styles.or}>Logout</p>
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
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.loginForm}>
        <div className={styles.loginFormChild} />
        <div className={styles.loginFormItem} />
        <div className={styles.description}>Description</div>
        <div className={styles.loginFormInner} />
        <div className={styles.subject}>Subject</div>
        <div className={styles.summarizeWhatHappened}>
          Summarize what happened....
        </div>
        <div className={styles.describeYourIssue}>Describe your issue...</div>
        <div className={styles.submitYourComplaint}>
          Submit your complaint or concern, we’ll get to you shortly
        </div>
        <div className={styles.orReachUsContainer}>
          <p className={styles.or}>
            <b>OR</b>
          </p>
          <p className={styles.or}>Reach us on</p>
        </div>
        <div className={styles.login} onClick={onLOGINContainerClick}>
          <div className={styles.loginChild} />
          <b className={styles.submit}>SUBMIT</b>
        </div>
        <b className={styles.support} onClick={onSupportTextClick}>
          Support
        </b>
        <img className={styles.groupIcon} alt="" src="/group-4.svg" />
      </div>
    </div>
  );
};

export default CustomerSupportPage;
