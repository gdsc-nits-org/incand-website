import React from "react";
import heroStyle from "./TeamHero.module.scss";
const TeamHero = () => {
  return (
    <div className={heroStyle.heroSection}>
      <div className={heroStyle.socialHandle}>
        <div className={heroStyle.socialIcon}>
          <a href="https://www.linkedin.com/company/incandescence23/" target="_blank">
            <img src="/logos/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div className={heroStyle.socialIcon}>
          <a href="https://www.facebook.com/incandescence.nits/" target="_blank">
            <img src="/logos/facebook.svg" alt="facebook" />
          </a>
        </div>
        <div className={heroStyle.socialIcon}>
          <a href="https://www.instagram.com/incandescence_nitsilchar/" target="_blank">
            <img src="/logos/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className={heroStyle.verticalLine}></div>
      </div>

      <div className={heroStyle.heroAnim}>
        <img src="/logos/Butterfly.svg" alt="heroMainLogo" />
        <h1 className={heroStyle.mainText}>Our Team</h1>
      </div>
    </div>
  );
};

export default TeamHero;
