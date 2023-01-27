import React from "react";
import styles from "./SponsorsCur.module.scss";
const SponsorsCur = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <p>Current Sponsors</p>
      </div>
      <div className={styles.body}>
        {/* <img src="/logos/fireLogo.svg" alt="fire logo " className={styles.imgs} /> */}
        <div className={styles.gallery}>
          <div className={styles.glass}>
            <img src="/logos/unstop.png" alt="sponosr " />
            <p>Online Hosting Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsCur;
