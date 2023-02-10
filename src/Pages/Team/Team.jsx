import { MainHero, Footer, TeamTab } from "../../Components";

import style from "./Team.module.scss";

const Team = () => {
  return (
    <div className={style.team}>
      <MainHero name="Our Team" />
      <TeamTab />
      <Footer />
    </div>
  );
};

export default Team;
