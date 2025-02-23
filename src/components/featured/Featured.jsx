"use client";

import { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import FeatutredSkeleton from "../featuredSkeleton/featuredSkeleton";

const getData = async (slug) => {
  try {
    const res = await fetch(`/api/posts/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Featured = () => {
  const slug = "the-role-of-transformer-models-in-advancing-ai";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(slug).then((postData) => {
      setData(postData);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Stay ahead with Bulletin!</b> Your source for the latest in web development.
      </h1>
      <FeatutredSkeleton />
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Stay ahead with Bulletin!</b> Your source for the latest in web development.
      </h1>
      <div className={styles.post}>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image src={data.img} alt={data.title} fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data?.title}</h1>
          <p className={styles.postDescription} dangerouslySetInnerHTML={{ __html: data?.desc.substring(0,450) + "..." }}/>
          <Link href={`/posts/${slug}`}>
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
