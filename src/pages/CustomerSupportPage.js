import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CHeader from "../components/CustomerHeader";
import styles from "./CustomerSupportPage.module.css";
import contactStyles from "./ContactUs.module.css";

const CustomerSupportPage = () => {
  const navigate = useNavigate();

  const onLOGINContainerClick = useCallback(() => {
    navigate("/cust-request-recieved");
  }, [navigate]);

  return (
    <div className={styles.customerSupportPage}>
      <CHeader />

      <div className={contactStyles.formContainer}>
        <img className={contactStyles.formImg} alt="" src="/bulb.svg" />

        <form className={contactStyles.form}>
          <h1>Support</h1>
          <div className={contactStyles.inputContainer}>
            <label className={contactStyles.inputlabel}>
              Subject
              <input
                className={contactStyles.input}
                type="text"
                placeholder="Summarize what happened..."
              />
            </label>
          </div>

          <div className={contactStyles.inputContainer}>
            <label className={contactStyles.inputlabel}>
              Description
              <textarea
                cols={10}
                rows={10}
                className={contactStyles.input + " " + contactStyles.inputArea}
                placeholder="Describe your issue..."
              />
            </label>
          </div>

          <p className={contactStyles.complaintText + " " + styles.willGetYou}>
            {"Submit your complaint or concern, we’ll get to you shortly"}
          </p>

          <div className={contactStyles.buttonContainer}>
            <button className={contactStyles.submit}>SUBMIT</button>
          </div>

          <p className={contactStyles.complaintText + " " + styles.orReachUs}>
            <b>OR</b> {"\n"} Reach us on
          </p>
          <div className={styles.reachUsOnLinks}>
            <a>
              <img className={styles.reachUsOnImg} src="/phone.svg" />
            </a>
            <a>
              <img className={styles.reachUsOnImg} src="/whatsapp.svg" />
            </a>
            <a>
              <img className={styles.reachUsOnImg} src="/send.svg" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
