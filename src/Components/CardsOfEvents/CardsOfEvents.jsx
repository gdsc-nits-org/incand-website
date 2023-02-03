import data from "../../Data/EventsData.json";

import styles from "./CardsOfEvents.module.scss";

const CardsOfEvents = () => {
  return (
    <div className={styles.CardsOfEvents}>
      {data &&
        data.map((d) => (
          <>
            <div className={styles.Card_body}>
              <h1 className={styles.Card_header}>{d?.header}</h1>
              <p className={styles.Card_subheader}>{d?.subheader}</p>
              <p className={styles.Card_text}>{d?.text}</p>
            </div>
            <div className={styles.Card_body_2}>
              <h1 className={styles.Card_header_2}>{d?.header2}</h1>
              <div className={styles.Card_images}>
                {d.imgUrls.map((img, idx) => (
                  <img src={img} alt={`${d.header}-${idx}`} />
                ))}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default CardsOfEvents;
