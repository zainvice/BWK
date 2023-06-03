import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";
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
      <div className={styles.header}>
        <div className={styles.logo}>
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
          <div className={styles.smsBetting} onClick={onSMSBettingTextClick}>
            SMS Betting
          </div>
          <div className={styles.webBetting} onClick={onWebBettingTextClick}>
            Web Betting
          </div>
          <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
            Live Score
          </div>
          <div className={styles.contactUs} onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
      </div>
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
