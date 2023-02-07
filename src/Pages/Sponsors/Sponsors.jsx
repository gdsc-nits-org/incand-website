import {
  SponsorsCur,
  SponsorsWhy,
  Footer,
  SponsorCont,
  SponsorPrev,
  MainHero,
} from "../../Components";

import style from "./Sponsors.module.scss";

const Sponsors = () => {
  return (
    <div className={style.sponsors}>
      <MainHero name="Sponsor Us" />
      <SponsorsWhy />
      <SponsorsCur />
      <SponsorPrev />
      <SponsorCont />
      <Footer />
    </div>
  );
};

export default Sponsors;
