import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomerSUBPage.module.css";
import CHeader from "../components/CustomerHeader";
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
      <CHeader/>
      
      <b className={styles.subscriptions1} onClick={onSubscriptionsText1Click}>
        Subscriptions
      </b>
      <b
        className={styles.upgradeYourSubscriptionContainer}
        onClick={onUpgradeYourSubscriptionClick}
      >
        <span>Upgrade your</span>
        <span className={styles.subscription}> Subscription</span>
      </b>
      <div
        className={styles.youreCurrentlySubscribedContainer}
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
      <div className={styles.subscriptionOptions}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <div className={styles.smsTipsOnly}>SMS TIPS ONLY</div>
        <div className={styles.smswebTips}>{`SMS+WEB TIPS `}</div>
        <div className={styles.smswebTips1}>{`SMS+WEB TIPS `}</div>
        <div className={styles.smswebTips2}>{`SMS+WEB TIPS `}</div>
        <div className={styles.bronze}>
          <div className={styles.bronzeOneDayContainer}>
            <p className={styles.bronzeOneDay}>
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
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <div className={styles.ksh100KshContainer}>
            <p className={styles.bronzeOneDay}>Ksh 100</p>
            <p className={styles.bronzeOneDay}>Ksh 100</p>
            <p className={styles.bronzeOneDay}>Ksh 150</p>
            <p className={styles.bronzeOneDay}>Ksh 150</p>
            <p className={styles.bronzeOneDay}>Ksh 200</p>
            <p className={styles.bronzeOneDay}>Ksh 300</p>
          </div>
        </div>
        <div className={styles.silver}>
          <div className={styles.silverSevenDaysContainer}>
            <p className={styles.bronzeOneDay}>
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
          <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
          <div className={styles.ksh600KshContainer}>
            <p className={styles.bronzeOneDay}>Ksh 600</p>
            <p className={styles.bronzeOneDay}>Ksh 600</p>
            <p className={styles.bronzeOneDay}>Ksh 900</p>
            <p className={styles.bronzeOneDay}>Ksh 900</p>
            <p className={styles.bronzeOneDay}>Ksh 1200</p>
            <p className={styles.bronzeOneDay}>Ksh 1800</p>
            <p className={styles.bronzeOneDay}>{`Ksh 300 `}</p>
            <p className={styles.bronzeOneDay}>{`Ksh 200 `}</p>
          </div>
          <div className={styles.onceAWeek}> (Once a week)</div>
          <div className={styles.onceAWeek1}> (Once a week)</div>
        </div>
        <div className={styles.gold1}>
          <div className={styles.gold14DaysContainer}>
            <p className={styles.bronzeOneDay}>
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
          <div className={styles.ksh600KshContainer}>
            <p className={styles.bronzeOneDay}>Ksh 1000</p>
            <p className={styles.bronzeOneDay}>Ksh 1000</p>
            <p className={styles.bronzeOneDay}>Ksh 1500</p>
            <p className={styles.bronzeOneDay}>Ksh 1500</p>
            <p className={styles.bronzeOneDay}>Ksh 2000</p>
            <p className={styles.bronzeOneDay}>Ksh 3000</p>
            <p className={styles.bronzeOneDay}>{`Ksh 500 `}</p>
            <p className={styles.bronzeOneDay}>{`Ksh 300 `}</p>
          </div>
          <div className={styles.onceAWeek2}>(Once a week)</div>
          <div className={styles.onceAWeek3}>(Once a week)</div>
          <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
        </div>
        <div className={styles.vip}>
          <div className={styles.ksh3000KshContainer}>
            <p className={styles.bronzeOneDay}>Ksh 3000</p>
            <p className={styles.bronzeOneDay}>Ksh 5000</p>
            <p className={styles.bronzeOneDay}>Ksh 8000</p>
          </div>
          <div className={styles.vipWeekly14Container}>
            <p className={styles.bronzeOneDay}>
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
            <p className={styles.bronzeOneDay}>
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
          <img className={styles.vectorIcon3} alt="" src="/vector4.svg" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSUBPage;
