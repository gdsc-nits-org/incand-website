import styles from "./CardsOfConcerts.module.scss";

const CardsOfConcerts = ({
  header,
  subheader,
  text,
  header2,
  imgUrls,
  registrationLink,
}) => {
  return (
    <div className={styles.CardsOfConcerts}>
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
      {registrationLink.length !== 0 && (
        <div className={styles.buttonSec}>
          <a
            href={registrationLink}
            target="_blank"
            rel="noreferrer"
            className={styles.eventButton}
          >
            Register Now!
          </a>
        </div>
      )}
    </div>
  );
};

export default CardsOfConcerts;
