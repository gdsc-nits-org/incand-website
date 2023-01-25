/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import React from 'react'
import styles from "./CardsOfConcerts.module.scss";
import platform1 from "/src/images/platform1.png";
import platform2 from "/src/images/platform2.png";
import platform3 from "/src/images/platform3.png";

const CardsOfConcerts = () => {
  return (
    <div className={styles.CardsOfConcerts}>
      <div className={styles.Card_body}>
        <h1 className={styles.Card_header}>Thunder March</h1>
        <p className={styles.Card_subheader}>Someone aptly said “If heavy metal bands ruled the world, we had be a lot better off.” and we cannot headbang to it more!</p>
        <p className={styles.Card_text}> Rock music consists of a number of virtuoso, aggressive, and strong styles. Propelled by the ferocious sounds of the electric guitar in distortion, heavy metal is one of those ear splitting styles that creates a rhapsody among its listeners, whether it be “Hallowed by thy name” or </p>
      </div>
      <div className={styles.Card_body_2}>
        <h1 className={styles.Card_header_2}>“Heaven and Hell”</h1>
        <div className={styles.Card_images}>
            <img src={platform1} alt="" />
            <img src={platform3} alt="" />
        </div>
        <div className={styles.Card_images}>
            <img src={platform2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardsOfConcerts
