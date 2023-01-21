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
          <div className={`${styles.glass} ${styles.img1}`}>
            <img src="/logos/asus.png" alt="sponosr " />
          </div>
          <div className={`${styles.glass} ${styles.img2}`}>
            <img src="/logos/asus.png" alt="sponosr " />
          </div>
          <div className={`${styles.glass} ${styles.img3}`}>
            <img src="/logos/asus.png" alt="sponosr " />
          </div>
          <div className={`${styles.glass} ${styles.img4}`}>
            <img src="/logos/asus.png" alt="sponosr " />
          </div>
          <div className={`${styles.glass} ${styles.img5}`}>
            <img src="/logos/asus.png" alt="sponosr " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsCur;
