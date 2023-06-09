import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Subscriptions.module.css";
import CHeader from "../components/CustomerHeader";
import Footer from "../components/Footer";
import Subscriptions_show from "../components/Subscription_show";
const CustomerSUBPage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/customer-homepage");
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

  const onImage4Click = useCallback(() => {
    navigate("/customer-supportpage");
  }, [navigate]);

  const onSubscriptionsText1Click = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onUpgradeYourSubscriptionClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onYoureCurrentlySubscribedClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  return (
    <div className={styles.customerSubPage}>
      <CHeader />
      <div className={styles.subscriptions2}>
        <b onClick={onSubscriptionsText1Click}>Subscriptions</b>
      </div>
      <div
        className={styles.readyToTakeContainer}
        onClick={onYoureCurrentlySubscribedClick}
      >
        <span>
          <span>You’re currently subscribed to</span>
          <span className={styles.subscription}>{` Gold `}</span>
        </span>
        <span className={styles.subscription}>
          <b>Super Multi-Bet!</b>
        </span>
      </div>
      <div className={styles.whatWeAreContainer}>
        <b onClick={onUpgradeYourSubscriptionClick}>
          <span>Upgrade your</span>
          <span className={styles.subscription}> Subscription</span>
        </b>
      </div>
      <Subscriptions_show />
      <Footer />
    </div>
  );
};

export default CustomerSUBPage;
