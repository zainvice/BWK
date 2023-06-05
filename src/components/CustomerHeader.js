import { useCallback, useState } from 'react'
import { useNavigate } from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import SideBar from "../components/CustSideBar";
import styles from './CHeader.module.css'


const CHeader = () => {
    const navigate = useNavigate();
    const [isSideBarOpen, setSideBarOpen] = useState(false);



    const onHomeTextClick = useCallback(() => {
        navigate("/customer-homepage");
    }, [navigate]);

    const onSubscriptionsTextClick = useCallback(() => {
        navigate("/customer-subpage");
    }, [navigate]);

   

    const onLiveScoreTextClick = useCallback(() => {
        navigate("/customer-livescorepage");
    }, [navigate]);



    const closeSideBar = useCallback(() => (
        setSideBarOpen(!isSideBarOpen)
    ), [isSideBarOpen])
    const onLogoutClick = useCallback(() => {
        navigate("/homepage");
      }, [navigate]);  
    const onCSupportClick = useCallback(() => {
        navigate("/customer-supportpage");
      }, [navigate]); 
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <div className={styles.bwk}>BWK</div>
                    <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
                </div>
                <div className={styles.navbar}>
                    <div className={styles.home} onClick={onHomeTextClick}>
                        Home
                    </div>
                    <div
                        className={styles.subscriptions1}
                        onClick={onSubscriptionsTextClick}
                    >
                        Subscriptions
                    </div>
                    
                    <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
                        Live Score
                    </div>
                    
                </div>

                
                    <div className={styles.signup + " " + styles.selectedLogin} onClick={onLogoutClick}>
                        <a className={styles.signUp}>Logout</a>
                    </div>
                    <img
                         className={styles.CSupport}
                        alt=""
                        src="/image-41@2x.png"
                        onClick={onCSupportClick}
                     />
                <div className={styles.sideNav}><img
                    className={styles.sideNavIcon}
                    alt=""
                    src="/sidenav1.svg"
                    onClick={closeSideBar}
                /></div>
            </div>
            {isSideBarOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Top right"
                    onOutsideClick={closeSideBar}
                >
                    <SideBar onClose={closeSideBar} />
                </PortalPopup>
            )}
        </>
    )
}

export default CHeader