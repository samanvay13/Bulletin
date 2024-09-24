import React from "react";
import styles from './menuPost.module.css';
import Link from "next/link";
import Image from "next/image";

const MenuPost = () => {
  return (
    <Link href='/' className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src='/p1.png' alt="image" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.frontend}`}>
          Frontend
        </span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.details}>
          <span className={styles.username}>John Doe - </span>
          <span className={styles.date}>23.09.2024</span>
        </div>
      </div>
    </Link>
  );
}

export default MenuPost;