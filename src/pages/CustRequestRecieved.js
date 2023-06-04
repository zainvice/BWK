
import styles from "./CustRequestRecieved.module.css";
import CHeader from "../components/CustomerHeader";
const CustRequestRecieved = () => {
  
  return (
    <div className={styles.custRequestRecieved}>
      <CHeader/>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.loginForm}>
        <div className={styles.loginFormChild} />
        <b className={styles.support} >
          Support
        </b>
      </div>
      <div className={styles.weHaveReceivedContainer}>
        <p className={styles.weHaveReceivedYouRequest}>
          <span className={styles.weHave}>{`We have `}</span>
          <span className={styles.received}>received</span>
          <span> you request, we’ll reach out soon!</span>
        </p>
        <p className={styles.weHaveReceivedYouRequest}>
          Feel free to browse our site till then!
        </p>
      </div>
      
      
    </div>
  );
};

export default CustRequestRecieved;
