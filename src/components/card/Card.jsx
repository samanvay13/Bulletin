import React from "react";
import styles from './card.module.css';
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/p1.png' alt="image" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>23.09.2024 - </span>
          <span className={styles.category}>FRONTEND</span>
        </div>
        <Link href='/'>
          <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Est architecto unde ipsum quae earum a necessitatibus
          quisquam molestias, labore sequi aut optio eum praesentium
          ullam obcaecati cumque facere voluptatem provident!
        </p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
}

export default Card;