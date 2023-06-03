import styles from "./PostedTipConfirmation.module.css";
const PostedTipConfirmation = ({ onClose }) => {
  return (
    <div className={styles.postedTipConfirmation}>
      <div className={styles.postedTipConfirmationChild} />
      <div className={styles.yourTipLiveContainer}>
        <p className={styles.yourTipLiveOnTheSiteNow}>
          <span className={styles.yourTip}>{`Your Tip `}</span>
          <b className={styles.live}>Live</b>
          <span> on the site now</span>
        </p>
        <p className={styles.yourTipLiveOnTheSiteNow}>you may close this tab</p>
      </div>
      <b className={styles.x}>X</b>
      <div className={styles.addNewBut}>
        <div className={styles.addNewButChild} />
        <b className={styles.close}>{`Close      `}</b>
      </div>
    </div>
  );
};

export default PostedTipConfirmation;
