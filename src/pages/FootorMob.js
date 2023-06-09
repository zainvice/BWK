import styles from "./FootorMob.module.css";
const FootorMob = () => {
  return (
    <div className={styles.footorMob}>
      <div className={styles.logo}>
        <div className={styles.bwk}>BWK</div>
        <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      </div>
      <div className={styles.bwkCopyright}>{`BWK © Copyright 2023 `}</div>
      <div className={styles.facebook} />
      <img className={styles.linksIcon} alt="" src="/links.svg" />
      <div className={styles.footorMobChild} />
      <div className={styles.contactUsEmailContainer}>
        <p className={styles.contactUs}>
          <b>Contact Us</b>
        </p>
        <p className={styles.contactUs}>Email: yourmail@bwk.com</p>
        <p className={styles.contactUs}>Phone: +1 929 892 9830</p>
      </div>
      <div className={styles.browseSiteHomeContainer}>
        <b>{`Browse Site:          `}</b>
        <span>Home Betting TIps Bet4Me Live score Contact Us</span>
      </div>
    </div>
  );
};

export default FootorMob;
