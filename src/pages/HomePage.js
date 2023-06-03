import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useState, useCallback } from "react";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  
  const onSubscriptionsClick = useCallback(() => {
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
  const onSignupContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  const onLOginContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);


  return (
    <>
    <div className={styles.homepage}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.bwk}>BWK</div>
          <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
        </div>
        
        <div className={styles.navbar}>
          <div className={styles.home}>Home</div>
          <div
            className={styles.subscriptions}
            onClick={onSubscriptionsClick}
          >
            Subscriptions
          </div>
          <div className={styles.smsBetting} onClick={onSMSBettingTextClick}>
            SMS Betting
          </div>
          <div className={styles.smsBetting} onClick={onWebBettingTextClick}>
            Web Betting
          </div>
          <div className={styles.smsBetting} onClick={onLiveScoreTextClick}>
            Live Score
          </div>
          <div className={styles.smsBetting} onClick={onContactUsTextClick}>
            Contact Us
          </div>

        </div>
        <div className={styles.loginsignup}>
          <div className={styles.signup} onClick={onSignupContainerClick}>
            
            <b className={styles.signUp}>Sign Up</b>
          </div>
          <div className={styles.login} onClick={onLOginContainerClick}>
            
            <b className={styles.login1}>Login</b>
          </div>
        </div>
        <div className="styles.sideNav"><img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav1.svg"
              onClick={openSideBar}
            /></div>
        
      </div>
      <div className={styles.homeTop}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <b className={styles.welcomeToBetContainer}>
          <span>{`WELCOME TO `}</span>
          <span className={styles.forYou}>BET WISE KENYA!</span>
        </b>
        <b className={styles.becomeOneOf}>Become one of us today!</b>
        <div className={styles.vectorParent}>
          
          <b className={styles.signUp1}>SIGN UP</b>
        </div>
      </div>
      <div className={styles.homeDesp}>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <div className={styles.homDescription}>
          <b className={styles.whatWeDoContainer}>
            <span>{`What we do `}</span>
            <span className={styles.forYou}>for you!</span>
          </b>
          <div className={styles.vectorGroup} onClick={onSignupContainerClick}>
           
            <b className={styles.joinNow}>Join Now</b>
          </div>
          <div className={styles.welcomeToOurContainer}>
            <p className={styles.welcomeToOur}>
              Welcome to our premier betting tips platform, where we empower you
              to turn your passion for sports into winning opportunities. Our
              team of seasoned experts works tirelessly to provide you with the
              most accurate predictions and strategies to enhance your chances
              of success. 
            </p>
            <p className={styles.welcomeToOur}>
              Whether you're a seasoned bettor or just starting out, we offer
              you the knowledge, tools, and support to make informed decisions
              and maximize your profits. 
            </p>
            <p className={styles.welcomeToOur}>
              Join our community of like-minded enthusiasts and experience the
              thrill of victory. It's time to take your betting game to new
              heights with our winning tips and unrivaled expertise. Get ready
              to unlock the secrets of successful betting with us!
            </p>
          </div>
        </div>
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
    
    </>
  );
};

export default HomePage;
