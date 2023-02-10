import React, { useState } from "react";
import styles from "./TeamTab.module.scss";
import TeamCard2 from "../TeamCard/TeamCard2";
import TeamCard3 from "../TeamCard/TeamCard3";
import TeamCard4 from "../TeamCard/TeamCard4";
const TeamTab = () => {
  const [active, setActive] = useState("4th Years");
  return (
    <>
      <div className={styles.tab_main}>
        <div
          className={`${
            active === "4th Years"
              ? `${styles.links} ${styles.active_link}`
              : styles.links
          }`}
          onClick={() => {
            setActive("4th Years");
          }}
        >
          4th Years
        </div>
        <div
          className={`${
            active === "3rd Years"
              ? `${styles.links} ${styles.active_link}`
              : styles.links
          }`}
          onClick={() => {
            setActive("3rd Years");
          }}
        >
          3rd Years
        </div>
        <div
          className={`${
            active === "2nd Years"
              ? `${styles.links} ${styles.active_link}`
              : styles.links
          }`}
          onClick={() => {
            setActive("2nd Years");
          }}
        >
          2nd Years
        </div>
      </div>
      <div className="cardContainer">
        {active === "4th Years" && <TeamCard4 />}
        {active === "3rd Years" && <TeamCard3 />}
        {active === "2nd Years" && <TeamCard2 />}
      </div>
    </>
  );
};

export default TeamTab;
