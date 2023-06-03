import styles from "./Check.module.css";
const Check = ({ onClose }) => {
  return (
    <div className={styles.check}>
      <img className={styles.vectorIcon} alt="" src="/vector51.svg" />
    </div>
  );
};

export default Check;
