import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomerSupportPage.module.css";
import CHeader from "../components/CustomerHeader";
const CustomerSupportPage = () => {
  const navigate = useNavigate();


  const onLOGINContainerClick = useCallback(() => {
    navigate("/cust-request-recieved");
  }, [navigate]);

  

  return (
    <div className={styles.customerSupportPage}>
     <CHeader/>
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
        <b className={styles.support} >
          Support
        </b>
        <img className={styles.groupIcon} alt="" src="/group-4.svg" />
      </div>
    </div>
  );
};

export default CustomerSupportPage;
