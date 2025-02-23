"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const openGmail = () => {
    const email = "tripathisamanvay13@gmail.com";
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent("Hello, I’d like to get in touch with you...");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
    window.open(url, "_blank");
  };
  
  return (
    <>
      <div className={styles.container}>
        {status === "authenticated" && (
          <>
            <span className={styles.logoutLink} onClick={signOut}>
              Logout
            </span>
          </>
        )}
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link href="/" className={styles.burgerLink}>Homepage</Link>
            <Link href="/about" className={styles.burgerLink}>About</Link>
            <p  className={styles.burgerLink} onClick={openGmail}>Contact</p>
            {status === "authenticated" && (
              <>
                <span className={styles.burgerLogoutLink} onClick={signOut}>Logout</span>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AuthLinks;