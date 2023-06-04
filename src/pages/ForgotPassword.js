import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";
import Header from "../components/Header";
const ForgotPassword = () => {
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

  const onNotRegisteredYetClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.forgotPassword}>
      <img className={styles.image3Icon} alt="" src="/image-32@2x.png" />
      <Header/>
      <div className={styles.loginForm}>
        <div className={styles.loginFormChild} />
        <div className={styles.loginFormItem} />
        <div className={styles.phoneNumberOr}>Phone Number or Email</div>
        <b className={styles.passwordReset}>Password Reset</b>
        <div
          className={styles.notRegisteredYetContainer}
          onClick={onNotRegisteredYetClick}
        >
          <span>{`Not Registered yet? `}</span>
          <span className={styles.registerNow}>{`Register Now! `}</span>
        </div>
        <div className={styles.login} onClick={onLoginTextClick}>
          Login?
        </div>
        <div className={styles.registeredEmailOr}>
          Registered Email or Phone
        </div>
        <div className={styles.login1}>
          <div className={styles.loginChild} />
          <b className={styles.submitRequest}>Submit Request</b>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
