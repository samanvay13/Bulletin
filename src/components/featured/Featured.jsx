import React from "react";
import styles from './featured.module.css';
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Stay ahead with Bulletin!</b> Your source for the latest in web development.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/featured.png' alt='' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Est architecto unde ipsum quae earum a necessitatibus
            quisquam molestias, labore sequi aut optio eum praesentium
            ullam obcaecati cumque facere voluptatem provident!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;