import styles from "./EventTab.module.scss";

const TeamTab = (props) => {
  const { active, setActive } = props;
  return (
    <div className={styles.tab_main}>
      <div
        className={`${
          active === "Events" ? `${styles.links} ${styles.active_link}` : styles.links
        }`}
        onClick={() => {
          setActive("Events");
        }}
      >
        Events
      </div>
      <div
        className={`${
          active === "Concerts" ? `${styles.links} ${styles.active_link}` : styles.links
        }`}
        onClick={() => {
          setActive("Concerts");
        }}
      >
        Concerts
      </div>
    </div>
  );
};

export default TeamTab;
