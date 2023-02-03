import React from "react";
import styles from "./SponsorsCur.module.scss";
const SponsorC = ({ src, text }) => {
  return (
    <div className={styles.glass}>
      <img src={src} alt="sponosr " />
      <p>{text}</p>
    </div>
  );
};

export default SponsorC;
