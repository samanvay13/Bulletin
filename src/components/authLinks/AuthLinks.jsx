"use client"
import React, { useState } from "react";
import styles from './authLinks.module.css';
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  //temporary
  const status = "notAuthenticated";
  return (
    <div className={styles.container}>
      {status === "notAuthenticated" ? (
        <Link href='/login' className={styles.link}>Login</Link>
      ) : (
        <Link href='/login' className={styles.link}>Logout</Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === "notAuthenticated" ? (
            <Link href='/login'>Login</Link>
          ) : (
            <Link href='/login'>Logout</Link>
          )}
            </div>
          )}
    </div>
  );
}

export default AuthLinks;