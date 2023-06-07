import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import contactStyles from "./ContactUs.module.css";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const onNotRegisteredYetClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.forgotPassword}>
      <Header />
      <div className={contactStyles.formContainer}>
        <img className={contactStyles.formImg} alt="" src="/image-32@2x.png" />
        <form className={contactStyles.form+" "+styles.form}>
          <h1>Forgot Password</h1>
          <div className={contactStyles.inputContainer}>
            <label className={contactStyles.inputlabel}>
              Phone number or Email
              <input
                className={contactStyles.input}
                type="text"
                placeholder="Registered Email or Phone"
              />
            </label>
          </div>

          <p className={contactStyles.complaintText+" "+styles.complaintText}>
            <a onClick={onLoginTextClick}>Login?</a>
          </p>
          <div className={contactStyles.buttonContainer}>
            <button className={contactStyles.submit}>Submit Request</button>
          </div>

          <p className={contactStyles.complaintText+" "+styles.registerNow}>
            Not Registered yet? <a onClick={onNotRegisteredYetClick}>Register Now?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
