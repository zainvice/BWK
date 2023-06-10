import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <div className={styles.bwk}>BWK</div>
          <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
        </div>
        <div className={styles.browseSiteHomeContainer}>
          <ul className={styles.siteMap}>
            <h5>Browse Site: </h5>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Subscriptions</a>
            </li>
            <li>
              <a>SMS Betting</a>
            </li>
            <li>
              <a>Web Betting</a>
            </li>
            <li>
              <a>Live Score</a>
            </li>
          </ul>
        </div>
        <div className={styles.contactUsEmailContainer}>
          <ul className={styles.contactEmail}>
            <h5>Contact Us</h5>
            <li>Email: <a>yourmail@bwk.com</a></li>
            <li>Phone: <a>+1 929 892 9830</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bwkCopyright}>
        <div className={styles.socialLinks}>
          <a>
            <img className={styles.reachUsOnImg} src="/facebook.svg" />
          </a>
          <a>
            <img className={styles.reachUsOnImg} src="/twitter.svg" />
          </a>
          <a>
            <img className={styles.reachUsOnImg} src="/youtube.svg" />
          </a>
          <a>
            <img className={styles.reachUsOnImg} src="/instagram.svg" />
          </a>
          
        </div>
        <p>{`BWK © Copyright 2023 `}</p>
      </div>
    </div>
  );
};

export default Footer;
