import styles from "./AdminHeader.module.css"
const AdminHeader = ({children}) => {
    return(
        <div className={styles.adminLayout}>
            <div className={styles.adminHeader}>
                <h1 className={styles.pageTitle}>Dashboard</h1>
                <div className={styles.adminOptions}>
                    <p className={styles.welcome}>{"Welcome "}<span>Admin</span></p>
                    <label className={styles.notifications}>
                        <span>Icon</span>
                        <input type="checkbox" />
                    </label>
                    <a className={styles.support}>
                        <img class={styles.supportImg} alt="" src="/image-41@2x.png" />
                    </a>
                </div>
            </div>
            <div className={styles.adminContent}>
                {children}
            </div>
        </div>
    );
}

export default AdminHeader;