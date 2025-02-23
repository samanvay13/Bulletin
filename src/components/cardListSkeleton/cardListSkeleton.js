import styles from "./cardListSkeleton.module.css";

const CardListSkeleton = () => {
  return (
    <>
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>

      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>

      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>

      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
    </>
  );
};

export default CardListSkeleton;
