
import styles from "./LiveScore.module.css";
import CHeader from "../components/CustomerHeader";
const CustomerLiveScorePage = () => {
  

  return (
    <>
      <CHeader/>
      <div className={styles.liveScore}>
        <b className={styles.liveScores}>
          Live Scores
        </b>
        <div className={styles.liveScoreChild}>
          <b className={styles.theApiWill}>THE API WILL DISPLAY SCORE HERE</b>
        </div>
      </div>
     
      
      </>
  );
};

export default CustomerLiveScorePage;
