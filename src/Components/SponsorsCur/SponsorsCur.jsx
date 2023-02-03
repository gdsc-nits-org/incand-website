import SponsorC from "./SponsorC";

import styles from "./SponsorsCur.module.scss";

import data from "../../Data/CurrentSponsors.json";

const SponsorsCur = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <p>Current Sponsors</p>
      </div>
      <div className={styles.body}>
        <div className={styles.gallery}>
          {data.map((d) => (
            <SponsorC key={d.text} src={d.imgUrl} text={d.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsCur;
