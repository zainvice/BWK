import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
const CustSideBar = ({ onClose }) => {
  const navigate = useNavigate();

  const onLoginSignUpContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/customer-homepage");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/customer-subpage");
  }, [navigate]);

  

  const onLiveScoreTextClick = useCallback(() => {
    navigate("/customer-livescorepage");
  }, [navigate]);
  const onCSupportClick = useCallback(() => {
    navigate("/customer-supportpage");
  }, [navigate]); 
  return (
    <div className={styles.sideBar}>
      <button className={styles.x} onClick={onClose}>X</button>
     
      <div className={styles.logout} onClick={onLoginSignUpContainerClick}>
       
        <b className={styles.logoutb}>Logout</b>
      </div>
      <div className={styles.navbar}>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.subscriptions} onClick={onSubscriptionsTextClick}>
        Subscriptions
      </div>
      
      <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
        Live Score
      </div>
      <img
                         className={styles.CSupport}
                        alt=""
                        src="/image-41@2x.png"
                        onClick={onCSupportClick}
                     />
      </div>
      <div className={styles.bwk}>BWK</div>
      <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
    </div>
  );
};

export default CustSideBar;
