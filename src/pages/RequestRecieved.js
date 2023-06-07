import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import contactStyles from "./ContactUs.module.css";
import styles from "./RequestRecieved.module.css";

const RequestRecieved = () => {
  const navigate = useNavigate();

  const onSupportTextClick = useCallback(() => {
    navigate("/sms-betting");
  }, [navigate]);

  return (
    <>
      <div className={styles.requestRecieved}>
        <Header />
        <div className={contactStyles.formContainer}>
          <img className={contactStyles.formImg} alt="" src="/bulb.svg" />
          <div className={contactStyles.form}>
            <h1>Support</h1>
            <p className={styles.weRecievedMsg}>
              {"We have "}<span>received</span> you request, we’ll reach out soon! Feel free
              to browse our site till then!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestRecieved;
