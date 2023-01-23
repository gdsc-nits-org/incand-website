import Card from "./ImageCard";
import styles from "./Slider.module.scss";
import { images } from "./Images";

const Slider = () => {
  return (
    <div id={styles.image_track}>
      {images.map((image) => {
        return <Card src={image} />;
      })}
    </div>
  );
};

export default Slider;
