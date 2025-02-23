"use client";

import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import CardListSkeleton from "../cardListSkeleton/cardListSkeleton";

const CardList = () => {
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
      <h1 className={styles.title}>⏱️ Recent Posts</h1>
      <div className={styles.posts}>
        {posts.length > 0 ? (
          posts.map((item, index) => (
            <Card item={item} key={item._id || index} />
          ))
        ) : (
          <CardListSkeleton/>
        )}
      </div>
    </div>
  );
};

export default CardList;
