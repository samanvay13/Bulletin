import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <div className={styles.imgContainer}>
          <Image src='/frontend.png' alt="image" fill className={styles.image} />
        </div>
        <div className={styles.imgContainer}>
          <Image src='/backend.png' alt="image" fill className={styles.image} />
        </div>
        <div className={styles.imgContainer}>
          <Image src='/fullstack.png' alt="image" fill className={styles.image} />
        </div>
      </div>
      <h1 className={styles.title}>
        <b>Build and optimize with !</b> Your all-in-one hub for web development success.
      </h1>
      <div className={styles.images}>
        <div className={styles.imgContainer}>
          <Image src='/ai.png' alt="image" fill className={styles.image} />
        </div>
        <div className={styles.imgContainer}>
          <Image src='/devops.png' alt="image" fill className={styles.image} />
        </div>
        <div className={styles.imgContainer}>
          <Image src='/seo.png' alt="image" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default About;