import React from "react";
import styles from './authLinks.module.css';
import Link from "next/link";

const AuthLinks = () => {
  //temporary
  const status = "notAuthenticated";
  return (
    <div className={styles.container}>
      {status === "notAuthenticated" ? (
        <Link href='/login'>Login</Link>
      ) : (
        <Link href='/login'>Logout</Link>
      )}
    </div>
  );
}

export default AuthLinks;