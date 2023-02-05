import styles from "./CardsOfEvents.module.scss";

const CardsOfEvents = ({ header, subheader, text, header2, imgUrls }) => {
  return (
    <div className={styles.CardsOfEvents}>
      <div className={styles.Card_body}>
        <h1 className={styles.Card_header}>{header}</h1>
        <p className={styles.Card_subheader}>{subheader}</p>
        <p className={styles.Card_text}>{text}</p>
      </div>
      <div className={styles.Card_body_2}>
        <h1 className={styles.Card_header_2}>{header2}</h1>
        <div className={styles.Card_images}>
          {imgUrls.map((img, idx) => (
            <img src={img} alt={`${header}-${idx}`} />
          ))}
        </div>
      </div>
      <div className={styles.buttonSec}><button type="button" className={styles.eventButton}>Register Now!</button></div>
    </div>
  );
};

export default CardsOfEvents;
