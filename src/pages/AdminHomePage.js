import AdminContainer from "../components/AdminContainer";
import AdminContent from "../components/AdminContent";
import styles from "./AdminHomePage.module.css";

const AdminHomePage = () => {
  return (
    <>
      <AdminContainer>
        <div className={styles.dashboardContainer}>
          <AdminContent title="Latest Updates">
            {" "}
            <div className={styles.content}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span> 
              <span></span>
            </div> 
          </AdminContent>
          <AdminContent title="Site Growth">
            <select className={styles.showForLast}>
              <option value={7}>Showing for last 7 days</option>
              <option value={15}>Showing for last 15 days</option>
              <option value={30}>Showing for last 30 days</option>
            </select>
            <div></div>
          </AdminContent>
        </div>
      </AdminContainer>
    </>
  );
};

export default AdminHomePage;
