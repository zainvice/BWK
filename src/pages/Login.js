import { useState, useCallback } from "react";
import Check from "../components/Check";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Header from "../components/Header";
const Login = () => {
  const [isCheckOpen, setCheckOpen] = useState(false);
  const navigate = useNavigate();

  const openCheck = useCallback(() => {
    setCheckOpen(true);
  }, []);

  const closeCheck = useCallback(() => {
    setCheckOpen(false);
  }, []);

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
      <div className={styles.login}>
        <img className={styles.image3Icon} alt="" src="/image-32@2x.png" />
        <Header />
        <div className={styles.loginForm}>
          <div className={styles.loginFormChild} />
          <div className={styles.loginFormItem} />
          <div className={styles.loginFormInner} />
          <div className={styles.phoneNumber}>Phone Number</div>
          <div className={styles.password}>Password</div>
          <b className={styles.logIn}>LOG IN</b>
          <div className={styles.rectangleDiv} onClick={openCheck} />
          <div className={styles.keepMeSigned}>Keep me signed in</div>
          <div
            className={styles.notRegisteredYetContainer}
            onClick={onNotRegisteredYetClick}
          >
            <span>{`Not Registered yet? `}</span>
            <span className={styles.registerNow}>{`Register Now! `}</span>
          </div>
          <div
            className={styles.forgotPassword}
            onClick={onForgotPasswordTextClick}
          >
            Forgot password?
          </div>
          <div className={styles.eg0712345678}>{`e.g 0712345678 `}</div>
          <div className={styles.yourPassword}>Your Password</div>
          <div className={styles.login1} onClick={onLOGINContainerClick}>
            <div className={styles.loginChild} />
            <b className={styles.logInTo}>LOG IN TO TIPS</b>
          </div>
        </div>
      </div>
      {isCheckOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCheck}
        >
          <Check onClose={closeCheck} />
        </PortalPopup>
      )}
    </>
  );
};

export default Login;
