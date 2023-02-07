import { MainHero, Slider } from "../../Components";

import gallery from "../../Data/Gallery.json";

import style from "./Gallery.module.scss";

import footerStyles from "../../Components/Footer/Footer.module.scss";

const Gallery = () => {
  return (
    <div className={style.main}>
      <MainHero name="Gallery" />
      {gallery.map((g) => (
        <div key={g.id}>
          <div className={style.text}>
            <p>{g.heading}</p>
          </div>
          <Slider images={g.images} />
        </div>
      ))}
      <br />
      <br />
      <br />
      <div className={footerStyles.footer}>
        <div className={footerStyles.footerLogo}>
          <img src="/logos/footerLogo.svg" alt="footer logo" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
