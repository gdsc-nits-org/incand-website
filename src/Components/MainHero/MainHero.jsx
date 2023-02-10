import style from "./MainHero.module.scss";

const SponsorsHero = ({ name }) => {
  return (
    <div className={style.heroSection}>
      <div className={style.socialHandle}>
        <div className={style.socialIcon}>
          <a href="https://www.linkedin.com/company/incandescence23/" target="_blank">
            <img src="/logos/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div className={style.socialIcon}>
          <a href="https://www.facebook.com/incandescence.nits/" target="_blank">
            <img src="/logos/facebook.svg" alt="facebook" />
          </a>
        </div>
        <div className={style.socialIcon}>
          <a href="https://www.instagram.com/incandescence_nitsilchar/" target="_blank">
            <img src="/logos/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className={style.verticalLine}></div>
      </div>

      <div className={style.heroAnim}>
        <img src="/logos/Butterfly.svg" alt="heroMainLogo" />
        <h1 className={style.mainText}>{name}</h1>
      </div>
    </div>
  );
};

export default SponsorsHero;
