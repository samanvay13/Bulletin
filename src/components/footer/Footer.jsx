"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Lobster } from 'next/font/google';

const lobster = Lobster({ weight: '400', subsets: ['latin'] });

const Footer = () => {
  const openGmail = () => {
    const email = "tripathisamanvay13@gmail.com";
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent("Hello, I’d like to get in touch with you...");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={`${styles.logoText} ${lobster.className}`}>bulletin</h1>
        </div>
        <p className={styles.desc}>
          Bulletin is your go-to source for the latest trends in Web Development, AI, DevOps, and SEO, keeping you informed and ahead of the curve. We bring expert insights and industry updates to help you navigate the ever-evolving tech landscape. Whether you are a business owner, developer, or tech enthusiast, our content empowers you with cutting-edge knowledge to build, optimize, and innovate for a smarter digital future.
        </p >
        <p className={styles.copyright}>
          © 2024 Bulletin. All rights reserved.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.link}>Homepage</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/" className={styles.link}>Categories</Link>
          <p className={styles.link} onClick={openGmail}>Contact</p>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" className={styles.link}>Web Dev</Link>
          <Link href="/" className={styles.link}>AI</Link>
          <Link href="/" className={styles.link}>DevOps</Link>
          <Link href="/" className={styles.link}>SEO</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;