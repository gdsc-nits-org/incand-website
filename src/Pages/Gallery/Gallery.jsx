import { SponsorsHero, Slider } from "../../Components";

import images from "../../Data/Images.json";

import style from "./Gallery.module.scss";

import footerStyles from "../../Components/Footer/Footer.module.scss";

const Gallery = () => {
  return (
    <div className={style.main}>
      <SponsorsHero name="Gallery" />
      <div className={style.text}>
        <p>Day 1</p>
      </div>
      <Slider images={images} />
      <div className={style.text}>
        <p>Day 2</p>
      </div>
      <Slider images={images} />
      <div className={footerStyles.footer}>
        <div className={footerStyles.footerLogo}>
          <img src="/logos/footerLogo.svg" alt="footer logo" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
