import styles from "./featuredSkeleton.module.css";

const FeaturedSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>

      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  );
};

export default FeaturedSkeleton;
