import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";
import styles from "./AdminContainer.module.css";

const AdminContainer = ({ children }) => {
  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminLeft}>
        <AdminSideBar />
      </div>
      <div className={styles.adminRight}>
        <AdminHeader>
          {children}
        </AdminHeader>
      </div>
    </div>
  );
};

export default AdminContainer;
