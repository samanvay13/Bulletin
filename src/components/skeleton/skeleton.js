import styles from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonButton}></div>
      </div>
      <div className={styles.skeletonImage}></div>
    </div>
  );
};

export default Skeleton;
