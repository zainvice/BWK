
import styles from "./CustomerHomePage.module.css";
import CHeader from "../components/CustomerHeader";
const CustomerHomePage = () => {

  return (
    <div className={styles.customerHomePage}>
     
      <CHeader/>
      <div className={styles.homeTop}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      
      <b className={styles.welcomeToBetContainer}>
        <span className={styles.customerName}>CUSTOMER NAME</span>
        <span>{`WELCOME TO `}</span>
        <span className={styles.betWiseKenya}>BET WISE KENYA!</span>
      </b>
      <div className={styles.vectorParent}>
      <b className={styles.tips}>
        <span>{`LATEST TIPS`}</span>
        </b>
      </div>
      <div  />
      
      </div>
      <div className={styles.homDescription}>
        
     
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
     
      <div className={styles.vectorGroup} >
        <b className={styles.viewLatestTips}>View Latest Tips</b>
      </div>
      
      <b className={styles.postedTipsWill}>Posted Tips will show here!</b>
      
      </div>
      
    </div>
  );
};

export default CustomerHomePage;
