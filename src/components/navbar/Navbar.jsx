import React from "react";
import styles from './navbar.module.css';
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
      <div className={styles.logo}>bulletin</div>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
        <AuthLinks/>
      </div>
    </nav>
  );
}

export default Navbar;