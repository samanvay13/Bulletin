import React from "react";
import styles from './categoryList.module.css';
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=frontend' className={`${styles.category} ${styles.frontend}`}>
          <Image src="/frontend.png" alt="frontend" width={32} height={32} className={styles.image} />
          Frontend
        </Link>

        <Link href='/blog?cat=backend'className={`${styles.category} ${styles.backend}`}>
          <Image src="/backend.png" alt="backend" width={32} height={32} className={styles.image} />
          Backend
        </Link>

        <Link href='/blog?cat=fullstack'className={`${styles.category} ${styles.fullstack}`}>
          <Image src="/fullstack.png" alt="fullstack" width={32} height={32} className={styles.image} />
          FullStack
        </Link>

        <Link href='/blog?cat=ai'className={`${styles.category} ${styles.ai}`}>
          <Image src="/ai.png" alt="ai" width={32} height={32} className={styles.image} />
          AI
        </Link>

        <Link href='/blog?cat=devops'className={`${styles.category} ${styles.devops}`}>
          <Image src="/devops.png" alt="devops" width={32} height={32} className={styles.image} />
          DevOps
        </Link>

        <Link href='/blog?cat=seo'className={`${styles.category} ${styles.seo}`}>
          <Image src="/seo.png" alt="seo" width={32} height={32} className={styles.image} />
          SEO
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;