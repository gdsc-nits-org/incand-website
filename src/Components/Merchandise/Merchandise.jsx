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
    <div className={styles.sliders}>
      <Slider {...settings1}>
        <Slides
          src="https://res.cloudinary.com/resyfer/image/upload/v1676050617/Incand/thunder_march_23_tshirt_mockup_x84t1q.png"
          form="https://docs.google.com/forms/d/e/1FAIpQLSdKdGaT1ziGi1sXDiR0L-4FyVc5N3LYHh-Mx48TwbQFFl4ZWg/viewform?fbclid=IwAR3O0AFpOwFvR3pKr0MtxtWGuH3GfyxcnKYow-TulLCOr2181mkdtPOEbDY"
        />
        <Slides
          src="https://res.cloudinary.com/resyfer/image/upload/v1676050690/Incand/VFinB_h6vnmu.png"
          form="https://docs.google.com/forms/d/e/1FAIpQLSdKdGaT1ziGi1sXDiR0L-4FyVc5N3LYHh-Mx48TwbQFFl4ZWg/viewform?fbclid=IwAR3O0AFpOwFvR3pKr0MtxtWGuH3GfyxcnKYow-TulLCOr2181mkdtPOEbDY"
        />
        <Slides
          src="https://res.cloudinary.com/resyfer/image/upload/v1676094215/Incand/IndieFront_wy49d9.png"
          show="true"
          form2="https://forms.gle/EYWKWd1ks5i1dmb29"
          form="https://forms.gle/rg4syUF6ngPQmKxt5"
        />
      </Slider>
    </div>
  );
};

export default Merchandise;
