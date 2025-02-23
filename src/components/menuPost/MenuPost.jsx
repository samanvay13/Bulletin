import React from "react";
import styles from './menuPost.module.css';
import Link from "next/link";
import Image from "next/image";
import { timeAgo } from "@/utils/timeAgo";

const MenuPost = ({ item }) => {
  return (
    <Link href={`/posts/${item.slug}`} className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src={item.img} alt="image" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.frontend}`}>
          {item.catSlug}
        </span>
        <h3 className={styles.postTitle}>{item.title}</h3>
        <div className={styles.details}>
          <span className={styles.date}>{timeAgo(item.createdAt)}</span>
        </div>
      </div>
    </Link>
  );
}

export default MenuPost;