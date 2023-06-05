import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Check from "../components/Check";
import PortalPopup from "../components/PortalPopup";
import TearmsAndConditions from "../components/TearmsAndConditions";
import contactStyles from "./ContactUs.module.css";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [isCheckOpen, setCheckOpen] = useState(false);
  const [isTearmsAndConditionsOpen, setTearmsAndConditionsOpen] =
    useState(false);

  const openCheck = useCallback(() => {
    setCheckOpen(true);
  }, []);

  const closeCheck = useCallback(() => {
    setCheckOpen(false);
  }, []);

  const openTearmsAndConditions = useCallback(() => {
    setTearmsAndConditionsOpen(true);
  }, []);

  const closeTearmsAndConditions = useCallback(() => {
    setTearmsAndConditionsOpen(false);
  }, []);

  const onSIgnUpContainerClick = useCallback(() => {
    navigate("/succesfully-registered");
  }, [navigate]);

  const onSIgnUpContainer1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className={styles.signUp}>
        <Header />
        <div
          className={contactStyles.formContainer + " " + styles.formContainer}
        >
          <div className={styles.signupContainer}>
            <div className={styles.signupleft}>
              <form className={styles.form}>
                <h1>Signup</h1>

                <div className={contactStyles.inputContainer}>
                  <label className={contactStyles.inputlabel}>
                    <input
                      className={contactStyles.input + " " + styles.signupInput}
                      type="text"
                      placeholder="Your Name"
                    />
                  </label>
                </div>

                <div className={styles.inputGroup}>
                  <div
                    className={
                      contactStyles.inputContainer + " " + styles.groupInput
                    }
                  >
                    <label className={contactStyles.inputlabel}>
                      <input
                        className={
                          contactStyles.input + " " + styles.signupInput
                        }
                        type="text"
                        placeholder="ُYour Phone No"
                      />
                      <span className={styles.inputInfo}>eg. 0712345678</span>
                    </label>
                  </div>

                  <div
                    className={
                      contactStyles.inputContainer + " " + styles.groupInput
                    }
                  >
                    <label className={contactStyles.inputlabel}>
                      <input
                        className={
                          contactStyles.input + " " + styles.signupInput
                        }
                        type="email"
                        placeholder="ُYour Email"
                      />
                      <span className={styles.inputInfo}>
                        eg. yourmail@mail.com
                      </span>
                    </label>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <div
                    className={
                      contactStyles.inputContainer + " " + styles.groupInput
                    }
                  >
                    <label className={contactStyles.inputlabel}>
                      <select
                        className={
                          contactStyles.input + " " + styles.signupInput
                        }
                        type="text"
                      >
                        <option>Your Betting Plateform</option>
                      </select>
                    </label>
                  </div>

                  <div
                    className={
                      contactStyles.inputContainer + " " + styles.groupInput
                    }
                  >
                    <label className={contactStyles.inputlabel}>
                      <input
                        className={
                          contactStyles.input + " " + styles.signupInput
                        }
                        type="password"
                        placeholder="ُYour Bet Password"
                      />
                    </label>
                  </div>
                </div>

                <div className={contactStyles.inputContainer}>
                  <label className={contactStyles.inputlabel}>
                    <input
                      className={contactStyles.input + " " + styles.signupInput}
                      type="text"
                      placeholder="ُMaximum Stake"
                    />
                    <span className={styles.inputInfo}>
                      Minimum amount to be used in a single bet eg. 2000
                    </span>
                  </label>
                </div>

                <div className={styles.termsconditions}>
                  <label>
                    <input type="checkbox" />I have read the&nbsp;
                  </label>
                  <button>Terms and Conditions.</button>
                </div>

                <div className={contactStyles.buttonContainer}>
                  <button className={contactStyles.submit}>SIGNUP</button>
                </div>
              </form>
            </div>
            <div className={styles.signupright}>
              <div>
                <h1 className={styles.whyChooseUs}>
                  Why <span className={styles.textOrange}>Choose Us?</span>
                </h1>
                <p>
                  We assist you in optimizing your betting. <br></br>
                  Utilizing your experitse in analysis, we evaluate matches and
                  execute wagers on your behalf, thereby enhancing your odds of
                  success. <br></br>
                  Join us and minimize your perpetual losses.
                </p>
                <p className={styles.haveAccount}>
                  Aleady have an{" "}
                  <span className={styles.textOrange}>Account?</span>
                  &nbsp; &nbsp;{" "}
                  <button className={contactStyles.submit}>LOGIN</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCheckOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCheck}
        >
          <Check onClose={closeCheck} />
        </PortalPopup>
      )}
      {isTearmsAndConditionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTearmsAndConditions}
        >
          <TearmsAndConditions onClose={closeTearmsAndConditions} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignUp;
