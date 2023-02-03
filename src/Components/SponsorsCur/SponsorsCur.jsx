import React from "react";
import SponsorC from "./SponsorC";
import styles from "./SponsorsCur.module.scss";
const SponsorsCur = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <p>Current Sponsors</p>
      </div>
      <div className={styles.body}>
        <div className={styles.gallery}>
          <SponsorC src="/logos/unstop.png" text="Online Hosting Partner" />
        </div>
      </div>
    </section>
  );
};

export default SponsorsCur;
