import React from "react";
import styles from './navbar.module.css';
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={25} height={25}/>
        <Image src="/instagram.png" alt="instagram" width={25} height={25}/>
        <Image src="/twitter.png" alt="twitter" width={25} height={25}/>
      </div>
      <div className={styles.logo}>.bulletin</div>
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