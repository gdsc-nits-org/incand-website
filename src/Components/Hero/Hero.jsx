import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import Navbar from "../Navbar/Navbar";
import heroStyles from "./Hero.module.scss";

const Hero = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          backgroundColor: 0x0c0e1d,
          THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef}>
      <div className={heroStyles.heroSection}>
        <Navbar handleClick={props.handleClick} handleClick2={props.handleClick2} />
        <div className={heroStyles.socialHandle}>
          <div className={heroStyles.socialIcon}>
            <a href="https://www.linkedin.com/company/incandescence23/" target="_blank">
              <img src="/logos/linkedin.svg" alt="linkedin" />
            </a>
          </div>
          <div className={heroStyles.socialIcon}>
            <a href="https://www.facebook.com/incandescence.nits/" target="_blank">
              <img src="/logos/facebook.svg" alt="facebook" />
            </a>
          </div>
          <div className={heroStyles.socialIcon}>
            <a href="https://www.instagram.com/incandescence_nitsilchar/" target="_blank">
              <img src="/logos/instagram.svg" alt="instagram" />
            </a>
          </div>
          <div className={heroStyles.verticalLine}></div>
        </div>

        <div className={heroStyles.heroAnim}>
          <img
            src="/logos/heroMainLogo.svg"
            alt="heroMainLogo"
            className={heroStyles.mainText}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
