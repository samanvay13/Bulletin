import React from "react";
import styles from './menu.module.css';
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <MenuPost />
        <MenuPost />
        <MenuPost />
        <MenuPost />
        <MenuPost />
      </div>
    </div>
  );
}

export default Menu;