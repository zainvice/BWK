import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import contactStyles from "./ContactUs.module.css"
import styles from "./SuccesfullyRegistered.module.css";

const SuccesfullyRegistered = () => {
  const navigate = useNavigate();
  const onSIgnUpContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.succesfullyRegistered}>
      <Header/>
      <div className={contactStyles.formContainer}>
          <img className={contactStyles.formImg} alt="" src="/bulb.svg" />
          <div className={contactStyles.form+" "+styles.form}>
            <h1><span>You have been successfully</span> Registered!</h1>
            <p className={styles.weRecievedMsg}>
              {"If you have completed, "}<span>payment process</span>, you should be able to <span>login</span> now!
            </p>

            <div
              className={contactStyles.buttonContainer}
              onclick={onSIgnUpContainerClick}
            >
              <button
                className={contactStyles.submit}
                onClick={onSIgnUpContainerClick}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SuccesfullyRegistered;
