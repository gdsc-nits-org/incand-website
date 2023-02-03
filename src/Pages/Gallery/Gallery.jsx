import { SponsorsHero, Slider } from "../../Components";
import style from "./Gallery.module.scss";
import footerStyles from "../../Components/Footer/Footer.module.scss";
const Gallery = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={style.main}>
        <SponsorsHero name="Gallery" />
        <div className={style.text}>
          <p>Day 1</p>
        </div>
        <Slider />
        <div className={style.text}>
          <p>Day 2</p>
        </div>
        <Slider />
        <div className={footerStyles.footer}>
          <div className={footerStyles.footerLogo}>
            <img src="/logos/footerLogo.svg" alt="footer logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
