/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import React from 'react'
import styles from "./CardsOfEvents.module.scss";
import platform1 from "/src/images/platform1.png";
import platform2 from "/src/images/platform2.png";
import platform3 from "/src/images/platform3.png";

const CardsOfEvents = () => {
  return (
    <div className={styles.CardsOfEvents}>
      <div className={styles.Card_body}>
        <h1 className={styles.Card_header}>The Thespian Rhapsody</h1>
        <p className={styles.Card_subheader}>“Acting is magical. Change your look and your attitude, and you can be anyone.”</p>
        <p className={styles.Card_text}>Acting is not about being famous, it is about finding the message behind stories. It is also about expressing yourself and the character that is being played. No matter how well you try to interpret a character, there will always be an essence of you in the character, that is what makes it acting, you are essaying a role with a hint of your personality.</p>
      </div>
      <div className={styles.Card_body_2}>
        <h1 className={styles.Card_header_2}></h1>
        <div className={styles.Card_images}>
            <img src={platform1} alt="" />
            <img src={platform3} alt="" />
        </div>
        <div className={styles.Card_images}>
            <img src={platform2} alt="" />
        </div>
      </div>
      <div className={styles.triangle}></div>
    </div>
  )
}

export default CardsOfEvents
