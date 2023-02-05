import { TeamHero, Footer, TeamTab } from "../../Components";

import style from "./Team.module.scss";

const Team = () => {
  return (
    <div className={style.team}>
      <TeamHero />
      <TeamTab />
      <Footer />
    </div>
  );
};

export default Team;
