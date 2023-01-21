import React from "react";
import { Navbar, TeamHero, Footer } from "../../Components";
import TeamCard from "../../Components/TeamCard/TeamCard";
import style from "./Team.module.scss";
const Team = () => {
  return (
    <div className={style.team}>
      <Navbar />
      <TeamHero />
      <TeamCard/>
      <Footer />
    </div>
  );
};

export default Team;
