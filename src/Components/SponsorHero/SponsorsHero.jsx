import React from "react";
import heroStyles from "./SponsorsHero.module.scss";
const SponsorsHero = () => {
  return (
    <div className={heroStyles.heroSection}>
      <div className={heroStyles.socialHandle}>
        <div className={heroStyles.socialIcon}>
          <a href="https://www.linkedin.com/company/incandescence23/" target="_blank">
            <img src="/logos/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div className={heroStyles.socialIcon}>
          <a href="https://www.facebook.com/incandescence.nits/" target="_blank">
            <img src="/logos/facebook.svg" alt="facebook" />
          </a>
        </div>
        <div className={heroStyles.socialIcon}>
          <a href="https://www.instagram.com/incandescence_nitsilchar/" target="_blank">
            <img src="/logos/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className={heroStyles.verticalLine}></div>
      </div>

      <div className={heroStyles.heroAnim}>
        <img src="/logos/Butterfly.svg" alt="heroMainLogo" />
        <h1 className={heroStyles.mainText}>Sponsors</h1>
      </div>
    </div>
  );
};

export default SponsorsHero;
