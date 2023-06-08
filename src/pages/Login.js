import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import loginStyles from "./Login.module.css";
import styles from "./ContactUs.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onNotRegisteredYetClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgotpassword");
  }, [navigate]);

  const onLOGINContainerClick = useCallback(() => {
    navigate("/customer-homepage");
  }, [navigate]);

  return (
    <>
      <div className={styles.contactUs}>
        <Header />
        <div className={styles.formContainer}>
          <img src={"/image-32@2x.png"} className={styles.formImg} />
          <form className={styles.form + " " + loginStyles.loginform}>
            <h1>Login</h1>
            <div className={styles.inputContainer}>
              <label className={styles.inputlabel}>
                Phone Number
                <input
                  className={styles.input}
                  type="text"
                  placeholder="eg 0712345678"
                />
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.inputlabel}>
                Password
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Your password"
                />
              </label>
            </div>
            <div
              className={styles.inputContainer + " " + loginStyles.keepSignedIn}
            >
              <label>
                <input type="checkbox" /> <span>Keep me signed in</span>
              </label>
              <a className={loginStyles.loginlink1} onClick={onForgotPasswordTextClick}>Forgot password?</a>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.submit} onClick={onLOGINContainerClick}>LOGIN TO TIPS</button>
            </div>
            <div
              className={styles.inputContainer + " " + loginStyles.registerNow} 
            >
              <span>
                Not registered yet?{" "}
                <a className={loginStyles.loginlink1} onClick={onNotRegisteredYetClick}>Register Now</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
