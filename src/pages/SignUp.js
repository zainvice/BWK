import { useState, useCallback } from "react";
import Check from "../components/Check";
import PortalPopup from "../components/PortalPopup";
import TearmsAndConditions from "../components/TearmsAndConditions";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import Header from "../components/Header";
const SignUp = () => {
  const [isCheckOpen, setCheckOpen] = useState(false);
  const [isTearmsAndConditionsOpen, setTearmsAndConditionsOpen] =
    useState(false);
  const navigate = useNavigate();

  const openCheck = useCallback(() => {
    setCheckOpen(true);
  }, []);

  const closeCheck = useCallback(() => {
    setCheckOpen(false);
  }, []);

  const openTearmsAndConditions = useCallback(() => {
    setTearmsAndConditionsOpen(true);
  }, []);

  const closeTearmsAndConditions = useCallback(() => {
    setTearmsAndConditionsOpen(false);
  }, []);

  const onSIgnUpContainerClick = useCallback(() => {
    navigate("/succesfully-registered");
  }, [navigate]);

  const onSIgnUpContainer1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className={styles.signUp}>
        <img className={styles.image3Icon} alt="" src="/image-31@2x.png" />
        <Header />
        <div className={styles.signupForm}>
          <div className={styles.signupFormChild} />
          <div className={styles.eg0712345678}>{`e.g 0712345678 `}</div>
          <div className={styles.maximumAmountTo}>
            Maximum amount to be used in a single bet e.g. 2000
          </div>
          <div className={styles.egYourmailmailcom}>e.g yourmail@mail.com</div>
          <b className={styles.signUp1}>Sign Up</b>
          <div className={styles.signupFormItem} />
          <div className={styles.signupFormInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.signupFormChild1} />
          <div className={styles.signupFormChild2} />
          <div className={styles.signupFormChild3} />
          <div className={styles.signUp2} onClick={onSIgnUpContainerClick}>
            <div className={styles.signUpChild} />
            <b className={styles.signup}>SIGNUP</b>
          </div>
          <div className={styles.signUp3} onClick={onSIgnUpContainer1Click}>
            <div className={styles.signUpItem} />
            <b className={styles.logIn}>LOG IN</b>
          </div>
          <div className={styles.signupFormChild4} onClick={openCheck} />
          <div
            className={styles.iHaveReadContainer}
            onClick={openTearmsAndConditions}
          >
            <span>{`I have read the `}</span>
            <span className={styles.termsOfService}>Terms of Service</span>
          </div>
          <b className={styles.alreadyHaveAnContainer}>
            <span>{`Already have an `}</span>
            <span className={styles.termsOfService}>Account?</span>
          </b>
          <div className={styles.yourName}>Your Name</div>
          <div className={styles.yourPhoneNo}>Your Phone No</div>
          <div className={styles.yourBettingPlatform}>
            Your Betting Platform
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          <div className={styles.yourEmail}>Your Email</div>
          <div className={styles.yourBetPassword}>Your Bet Password</div>
          <div className={styles.maximumStake}>Maximum Stake</div>
        </div>
        <div className={styles.weAssistYouContainer}>
          <p className={styles.weAssistYou}>
            We assist you in optimizing your betting returns.Utilizing our
            expertise in analysis, we evaluate matches and execute wagers on
            your behalf, thereby enhancing your odds of success.
          </p>
          <p className={styles.weAssistYou}>
            Join us and minimize your perpetual losses.
          </p>
        </div>
        <b className={styles.whyChooseUsContainer}>
          <span>{`Why `}</span>
          <span className={styles.chooseUs}>Choose Us?</span>
        </b>
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
      {isTearmsAndConditionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTearmsAndConditions}
        >
          <TearmsAndConditions onClose={closeTearmsAndConditions} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignUp;
