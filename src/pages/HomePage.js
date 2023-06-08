import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import PortalPopup from "../components/PortalPopup";
import homeStyles from "./HomePage.module.css";
import styles from "./CustomerHomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const onSignupClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <div className={styles.homepage}>
        <Header />
        <div className={styles.homeTop}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.welcomeToBetContainer}>
            <h1 className={styles.betWiseKenya}>
              {`WELCOME TO`}
              <span className={styles.forYou}>BET WISE KENYA!</span>
            </h1>
            <h3 className={styles.customerName}>Become one of us today!</h3>
            <div>
              <button
                className={styles.submit + " " + homeStyles.buttonSignUp}
                onClick={onSignupClick}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.homDescription + " " + homeStyles.homDescription}
        >
          <div
            className={
              styles.homemDescriptionLeft +
              " " +
              homeStyles.homemDescriptionLeft
            }
          >
            <h1 className={styles.latestTips}>
              What we do <span>for you!</span>
            </h1>
            <div className={homeStyles.welcomeToOurContainer}>
              <p className={styles.welcomeToOur}>
                Welcome to our premier betting tips platform, where we empower
                you to turn your passion for sports into winning opportunities.
                Our team of seasoned experts works tirelessly to provide you
                with the most accurate predictions and strategies to enhance
                your chances of success. 
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

              <div className={homeStyles.buttonContainer}>
                <button className={styles.submit} onClick={onSignupClick}>
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
          <div className={styles.homDescriptionRight}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          </div>
        </div>
        <Footer />
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
