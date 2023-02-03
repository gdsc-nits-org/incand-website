import React from "react";
import { Navbar, TeamHero, Footer} from "../../Components";
import TeamTab from "../../Components/TeamTab/TeamTab";
import style from "./Team.module.scss";
const Team = () => {
  return (
    <div className={style.team}>
      <Navbar />
      <TeamHero />
      <TeamTab/>
      <Footer />
    </div>
  );
};

export default Team;
