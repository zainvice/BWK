import CHeader from "../components/CustomerHeader";
import styles from "./CustomerHomePage.module.css";
const CustomerHomePage = () => {
  return (
    <div className={styles.customerHomePage}>
      <CHeader />
      <div className={styles.homeTop}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.welcomeToBetContainer}>
          <h3 className={styles.customerName}>CUSTOMER NAME</h3>
          <h1 className={styles.betWiseKenya}>
            {`WELCOME TO `}
            <span>BET WISE KENYA!</span>
          </h1>
          <div>
            <button className={styles.submit}>View Latest Tips</button>
          </div>
        </div>
      </div>
      <div className={styles.homDescription}>
        <div className={styles.homemDescriptionLeft}>
          <h1 className={styles.latestTips}>LATEST <span>TIPS</span></h1>

          <div className={styles.postedTips}>
            <p>Posted tips will show here</p>
          </div>
        </div>
        <div className={styles.homDescriptionRight}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default CustomerHomePage;
