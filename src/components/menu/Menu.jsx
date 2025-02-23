"use client";

import React, { useEffect, useState } from "react";
import styles from './menu.module.css';
import MenuPost from "../menuPost/MenuPost";
import MenuSkeleton from "../menuSkeleton/menuSkeleton";

const Menu = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/posts`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>🔥 Most Popular</h1>
      <div className={styles.items}>
        {posts.length > 0 ? (
          posts?.map((item, index) => (
            <MenuPost item={item} key={item._id || index} />
          ))
        ) : (
          <MenuSkeleton/>
        )}
      </div>
      <h2 className={styles.subtitle}>{"Bulletin's Pick"}</h2>
      <h1 className={styles.title}>🧁 Recommended</h1>
      <div className={styles.items}>
        {posts.length > 0 ? (
          posts?.map((item, index) => (
            <MenuPost item={item} key={item._id || index} />
          ))
        ) : (
          <MenuSkeleton/>
        )}
      </div>
    </div>
  );
}

export default Menu;