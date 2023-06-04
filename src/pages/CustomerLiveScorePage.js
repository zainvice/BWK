
import styles from "./CustomerLiveScorePage.module.css";
import CHeader from "../components/CustomerHeader";
const CustomerLiveScorePage = () => {
  

  return (
    <div className={styles.customerLivescorePage}>
      <CHeader/>
      
     
      <b className={styles.liveScore1} >
        Live Score
      </b>
      <div className={styles.customerLivescorePageChild} />
      <b className={styles.liveScoreWill} >
        Live Score will show here
      </b>
    </div>
  );
};

export default CustomerLiveScorePage;
