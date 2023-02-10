import React from "react";
import Slider from "react-slick";
import styles from "./Merchandise.module.scss";
import Slides from "./Slides";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Merchandise = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <>
      <div className={styles.sliders}>
        <Slider {...settings1}>
          <Slides src="https://res.cloudinary.com/resyfer/image/upload/v1676050617/Incand/thunder_march_23_tshirt_mockup_x84t1q.png" />
          <Slides src="https://res.cloudinary.com/resyfer/image/upload/v1676050690/Incand/VFinB_h6vnmu.png" />
        </Slider>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1}>Order Now</button>
      </div>
    </>
  );
};

export default Merchandise;
