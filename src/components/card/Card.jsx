import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { timeAgo } from "@/utils/timeAgo";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {timeAgo(item.createdAt)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,250) + "..." }}/>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          <button className={styles.button}>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;