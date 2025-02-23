"use client";

import { useEffect, useState } from "react";
import styles from "./categoryDropdown.module.css";

const CategoryDropdown = ({ onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/categories`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category) => {
    setSelectedCategory(category.title); // Use the category's title
    setIsOpen(false);
    onSelectCategory(category.slug); // Pass the slug instead of the whole object
  };

  return (
    <div className={styles.customSelect}>
      <button
        className={styles.selectButton}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedCategory}
      </button>
      {isOpen && (
        <div className={styles.options} role="listbox">
          {categories.map((category) => (
            <button
              key={category.id}
              className={styles.optionButton}
              onClick={() => handleSelect(category)}
              role="option"
              aria-selected={selectedCategory === category.title}
            >
              {category.title} {/* Render the title instead of the object */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
