import React from "react";
import styles from "./Merchandise.module.scss";
const Slides = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={props.src} alt="merchandise" />
      </div>
      <div className={styles.buttonContainer}>
        <a className={styles.button1} href={props.form} target="_blank">
          Order Now
          {props.show && <p style={{ fontSize: "8px" }}>NITS Student</p>}
        </a>
        {props.show && (
          <a className={styles.button1} href={props.form2} target="_blank">
            Order Now
            {props.show && <p style={{ fontSize: "8px" }}>Non-NIT & Alumni</p>}
          </a>
        )}
      </div>
    </div>
  );
};

export default Slides;
