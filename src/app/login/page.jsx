"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  });
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image className={styles.logoImage} src="/logo.png" alt="facebook" width={50} height={50}/>
        </div>
        <h1 className={styles.title}>
          <b>Welcome to Bulletin!</b> Sign-in with Google for the latest in web development.
        </h1>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <div className={styles.googleLogo}>
            <Image className={styles.logoImage} src="/google.png" alt="facebook" width={30} height={30}/>
          </div>
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;