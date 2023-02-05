import styles from "./SponsorsCur.module.scss";
const SponsorC = ({ src, text }) => {
  return (
    <div className={styles.glass}>
      <img src={src} alt={`sponsor-${text.slice(0, 5)}`} />
      <p>{text}</p>
    </div>
  );
};

export default SponsorC;
