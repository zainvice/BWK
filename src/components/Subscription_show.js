

import styles from './Subscription_show.module.css'


const subscriptions_show = () => {
    
    return (
      <div className={styles.subscriptionsContainer}>
        <img className={styles.image} alt="" src="/image-5@2x.png" />
          <div className={styles.subscriptionOptions}>
            <b className={styles.optionType}>TYPE</b>
            <b className={styles.optionPrice}>PRICE</b>
            <b className={styles.optionOffer}>OFFER</b>
            <div className={styles.optionTips}>SMS TIPS ONLY</div>
            <div className={styles.optionTipsW}>SMS+WEB TIPS</div>
            <div className={styles.optionTipsS}>SMS+WEB TIPS</div>
            <div className={styles.optionTipsWS}>SMS+WEB TIPS</div>
            <div className={styles.optionTipsWSA}>(At least 150 odds - Once per week)</div> 
            <div className={`${styles.subscriptionPackage} ${styles.bronze}`}>
              <div className={styles.packageContainer}>
                <p className={styles.packageTitle}>
                  <b>Bronze (One day)</b>
                </p>
                <ul className={styles.packageFeatures}>
                  <li><span>1X2</span></li>
                  <li><span>OV1.5/UN1.5</span></li>
                  <li><span>OV2.5/UN2.5</span></li>
                  <li><span>BTTS</span></li>
                  <li><span>HT/FT</span></li>
                  <li><span>Super Multibet</span></li>
                </ul>
              </div>
              <img className={styles.packageIconB} alt="" src="/vector18.svg" />
              <div className={styles.packagePrices}>
                <p className={styles.priceItem}>Ksh 100</p>
                <p className={styles.priceItem}>Ksh 100</p>
                <p className={styles.priceItem}>Ksh 150</p>
                <p className={styles.priceItem}>Ksh 150</p>
                <p className={styles.priceItem}>Ksh 200</p>
                <p className={styles.priceItem}>Ksh 300</p>
              </div>
            </div>
              
            <div className={`${styles.subscriptionPackage} ${styles.silver}`}>
              <div className={styles.packageContainer}>
                <p className={styles.packageTitle}>
                  <b>Silver (Seven days tips)</b>
                </p>
                <ul className={styles.packageFeatures}>
                  <li><span>1X2</span></li>
                  <li><span>OV1.5/UN1.5</span></li>
                  <li><span>OV2.5/UN2.5</span></li>
                  <li><span>BTTS</span></li>
                  <li><span>HT/FT</span></li>
                  <li><span>Super Multibet</span></li>
                  <li><span>Mega jackpot analysis</span></li>
                  <li><span>Mid-week jackpot analysis</span></li>
                </ul>
              </div>
              <img className={styles.packageIconS} alt="" src="/vector19.svg" />
              <div className={styles.packagePrices}>
                <p className={styles.priceItem}>Ksh 600</p>
                <p className={styles.priceItem}>Ksh 600</p>
                <p className={styles.priceItem}>Ksh 900</p>
                <p className={styles.priceItem}>Ksh 900</p>
                <p className={styles.priceItem}>Ksh 1200</p>
                <p className={styles.priceItem}>Ksh 1800</p>
                <p className={styles.priceItem}>Ksh 300</p>
                <p className={styles.priceItem}>Ksh 200</p>
              </div>
              <div className={styles.packageFrequency}>(Once a week)</div>
            </div>
              
            <div className={`${styles.subscriptionPackage} ${styles.gold}`}>
              <div className={styles.packageContainer}>
                <p className={styles.packageTitle}>
                  <b>Gold (14 days tips)</b>
                </p>
                <ul className={styles.packageFeatures}>
                  <li><span>1X2</span></li>
                  <li><span>OV1.5/UN1.5</span></li>
                  <li><span>OV2.5/UN2.5</span></li>
                  <li><span>BTTS</span></li>
                  <li><span>HT/FT</span></li>
                  <li><span>Super Multibet</span></li>
                  <li><span>Mega jackpot analysis</span></li>
                  <li><span>Mid-week jackpot analysis</span></li>
                </ul>
              </div>
              <div className={styles.packagePrices}>
                <p className={styles.priceItem}>Ksh 1000</p>
                <p className={styles.priceItem}>Ksh 1000</p>
                <p className={styles.priceItem}>Ksh 1500</p>
                <p className={styles.priceItem}>Ksh 1500</p>
                <p className={styles.priceItem}>Ksh 2000</p>
                <p className={styles.priceItem}>Ksh 3000</p>
                <p className={styles.priceItem}>Ksh 500</p>
                <p className={styles.priceItem}>Ksh 300</p>
              </div>
              <div className={styles.packageFrequency}>(Once a week)</div>
              <img className={styles.packageIcon} alt="" src="/vector20.svg" />
            </div>
              
            <div className={`${styles.subscriptionPackage} ${styles.vip}`}>
              <div className={styles.packagePricesV}>
                <p className={styles.priceItem}>Ksh 3000</p>
                <p className={styles.priceItem}>Ksh 5000</p>
                <p className={styles.priceItem}>Ksh 8000</p>
              </div>
              <div className={styles.packageContainer}>
                <p className={`${styles.packageTitle} ${styles.packageVip}`}>
                  <b>VIP</b>
                </p>
                <ul className={styles.packageFeatures}>
                  <li><span>Weekly</span></li>
                  <li><span>14 days</span></li>
                  <li><span>30 days</span></li>
                </ul>
                <p className={styles.readyToTake}>Access to all platinum features +</p>
                <ul className={styles.packageFeatures}>
                  <li><span>Weekly smasher bet</span></li>
                  <li><span>Mega jackpot analysis</span></li>
                  <li><span>Mid-week jackpot analysis</span></li>
                </ul>
              </div>
              <img className={styles.packageIconV} alt="" src="/vector21.svg" />
            </div>
              
          </div>
         
          </div>
          
   
    )
}

export default subscriptions_show
