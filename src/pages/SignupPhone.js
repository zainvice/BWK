import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import PhoneTerms from "../components/PhoneTerms";
import { useNavigate } from "react-router-dom";
import styles from "./SignupPhone.module.css";
const SignupPhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isPhoneTermsOpen, setPhoneTermsOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const openPhoneTerms = useCallback(() => {
    setPhoneTermsOpen(true);
  }, []);

  const closePhoneTerms = useCallback(() => {
    setPhoneTermsOpen(false);
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/loginphone");
  }, [navigate]);

  return (
    <>
      <div className={styles.signupPhone}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
            <img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav.svg"
              onClick={openSideBar}
            />
          </div>
        </div>
        <img className={styles.image4Icon} alt="" src="/image-42@2x.png" />
        <div className={styles.weAssistYouContainer}>
          <p className={styles.weAssistYou}>
            We assist you in optimizing your betting returns. Utilizing our
            expertise in analysis, we evaluate matches and execute wagers on
            your behalf, thereby enhancing your odds of success.
          </p>
          <p className={styles.weAssistYou}>
            Join us and minimize your perpetual losses.
          </p>
        </div>
        <b className={styles.whyChooseUsContainer} onClick={openPhoneTerms}>
          <span>{`Why `}</span>
          <span className={styles.chooseUs}>Choose Us?</span>
        </b>
        <div className={styles.signupPhoneChild} />
        <div className={styles.eg0712345678}>{`e.g 0712345678 `}</div>
        <div className={styles.maximumAmountTo}>
          Maximum amount to be used in a single bet e.g. 2000
        </div>
        <div className={styles.egYourmailmailcom}>e.g yourmail@mail.com</div>
        <b className={styles.signUp}>Sign Up</b>
        <div className={styles.signupPhoneItem} />
        <div className={styles.signupPhoneInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.signupPhoneChild1} />
        <div className={styles.signupPhoneChild2} />
        <div className={styles.signupPhoneChild3} />
        <div className={styles.signUp1}>
          <div className={styles.signUpChild} />
          <b className={styles.signup}>SIGNUP</b>
        </div>
        <div className={styles.signupPhoneChild4} />
        <div className={styles.iHaveReadContainer}>
          <span>{`I have read the `}</span>
          <span className={styles.termsOfService}>Terms of Service</span>
        </div>
        <div className={styles.yourName}>Your Name</div>
        <div className={styles.yourPhoneNo}>Your Phone No</div>
        <div className={styles.yourBettingPlatform}>Your Betting Platform</div>
        <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        <div className={styles.yourEmail}>Your Email</div>
        <div className={styles.yourBetPassword}>Your Bet Password</div>
        <div className={styles.maximumStake}>Maximum Stake</div>
        <div
          className={styles.alreadyHaveAnContainer}
          onClick={onAlreadyHaveAnClick}
        >
          <span>{`Already have an account? `}</span>
          <b className={styles.termsOfService}>Login</b>
        </div>
      </div>
      {isSideBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSideBar}
        >
          <SideBar onClose={closeSideBar} />
        </PortalPopup>
      )}
      {isPhoneTermsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePhoneTerms}
        >
          <PhoneTerms onClose={closePhoneTerms} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignupPhone;
