import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./HomePhone.module.css";
const HomePhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const onJoinNowContainerClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  return (
    <>
      <div className={styles.homePhone}>
        <img className={styles.image2Icon} alt="" src="/image-21@2x.png" />
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
            <img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav1.svg"
              onClick={openSideBar}
            />
          </div>
        </div>
        <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
        <b className={styles.welcomeToBetContainer}>
          <span>{`WELCOME TO `}</span>
          <span className={styles.forYou}>BET WISE KENYA!</span>
        </b>
        <b className={styles.becomeOneOf}>Become one of us today!</b>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-36.svg" />
          <b className={styles.signUp}>SIGN UP</b>
        </div>
        <b className={styles.whatWeDoContainer}>
          <span>{`What we do `}</span>
          <span className={styles.forYou}>for you!</span>
        </b>
        <div className={styles.joinNow} onClick={onJoinNowContainerClick}>
          <img
            className={styles.joinNowChild}
            alt=""
            src="/rectangle-321.svg"
          />
          <b className={styles.joinNow1}>Join Now</b>
        </div>
        <div className={styles.welcomeToOurContainer}>
          <p className={styles.welcomeToOur}>
            Welcome to our premier betting tips platform, where we empower you
            to turn your passion for sports into winning opportunities. Our team
            of seasoned experts works tirelessly to provide you with the most
            accurate predictions and strategies to enhance your chances of
            success. 
          </p>
          <p className={styles.welcomeToOur}>
            Whether you're a seasoned bettor or just starting out, we offer you
            the knowledge, tools, and support to make informed decisions and
            maximize your profits. 
          </p>
          <p className={styles.welcomeToOur}>
            Join our community of like-minded enthusiasts and experience the
            thrill of victory. It's time to take your betting game to new
            heights with our winning tips and unrivaled expertise. Get ready to
            unlock the secrets of successful betting with us!
          </p>
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

export default HomePhone;
