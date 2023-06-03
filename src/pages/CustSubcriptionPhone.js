import { useState, useCallback } from "react";
import CustSideBar from "../components/CustSideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./CustSubcriptionPhone.module.css";
const CustSubcriptionPhone = () => {
  const [isCustSideBarOpen, setCustSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openCustSideBar = useCallback(() => {
    setCustSideBarOpen(true);
  }, []);

  const closeCustSideBar = useCallback(() => {
    setCustSideBarOpen(false);
  }, []);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onUpgradeYourSubscriptionClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  return (
    <>
      <div className={styles.custSubcriptionPhone}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
            <img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav1.svg"
              onClick={openCustSideBar}
            />
          </div>
        </div>
        <b className={styles.subscriptions} onClick={onSubscriptionsTextClick}>
          Subscriptions
        </b>
        <b
          className={styles.upgradeYourSubscriptionContainer}
          onClick={onUpgradeYourSubscriptionClick}
        >
          <span>{`Upgrade your `}</span>
          <span className={styles.subscription}>subscription!</span>
        </b>
        <div className={styles.youreCurrentlySubscribedContainer}>
          <span>{`You’re currently subscribed to `}</span>
          <b className={styles.subscription}>Gold Super Multi-Bet</b>
        </div>
        <div className={styles.subscriptionOptions}>
          <img className={styles.image5Icon} alt="" src="/image-51@2x.png" />
          <b className={styles.type}>TYPE</b>
          <b className={styles.price}>PRICE</b>
          <b className={styles.offer}>OFFER</b>
          <div className={styles.bronze}>
            <div className={styles.bronzeOneDayContainer}>
              <p className={styles.bronzeOneDay}>
                <b>Bronze (One day).</b>
              </p>
              <ul className={styles.x2Ov15un15Ov25un25B}>
                <li className={styles.btts}>
                  <span>
                    <span>{`1X2                                                       `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`OV1.5/UN1.5                                                 `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`OV2.5/UN2.5                                      `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`BTTS                                                                  `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`HT/FT                                                                  `}</span>
                  </span>
                </li>
                <li>
                  <span>
                    <span>{`Super Multibet    `}</span>
                    <span
                      className={styles.span}
                    >{`                                              `}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.smsTipsOnly}>SMS TIPS ONLY</div>
            <img className={styles.vectorIcon} alt="" src="/vector110.svg" />
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
                  <span>
                    <span>{`1X2                                             `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`OV1.5/UN1.5                                        `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`OV2.5/UN2.5                              `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`BTTS                                   `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`HT/FT                            `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`Super Multibet                                                `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`Mega jackpot analysis                               `}</span>
                  </span>
                </li>
                <li>
                  <span>
                    <span>{`Mid-week jackpot analysis              `}</span>
                    <span className={styles.span}>{`    `}</span>
                  </span>
                </li>
              </ul>
            </div>
            <img className={styles.vectorIcon1} alt="" src="/vector22.svg" />
            <div className={styles.smswebTips}>{`SMS+WEB TIPS `}</div>
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
          <div className={styles.gold}>
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
            <div className={styles.smswebTips1}>{`SMS+WEB TIPS `}</div>
            <div className={styles.ksh1000KshContainer}>
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
            <img className={styles.vectorIcon2} alt="" src="/vector31.svg" />
          </div>
          <div className={styles.vip}>
            <div className={styles.ksh3000KshContainer}>
              <p className={styles.bronzeOneDay}>Ksh 3000</p>
              <p className={styles.bronzeOneDay}>Ksh 5000</p>
              <p className={styles.bronzeOneDay}>Ksh 8000</p>
            </div>
            <div className={styles.vipWeekly14Container}>
              <p className={styles.vip1}>
                <b className={styles.vip2}>VIP</b>
                <span>
                  <span>{` `}</span>
                </span>
              </p>
              <ul className={styles.weekly14Days30Days}>
                <li className={styles.btts}>
                  <span>
                    <span>Weekly</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`14 days `}</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>{`30 days `}</span>
                  </span>
                </li>
              </ul>
              <p className={styles.bronzeOneDay}>
                <span>
                  <span>Access to all platinum features +</span>
                </span>
              </p>
              <ul className={styles.weekly14Days30Days}>
                <li className={styles.btts}>
                  <span>
                    <span>Weekly smasher bet</span>
                  </span>
                </li>
                <li className={styles.btts}>
                  <span>
                    <span>Mega jackpot analysis</span>
                  </span>
                </li>
                <li>
                  <span>
                    <span>Mid-week jackpot analysis</span>
                  </span>
                </li>
              </ul>
            </div>
            <img className={styles.vectorIcon3} alt="" src="/vector41.svg" />
            <div className={styles.smswebTips2}>{`SMS+WEB TIPS `}</div>
          </div>
        </div>
        <div className={styles.upgrade}>
          <img
            className={styles.upgradeChild}
            alt=""
            src="/rectangle-321.svg"
          />
          <b className={styles.upgrade1}>Upgrade</b>
        </div>
      </div>
      {isCustSideBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCustSideBar}
        >
          <CustSideBar onClose={closeCustSideBar} />
        </PortalPopup>
      )}
    </>
  );
};

export default CustSubcriptionPhone;
