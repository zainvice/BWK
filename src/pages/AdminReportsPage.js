import AdminContainer from "../components/AdminContainer";
import AdminContent from "../components/AdminContent";
import styles from "./AdminReportsPage.module.css";
const AdminReportsPage = () => {
  return (
    <AdminContainer>
      <AdminContent>
        <select className={styles.showForLast}>
          <option value={7}>Showing for last 7 days</option>
          <option value={15}>Showing for last 15 days</option>
          <option value={30}>Showing for last 30 days</option>
        </select>{" "}
      </AdminContent>
    </AdminContainer>
  );
};

export default AdminReportsPage;
