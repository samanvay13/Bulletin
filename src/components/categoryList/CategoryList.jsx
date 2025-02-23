"use client";

import React, { useEffect, useState } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import CategorySkeleton from "../categorySkeleton/categorySkeleton";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/categories`, { cache: "no-store" });

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      
      {loading ? ( 
        <CategorySkeleton />
      ) : (
        <div className={styles.categories}>
          {categories?.map((item) => (
            <Link
              href="/"
              className={`${styles.category} ${styles[item.slug]}`}
              key={item.id}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              <p className={styles.categoryText}>{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
