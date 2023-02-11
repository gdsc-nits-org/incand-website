import React, { useState } from "react";
import styles from "./TeamTab.module.scss";
import TeamCard3 from "../TeamCard/TeamCard3";
import TeamCard4 from "../TeamCard/TeamCard4";

const TeamTab = () => {
  const [active, setActive] = useState("Core Team");
  return (
    <>
      <div className={styles.tab_main}>
        <div
          className={`${
            active === "Core Team"
              ? `${styles.links} ${styles.active_link}`
              : styles.links
          }`}
          onClick={() => {
            setActive("Core Team");
          }}
        >
          Core Team
        </div>
        <div
          className={`${
            active === "Web Team" ? `${styles.links} ${styles.active_link}` : styles.links
          }`}
          onClick={() => {
            setActive("Web Team");
          }}
        >
          Web Team
        </div>
      </div>
      <div className="cardContainer">
        {active === "Core Team" && <TeamCard4 />}
        {active === "Web Team" && <TeamCard3 />}
      </div>
    </>
  );
};

export default TeamTab;
