import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LiveScore.module.css";
import Header from "../components/Header";
const LiveScore = () => {
  const navigate = useNavigate();

  const onLiveScoresTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <div className={styles.liveScore}>
      <Header />
      <b className={styles.liveScores} onClick={onLiveScoresTextClick}>
        Live Scores
      </b>
      <div className={styles.liveScoreChild} />
      <b className={styles.theApiWill}>THE API WILL DISPLAY SCORE HERE</b>
    </div>
  );
};

export default LiveScore;
