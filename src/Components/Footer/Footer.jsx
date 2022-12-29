import React from "react";
import { Icon } from "@iconify/react";
import footerStyles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={footerStyles.footer} ref={props.reference}>
      <div className={footerStyles.footerLogo}>
        <img src="/logos/footerLogo.svg" alt="" />
      </div>

      <div className={footerStyles.buttons}>
        <div className={footerStyles.btn1}>
          <button className={footerStyles.btn1son}>Download Brochure</button>
        </div>
        <div className={footerStyles.btn2}>
          <button className={footerStyles.btn2son}>Become our Campus Ambassador</button>
        </div>
      </div>

      <div className={footerStyles.contactUs}>
        <p className={footerStyles.contact}>Contact Us</p>
        <p className={footerStyles.mail}> user123@incad.org</p>
      </div>

      <div className={footerStyles.footerSocials}>
        <Icon className={footerStyles.social1} icon="lucide:instagram" color="#d62976" />
        <Icon
          className={footerStyles.social2}
          icon="ant-design:twitter-circle-filled"
          color="#1da1f2"
        />
        <Icon
          className={footerStyles.social3}
          icon="ri:linkedin-box-line"
          color="#0a66c2"
        />
        <Icon
          className={footerStyles.social4}
          icon="ic:baseline-facebook"
          color="#4267b2"
        />
        <Icon className={footerStyles.social5} icon="ph:youtube-logo-fill" color="red" />
      </div>
    </div>
  );
};

export default Footer;
