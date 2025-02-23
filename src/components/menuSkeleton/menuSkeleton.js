import styles from "./menuSkeleton.module.css";

const MenuSkeleton = () => {
  return (
    <>
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
      </div>
    </div>
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
      </div>
    </div>
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
      </div>
    </div>
    </>
  );
};

export default MenuSkeleton;
