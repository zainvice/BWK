import Header from "../components/Header";
import contactStyles from "./ContactUs.module.css";
import styles from "./RequestRecieved.module.css";

const RequestRecieved = () => {

  return (
    <>
      <div className={styles.requestRecieved}>
        <Header />
        <div className={contactStyles.formContainer}>
          <img className={contactStyles.formImg} alt="" src="/bulb.svg" />
          <div className={contactStyles.form + " " + styles.form}>
            <h1>Support</h1>
            <p className={styles.weRecievedMsg}>
              {"We have "}
              <span>received</span> you request, we’ll reach out soon! <br />
              Feel free to browse our site till then!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestRecieved;
