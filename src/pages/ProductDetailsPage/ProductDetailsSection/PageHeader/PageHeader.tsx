import styles from "./PageHeader.module.css";

export const PageHeader = () => {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.title}>TV COLLECTION</h1>
      <div>
        <p className={styles.subTitle}>HOME / PRODUCT / TV COLLECTION</p>
      </div>
    </div>
  );
};
