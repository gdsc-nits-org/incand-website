import { SponsorsHero, Footer, Slider } from "../../Components";
import style from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={style.main}>
      <SponsorsHero name="Gallery" />
      <Slider />
      <Footer />
    </div>
  );
};

export default Gallery;
