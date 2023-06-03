import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./SubcriptionPhone.module.css";
const SubcriptionPhone = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onWhatWeAreClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onJoinNowContainerClick = useCallback(() => {
    navigate("/signupphone");
  }, [navigate]);

  return (
    <>
      <div className={styles.subcriptionPhone}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.bwk}>BWK</div>
            <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
            <img
              className={styles.sideNavIcon}
              alt=""
              src="/sidenav1.svg"
              onClick={openSideBar}
            />
          </div>
        </div>
        <b className={styles.subscriptions} onClick={onSubscriptionsTextClick}>
          Subscriptions
        </b>
        <b className={styles.whatWeAreContainer} onClick={onWhatWeAreClick}>
          <span>{`What we are `}</span>
          <span className={styles.offering}>offering!</span>
        </b>
        <div className={styles.readyToTakeContainer}>
          <p
            className={styles.readyToTake}
          >{`Ready to take your betting journey to the next level? `}</p>
          <p className={styles.readyToTake}>
            Choose from our range of subscription plans tailored to suit your
            needs. Our Bronze, Silver, Gold, Platinum, and VIP levels offer you
            a variety of options with increasing benefits and exclusive
            features. 
          </p>
          <p className={styles.readyToTake}>
            Whether you prefer daily tips, extended periods of coverage, or
            access to our VIP perks, we have the perfect subscription plan for
            you. By subscribing, you gain access to our meticulously analyzed
            tips, expert insights, and comprehensive betting strategies.
          </p>
          <p className={styles.readyToTake}>
             Invest in your betting success today and discover the power of our
            premium subscription service. Don't miss out – upgrade your
            membership now!
          </p>
        </div>
        <div className={styles.subscriptionOptions}>
          <img className={styles.image5Icon} alt="" src="/image-511@2x.png" />
          <b className={styles.type}>TYPE</b>
          <b className={styles.price}>PRICE</b>
          <b className={styles.offer}>OFFER</b>
          <div className={styles.bronze}>
            <div className={styles.bronzeOneDayContainer}>
              <p className={styles.readyToTake}>
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
            <img className={styles.vectorIcon} alt="" src="/vector61.svg" />
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
            <img className={styles.vectorIcon1} alt="" src="/vector71.svg" />
            <div className={styles.smswebTips}>{`SMS+WEB TIPS `}</div>
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
            <div className={styles.smswebTips1}>{`SMS+WEB TIPS `}</div>
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
            <img className={styles.vectorIcon2} alt="" src="/vector81.svg" />
          </div>
          <div className={styles.vip}>
            <div className={styles.ksh3000KshContainer}>
              <p className={styles.readyToTake}>Ksh 3000</p>
              <p className={styles.readyToTake}>Ksh 5000</p>
              <p className={styles.readyToTake}>Ksh 8000</p>
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
              <p className={styles.readyToTake}>
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
            <img className={styles.vectorIcon3} alt="" src="/vector91.svg" />
            <div className={styles.smswebTips2}>{`SMS+WEB TIPS `}</div>
          </div>
        </div>
        <div className={styles.joinNow} onClick={onJoinNowContainerClick}>
          <img
            className={styles.joinNowChild}
            alt=""
            src="/rectangle-321.svg"
          />
          <b className={styles.joinNow1}>Join Now</b>
        </div>
      </div>
      {isSideBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSideBar}
        >
          <SideBar onClose={closeSideBar} />
        </PortalPopup>
      )}
    </>
  );
};

export default SubcriptionPhone;
