
import styles from "./CustomerHomePage.module.css";
import CHeader from "../components/CustomerHeader";
const CustomerHomePage = () => {

  return (
    <div className={styles.customerHomePage}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <CHeader/>
      <b className={styles.welcomeToBetContainer}>
        <span>{`WELCOME TO `}</span>
        <span className={styles.betWiseKenya}>BET WISE KENYA!</span>
      </b>
      <div className={styles.customerHomePageChild} />
      <b className={styles.latestTips}>
        <span>{`LATEST `}</span>
        <span className={styles.tips}>TIPS</span>
      </b>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <b className={styles.customerName}>CUSTOMER NAME</b>
      <div className={styles.vectorParent} >
        <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
        <b className={styles.viewLatestTips}>View Latest Tips</b>
      </div>
      
      <b className={styles.postedTipsWill}>Posted Tips will show here!</b>
      
      
    </div>
  );
};

export default CustomerHomePage;
