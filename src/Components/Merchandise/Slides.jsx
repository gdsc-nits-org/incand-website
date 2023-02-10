import React from "react";
import styles from "./Merchandise.module.scss";
const Slides = () => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.iframess}
        src="https://www.youtube.com/embed/FIc12Nf56Js"
        title="DID YOU NOTICE THIS???! - One Piece Chapter 1074"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Slides;
