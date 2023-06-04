import { useCallback, useState } from 'react'
import { useNavigate } from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import SideBar from "../components/SideBar";
import styles from './Header.module.css'


const Header = () => {
    const navigate = useNavigate();
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const onSignupContainerClick = useCallback(() => {
        navigate("/signup");
    }, [navigate]);

    const onLOginContainerClick = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    const onHomeTextClick = useCallback(() => {
        navigate("/homepage");
    }, [navigate]);

    const onSubscriptionsTextClick = useCallback(() => {
        navigate("/subscriptions");
    }, [navigate]);

    const onSMSBettingTextClick = useCallback(() => {
        navigate("/sms-betting");
    }, [navigate]);

    const onWebBettingTextClick = useCallback(() => {
        navigate("/web-betting");
    }, [navigate]);

    const onLiveScoreTextClick = useCallback(() => {
        navigate("/live-score");
    }, [navigate]);

    const onContactUsTextClick = useCallback(() => {
        navigate("/contact-us");
    }, [navigate]);

    const closeSideBar = useCallback(() => (
        setSideBarOpen(!isSideBarOpen)
    ), [isSideBarOpen])

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
                    <div className={styles.smsBetting} onClick={onSMSBettingTextClick}>
                        SMS Betting
                    </div>
                    <div className={styles.webBetting} onClick={onWebBettingTextClick}>
                        Web Betting
                    </div>
                    <div className={styles.liveScore} onClick={onLiveScoreTextClick}>
                        Live Score
                    </div>
                    <div className={styles.contactUs} onClick={onContactUsTextClick}>
                        Contact Us
                    </div>
                </div>

                <div className={styles.loginsignup}>
                    <div className={styles.login} onClick={onLOginContainerClick}>
                        <a className={styles.login1}>Login</a>
                    </div>
                    <div className={styles.signup + " " + styles.selectedLogin} onClick={onSignupContainerClick}>
                        <a className={styles.signUp}>Sign Up</a>
                    </div>
                </div>
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
                    placement="Left"
                    onOutsideClick={closeSideBar}
                >
                    <SideBar onClose={closeSideBar} />
                </PortalPopup>
            )}
        </>
    )
}

export default Header