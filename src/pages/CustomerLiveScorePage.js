import Footer from "../components/Footer";
import CHeader from "../components/CustomerHeader";
import styles from "./LiveScore.module.css";
const CustomerLiveScorePage = () => {
  

  return (
    <div>
      <CHeader/>
      <div className={styles.liveScore}>
        <b className={styles.liveScores}>
          Live Scores
        </b>
        <div className={styles.liveScoreChild}>
          <b className={styles.theApiWill}>THIS FEATURE WILL BE AVAILABLE SOON STAY TUNED</b>
        </div>
      </div>
     
      <Footer />
      </div>
  );
};

export default CustomerLiveScorePage;
