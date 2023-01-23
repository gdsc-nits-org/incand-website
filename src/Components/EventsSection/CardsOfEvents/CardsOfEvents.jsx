import React from 'react'
import styles from "./CardsOfEvents.module.scss";

const CardsOfEvents = () => {
  return (
    <div className={styles.CardsOfEvents}>
      <div className={styles.Card_body}>
        <h1 className={styles.Card_header}>Thunder March</h1>
        <p className={styles.Card_subheader}>Someone aptly said “If heavy metal bands ruled the world, we had be a lot better off.” and we cannot headbang to it more!</p>
        <p className={styles.Card_text}> Rock music consists of a number of virtuoso, aggressive, and strong styles. Propelled by the ferocious sounds of the electric guitar in distortion, heavy metal is one of those ear splitting styles that creates a rhapsody among its listeners, whether it be “Hallowed by thy name” or </p>
      </div>
      <div className={styles.Card_body_2}>
        <h1 className={styles.Card_header_2}>“Heaven and Hell”</h1>
        <div className={styles.Card_images}>
            <img src="https://i.ibb.co/9t1Lv7X/platform1-2.png" alt="" />
            <img src="https://i.ibb.co/TMpF9SL/platform3-1.png" alt="" />
        </div>
        <div className={styles.Card_images}>
            <img src="https://i.ibb.co/WVZ3h61/platform2-1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardsOfEvents
