import {
  SponsorsHero,
  SponsorsWhy,
  Footer,
  SponsorCont,
  SponsorPrev,
  SponsorsCur,
} from "../../Components";

import style from "./Sponsors.module.scss";

const Sponsors = () => {
  return (
    <div className={style.sponsors}>
      <SponsorsHero />
      <SponsorsWhy />
      <SponsorsCur />
      <SponsorPrev />
      <SponsorCont />
      <Footer />
    </div>
  );
};

export default Sponsors;
