"use client";

import React from "react";
import styles from './navbar.module.css';
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import { Lobster } from 'next/font/google';

const lobster = Lobster({ weight: '400', subsets: ['latin'] });

const Navbar = () => {
  const openGmail = () => {
    const email = "tripathisamanvay13@gmail.com";
    const subject = encodeURIComponent("Inquiry from Bulletin");
    const body = encodeURIComponent("Hello, I’d like to get in touch with you...");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
    window.open(url, "_blank");
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image className={styles.logoImage} src="/logo.png" alt="facebook" width={50} height={50}/>
        </Link>
      </div>
      <div className={`${styles.title} ${lobster.className}`}>bulletin</div>
      <div className={styles.links}>
        <Link href='/' className={styles.link}>Home</Link>
        <Link href='/about' className={styles.link}>About</Link>
        <p className={styles.link} onClick={openGmail}>Contact Us</p>
        <AuthLinks/>
      </div>
    </nav>
  );
}

export default Navbar;