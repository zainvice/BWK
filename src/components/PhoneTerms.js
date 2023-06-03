import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PhoneTerms.module.css";
const PhoneTerms = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  return (
    <div className={styles.phoneTerms}>
      <div className={styles.termsAndConditions} />
      <div className={styles.vectorParent} onClick={onGroupContainerClick}>
        <img className={styles.groupChild} alt="" src="/rectangle-35.svg" />
        <b className={styles.accept}>Accept</b>
      </div>
      <div className={styles.vectorGroup} onClick={onGroupContainer1Click}>
        <img className={styles.groupChild} alt="" src="/rectangle-311.svg" />
        <b className={styles.accept}>Decline</b>
      </div>
      <b className={styles.ourTermsAndContainer}>
        <span>{`Our `}</span>
        <span className={styles.termsAndConditions1}>Terms and Conditions</span>
      </b>
      <b className={styles.x}>X</b>
      <div className={styles.pleaseReadTheseContainer}>
        <p
          className={styles.pleaseReadThese}
        >{`Please read these Terms and Conditions carefully before using our betting tips website. By accessing or using the website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, please refrain from using our website. `}</p>
        <p className={styles.pleaseReadThese}>&nbsp;</p>
        <p
          className={styles.pleaseReadThese}
        >{`    1. Subscription Services: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`          a. Users can subscribe to different   `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`              levels (Bronze, Silver, Gold, `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`              Platinum, VIP) by paying the `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`              corresponding charges. `}</p>
        <p className={styles.pleaseReadThese}> b. Subscription fees are non-</p>
        <p
          className={styles.pleaseReadThese}
        >{`               refundable and non-transferable.  `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`          c. We reserve the right to modify the        `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`              subscription charges at any time,   `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`              and such changes will be effective                                               `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`              immediately upon posting on the `}</p>
        <p className={styles.pleaseReadThese}>{`              website. `}</p>
        <p className={styles.pleaseReadThese}>{`    2. Betting Tips: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`           a. The tips provided on our website are based on our expert analysis and research. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`           b. We strive to provide accurate and reliable tips, but we do not guarantee winnings or accept any liability for `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                    losses incurred. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`           c. It is the responsibility of the user to make informed decisions based on the provided tips and exercise caution `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                    while placing bets. `}</p>
        <p className={styles.pleaseReadThese}>{`      3. User Conduct: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`            a. Users must be at least 18 years old or the legal gambling age in their jurisdiction to use our website and services. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`            b. Users agree not to engage in any unlawful or prohibited activities while using our website. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`            c. Users must provide accurate and up-to-date information during the registration process. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`            d. Users are responsible for maintaining the confidentiality of their account information and are liable for any `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                    activities that occur under their account. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`      4. Payment and Refunds: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`             a. Payments for subscriptions are made through Mpesa (Safaricom) and are subject to their terms and conditions. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`             b. All payments made are final, and we do not offer refunds, except in cases of technical errors or discrepancies `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                    caused by our system. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`       5. Intellectual Property: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`             a. The content, logos, trademarks, and other intellectual property displayed on the website are owned by us or our `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                     licensors. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`             b. Users are prohibited from using, reproducing, or modifying any of the intellectual property without prior written  `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                     consent. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`       6. Limitation of Liability: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`             a. We shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                    use of our website or services. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`               b. We do not guarantee the availability, accuracy, or reliability of the website or its content. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`       7. Modifications to the Terms and Conditions: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                 a. We reserve the right to modify or update these Terms and Conditions at any time without prior notice. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                  b. Users are responsible for reviewing the Terms and Conditions periodically for any changes. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`      8. Governing Law and Jurisdiction: `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`              a. These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`               b. Any disputes arising from these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in                `}</p>
        <p
          className={styles.pleaseReadThese}
        >{`                                  [Jurisdiction]. `}</p>
        <p className={styles.pleaseReadThese}>&nbsp;</p>
        <p className={styles.pleaseReadThese}>
          By using our website and services, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions. If you have any
          questions or concerns regarding these Terms and Conditions, please
          contact us at [contact details]
        </p>
      </div>
    </div>
  );
};

export default PhoneTerms;
