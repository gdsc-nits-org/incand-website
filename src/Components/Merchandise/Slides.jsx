import React from "react";
import styles from "./Merchandise.module.scss";
const Slides = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.src} alt="merchandise" />
    </div>
  );
};

export default Slides;
