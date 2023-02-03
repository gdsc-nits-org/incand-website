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
          <a
            href="https://drive.google.com/file/d/1wIqo4KKqjLbHMHFyT46_0gnIZbfuXWdV/view"
            className={footerStyles.brochureLink}
          >
            <div className={footerStyles.btn1son}>Download Brochure</div>
          </a>
        </div>
        <div className={footerStyles.btn2}>
          <a
            href="https://forms.gle/LZY5VWCWhHFDU84X9"
            className={footerStyles.ambassadorLink}
          >
            <div className={footerStyles.btn2son}>Become our Campus Ambassador</div>
          </a>
        </div>
      </div>

      <div className={footerStyles.contactUs}>
        <p className={footerStyles.contact}>Contact Us</p>
        <p className={footerStyles.mail}> incandescence@nits.ac.in</p>
      </div>

      <div className={footerStyles.footerSocials}>
        <a href="https://www.instagram.com/incandescence_nitsilchar/">
          <Icon
            className={footerStyles.social1}
            icon="lucide:instagram"
            color="#d62976"
          />
        </a>

        {/* <Icon
          className={footerStyles.social2}
          icon="ant-design:twitter-circle-filled"
          color="#1da1f2"
        /> */}
        <a href="https://www.linkedin.com/company/incandescence23/">
          <Icon
            className={footerStyles.social3}
            icon="ri:linkedin-box-line"
            color="#0a66c2"
          />
        </a>

        <a href="https://www.facebook.com/incandescence.nits/">
          <Icon
            className={footerStyles.social4}
            icon="ic:baseline-facebook"
            color="#4267b2"
          />
        </a>

        {/* <Icon className={footerStyles.social5} icon="ph:youtube-logo-fill" color="red" /> */}
      </div>
    </div>
  );
};

export default Footer;
