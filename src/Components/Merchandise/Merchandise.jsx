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
          src="https://res.cloudinary.com/dt3o8ldp9/image/upload/c_scale,h_400/v1676297959/incand/thunder_march_23_tshirt_mockup_x84t1q_luvhpo.jpg"
          form="https://docs.google.com/forms/d/e/1FAIpQLSdKdGaT1ziGi1sXDiR0L-4FyVc5N3LYHh-Mx48TwbQFFl4ZWg/viewform?fbclid=IwAR3O0AFpOwFvR3pKr0MtxtWGuH3GfyxcnKYow-TulLCOr2181mkdtPOEbDY"
        />
        <Slides
          src="https://res.cloudinary.com/dt3o8ldp9/image/upload/c_scale,h_411,q_81/v1676297960/incand/VFinB_h6vnmu_lzg2a1.jpg"
          form="https://docs.google.com/forms/d/e/1FAIpQLSdKdGaT1ziGi1sXDiR0L-4FyVc5N3LYHh-Mx48TwbQFFl4ZWg/viewform?fbclid=IwAR3O0AFpOwFvR3pKr0MtxtWGuH3GfyxcnKYow-TulLCOr2181mkdtPOEbDY"
        />
        <Slides
          src="https://res.cloudinary.com/dt3o8ldp9/image/upload/q_52/v1676297982/incand/IndieFront_wy49d9_stxg6r.png"
          show="true"
          form2="https://forms.gle/EYWKWd1ks5i1dmb29"
          form="https://forms.gle/rg4syUF6ngPQmKxt5"
        />
      </Slider>
    </div>
  );
};

export default Merchandise;
