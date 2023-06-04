import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RequestRecieved.module.css";
import Header from "../components/Header";
const RequestRecieved = () => {
  const navigate = useNavigate();

  const onSignupContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLOginContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

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
    navigate("/");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <>
    <div className={styles.requestRecieved}>
     <Header/>
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
    </div>
    </>
  );
};

export default RequestRecieved;
