import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuccesfullyRegistered.module.css";
import Header from "../components/Header";
const SuccesfullyRegistered = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onSMSBettingTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  const onWebBettingTextClick = useCallback(() => {
    navigate("/web-betting");
  }, [navigate]);

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/live-score");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onSIgnUpContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.succesfullyRegistered}>
      <img className={styles.image3Icon} alt="" src="/image-311@2x.png" />
      <Header/>
      <div className={styles.signupForm}>
        <div className={styles.signupFormChild} />
        <div className={styles.signUp} onClick={onSIgnUpContainerClick}>
          <div className={styles.signUpChild} />
          <b className={styles.logIn}>LOG IN</b>
        </div>
        <div className={styles.ifYouHaveContainer}>
          <span>{`If you have completed `}</span>
          <span className={styles.paymentProcess}>payment process</span>
          <span>, you should be able to</span>
          <span className={styles.paymentProcess}> login</span>
          <span> now!</span>
        </div>
      </div>
      <b className={styles.youHaveBeenContainer}>
        <span>{`You have been successfully `}</span>
        <span className={styles.paymentProcess}>Registered!</span>
      </b>
    </div>
  );
};

export default SuccesfullyRegistered;
