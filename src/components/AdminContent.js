import styles from "./AdminContent.module.css"

const AdminContent = ({ children, title }) => {
  const [ header, content ] = children;
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentHeader}>
        <h2 className={styles.title}>{title}</h2>
        <div>{header}</div>
      </div>
      <div className={styles.contentBody}>{content}</div>
    </div>
  );
};

export default AdminContent;
