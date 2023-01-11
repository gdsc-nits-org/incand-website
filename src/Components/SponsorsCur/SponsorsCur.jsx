import React from "react";
import styles from "./SponsorsCur.module.scss";
const SponsorsCur = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <p>Current Sponsors</p>
      </div>
      <div className={styles.body}>
        <img src="/logos/fireLogo.svg" alt="fire logo " className={styles.imgs} />
        <div className={styles.gallery}>
          <div className={styles.glass}>
            <img
              src="/logos/asus.png"
              alt="sponosr "
              className={`${styles.Spons} ${styles.img1}`}
            />
          </div>
          <div className={styles.glass}>
            <img
              src="/logos/asus.png"
              alt="sponosr "
              className={`${styles.Spons} ${styles.img2}`}
            />
          </div>
          <div className={styles.glass}>
            <img
              src="/logos/asus.png"
              alt="sponosr "
              className={`${styles.Spons} ${styles.img3}`}
            />
          </div>
          <div className={styles.glass}>
            <img
              src="/logos/asus.png"
              alt="sponosr "
              className={`${styles.Spons} ${styles.img4}`}
            />
          </div>
          <div className={styles.glass}>
            <img
              src="/logos/asus.png"
              alt="sponosr "
              className={`${styles.Spons} ${styles.img5}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsCur;
