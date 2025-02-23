"use client";

import { useRouter } from "next/navigation";
import styles from "./deleteButton.module.css";

const DeleteButton = ({ slug }) => {
    const router = useRouter();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (!confirmDelete) return;
    
        try {
          const res = await fetch(`/api/posts/${slug}`, {
            method: "DELETE",
          });
    
          if (res.ok) {
            alert("Post deleted successfully!");
            router.push("/");
          } else {
            alert("Failed to delete post.");
          }
        } catch (err) {
          console.error(err);
          alert("An error occurred while deleting the post.");
        }
    };

    return (
        <div className={styles.deleteContainer}>
            <button className={styles.deleteButton} onClick={handleDelete}>
                Delete Post
            </button>
        </div>
    );
}

export default DeleteButton;