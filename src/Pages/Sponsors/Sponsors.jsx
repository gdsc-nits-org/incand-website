import React from "react";
import {
  SponsorsHero,
  SponsorsWhy,
  Footer,
  SponsorCont,
  SponsorPrev,
  Navbar,
} from "../../Components";
import style from "./Sponsors.module.scss";
const Sponsors = () => {
  return (
    <>
      <Navbar />
      <div className={style.sponsors}>
        <SponsorsHero name="Sponsors" />
        <SponsorsWhy />
        {/* <SponsorsCur /> */}
        <SponsorPrev />
        <SponsorCont />
        <Footer />
      </div>
    </>
  );
};

export default Sponsors;
