import styles from "./Subscriptions.module.css";
import Header from "../components/Header";
import Subscriptions_show from "../components/Subscription_show";
const Subscriptions = () => {

  return (
    <div className={styles.subscriptions}>
      <Header />
      <div className={styles.subscriptions2} >
        <b>
          Subscriptions
        </b>
      </div>
      <div className={styles.readyToTakeContainer}>
        <p
          className={styles.readyToTake}
        >{`Ready to take your betting journey to the next level? `}</p>
        <p className={styles.readyToTake}>
          Choose from our range of subscription plans tailored to suit your
          needs. Our Bronze, Silver, Gold, Platinum, and VIP levels offer you a
          variety of options with increasing benefits and exclusive features.
        </p>
        <p className={styles.readyToTake}>
          Whether you prefer daily tips, extended periods of coverage, or access
          to our VIP perks, we have the perfect subscription plan for you. By
          subscribing, you gain access to our meticulously analyzed tips, expert
          insights, and comprehensive betting strategies.
        </p>
        <p className={styles.readyToTake}>
          Invest in your betting success today and discover the power of our
          premium subscription service. Don't miss out – upgrade your membership
          now!
        </p>
      </div>
      <div className={styles.whatWeAreContainer}>
        <b>
          <span>{`What we are `}</span>
          <span className={styles.offering}>offering!</span>
        </b>
      </div>
      <Subscriptions_show/>
    </div>
  )
};

export default Subscriptions;
