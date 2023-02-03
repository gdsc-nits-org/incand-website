/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import React from 'react'
import styles from "./CardsOfConcerts.module.scss";
import platform1 from "/images/platform1.png";
import platform2 from "/images/platform2.png";
import platform3 from "/images/platform3.png";
import data from "/src/Data/ConcertsData.json";

const CardsOfConcerts = () => {
  return (
    <div className={styles.CardsOfConcerts}>
      {data &&
        data.map((data) => (
          <>
            <div className={styles.Card_body}>
              <h1 className={styles.Card_header}>{data?.header}</h1>
              <p className={styles.Card_subheader}>{data?.subheader}</p>
              <p className={styles.Card_text}>{data?.text}</p>
            </div>
            <div className={styles.Card_body_2}>
              <h1 className={styles.Card_header_2}>{data?.header2}</h1>
              <div className={styles.Card_images}>
                <img src={platform1} alt="" />
                <img src={platform3} alt="" />
              </div>
              <div className={styles.Card_images}>
                <img src={platform2} alt="" />
              </div>
            </div>
          </>
        ))}
    </div>
  )
}

export default CardsOfConcerts
