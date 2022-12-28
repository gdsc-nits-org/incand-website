import React from "react";
import aboutStyles from "./About.module.scss";

import { aboutIncand, aboutUs } from "../WebsiteContent/Content";

const About = () => {
  return (
    <div className={aboutStyles.aboutIncand}>
      <div className={aboutStyles.aboutUs}>
        <div className={aboutStyles.aboutHeading}>About Us</div>
        <div className={aboutStyles.aboutDesc}>{aboutIncand}</div>
      </div>
      <div className={aboutStyles.aboutNIT}>
        <div className={aboutStyles.aboutHeading}>About NIT Silchar</div>
        <div className={aboutStyles.aboutDesc}>{aboutUs}</div>
      </div>
    </div>
  );
};

export default About;
