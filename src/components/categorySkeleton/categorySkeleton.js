import styles from "./categorySkeleton.module.css";

const CategorySkeleton = () => {
  return (
    <>
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonImage}></div>
    </div>
    </>
  );
};

export default CategorySkeleton;
