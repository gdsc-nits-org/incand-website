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
          <Slides />
          <Slides />
          <Slides />
        </Slider>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1}>Order Now</button>
      </div>
    </>
  );
};

export default Merchandise;
