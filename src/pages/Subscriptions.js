import {useCallback} from "react";
import styles from "./Subscriptions.module.css";
import Header from "../components/Header";

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
      <div className={styles.subcriptionContainer}>
        <div className={styles.subscriptionOptions}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.smsTipsOnly}>SMS TIPS ONLY</div>
          <div className={styles.smswebTips}>{`SMS+WEB TIPS `}</div>
          <div className={styles.smswebTips1}>{`SMS+WEB TIPS `}</div>
          <div className={styles.smswebTips2}>{`SMS+WEB TIPS `}</div>
          <div className={styles.bronze}>
            <div className={styles.bronzeOneDayContainer}>
              <p className={styles.readyToTake}>
                <b>Bronze (One day).</b>
              </p>
              <ul className={styles.x2Ov15un15Ov25un25B}>
                <li className={styles.btts}>
                  <span>{`1X2                                                       `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`OV1.5/UN1.5                                                 `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`OV2.5/UN2.5                                      `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`BTTS                                                                  `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`HT/FT                                                                  `}</span>
                </li>
                <li>
                  <span>{`Super Multibet                                                  `}</span>
                </li>
              </ul>
            </div>
            <b className={styles.type}>TYPE</b>
            <b className={styles.price}>PRICE</b>
            <b className={styles.offer}>OFFER</b>
            <img className={styles.vectorIcon} alt="" src="/vector18.svg" />
            <div className={styles.ksh100KshContainer}>
              <p className={styles.readyToTake}>Ksh 100</p>
              <p className={styles.readyToTake}>Ksh 100</p>
              <p className={styles.readyToTake}>Ksh 150</p>
              <p className={styles.readyToTake}>Ksh 150</p>
              <p className={styles.readyToTake}>Ksh 200</p>
              <p className={styles.readyToTake}>Ksh 300</p>
            </div>
          </div>
          <div className={styles.silver}>
            <div className={styles.silverSevenDaysContainer}>
              <p className={styles.readyToTake}>
                <b>Silver (Seven days tips):</b>
              </p>
              <ul className={styles.x2Ov15un15Ov25un25B}>
                <li className={styles.btts}>
                  <span>{`1X2                                             `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`OV1.5/UN1.5                                        `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`OV2.5/UN2.5                              `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`BTTS                                   `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`HT/FT                            `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`Super Multibet                                                `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`Mega jackpot analysis                               `}</span>
                </li>
                <li>
                  <span>{`Mid-week jackpot analysis                  `}</span>
                </li>
              </ul>
            </div>
            <img className={styles.vectorIcon1} alt="" src="/vector19.svg" />
            <div className={styles.ksh600KshContainer}>
              <p className={styles.readyToTake}>Ksh 600</p>
              <p className={styles.readyToTake}>Ksh 600</p>
              <p className={styles.readyToTake}>Ksh 900</p>
              <p className={styles.readyToTake}>Ksh 900</p>
              <p className={styles.readyToTake}>Ksh 1200</p>
              <p className={styles.readyToTake}>Ksh 1800</p>
              <p className={styles.readyToTake}>{`Ksh 300 `}</p>
              <p className={styles.readyToTake}>{`Ksh 200 `}</p>
            </div>
            <div className={styles.onceAWeek}> (Once a week)</div>
            <div className={styles.onceAWeek1}> (Once a week)</div>
          </div>
          <div className={styles.gold}>
            <div className={styles.gold14DaysContainer}>
              <p className={styles.readyToTake}>
                <b>Gold (14 days tips):</b>
              </p>
              <ul className={styles.x2Ov15un15Ov25un25B}>
                <li className={styles.btts}>
                  <span>1X2</span>
                </li>
                <li className={styles.btts}>
                  <span>{`OV1.5/UN1.5 `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`OV2.5/UN2.5 `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`BTTS `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`HT/FT `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`Super Multibet `}</span>
                </li>
                <li className={styles.btts}>
                  <span>Mega jackpot analysis</span>
                </li>
                <li>
                  <span>Mid-week jackpot analysis</span>
                </li>
              </ul>
            </div>
            <div className={styles.ksh1000KshContainer}>
              <p className={styles.readyToTake}>Ksh 1000</p>
              <p className={styles.readyToTake}>Ksh 1000</p>
              <p className={styles.readyToTake}>Ksh 1500</p>
              <p className={styles.readyToTake}>Ksh 1500</p>
              <p className={styles.readyToTake}>Ksh 2000</p>
              <p className={styles.readyToTake}>Ksh 3000</p>
              <p className={styles.readyToTake}>{`Ksh 500 `}</p>
              <p className={styles.readyToTake}>{`Ksh 300 `}</p>
            </div>
            <div className={styles.onceAWeek2}>(Once a week)</div>
            <div className={styles.onceAWeek3}>(Once a week)</div>
            <img className={styles.vectorIcon2} alt="" src="/vector20.svg" />
          </div>
          <div className={styles.vip}>
            <div className={styles.ksh3000KshContainer}>
              <p className={styles.readyToTake}>Ksh 3000</p>
              <p className={styles.readyToTake}>Ksh 5000</p>
              <p className={styles.readyToTake}>Ksh 8000</p>
            </div>
            <div className={styles.vipWeekly14Container}>
              <p className={styles.readyToTake}>
                <b className={styles.vip2}>VIP</b>
                <span>{` `}</span>
              </p>
              <ul className={styles.weekly14Days30Days}>
                <li className={styles.btts}>
                  <span>Weekly</span>
                </li>
                <li className={styles.btts}>
                  <span>{`14 days `}</span>
                </li>
                <li className={styles.btts}>
                  <span>{`30 days `}</span>
                </li>
              </ul>
              <p className={styles.readyToTake}>
                Access to all platinum features +
              </p>
              <ul className={styles.weekly14Days30Days}>
                <li className={styles.btts}>
                  <span>Weekly smasher bet</span>
                </li>
                <li className={styles.btts}>
                  <span>Mega jackpot analysis</span>
                </li>
                <li>
                  <span>Mid-week jackpot analysis</span>
                </li>
              </ul>
            </div>
            <img className={styles.vectorIcon3} alt="" src="/vector21.svg" />
          </div>
        </div>
        <div className={styles.atLeast150}>
          {" "}
          (At least 150 odds - Once per week)
        </div>
      </div>
    </div>
  )
};

export default Subscriptions;
