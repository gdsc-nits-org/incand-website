/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import navStyles from "./Navbar.module.scss";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  // const [color, setColor] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  function useEvent(event, handler, passive = false) {
    useEffect(() => {
      window.addEventListener(event, handler, passive);

      // this will clean up the event every time the component is re-rendered
      return function cleanup() {
        window.removeEventListener(event, handler);
      };
    });
  }

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  // const changeColor = () => {
  //   if (window.innerWidth > 100) {
  //     if(window.scrollY >= 50){
  //       setColor(true);
  //     }

  //   } else {
  //     setColor(false);
  //   }
  // };

  useEvent("scroll", changeToggle);
  // useEvent("scroll", changeColor);

  const handleChange = () => {
    props.handleClick();
    handleToggle();
  };

  const handleChange2 = () => {
    props.handleClick2();
    handleToggle();
  };

  const handleChange3 = () => {
    props.handleClick3();
    handleToggle();
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div
        className={
          toggle ? `${navStyles.navBar} ${navStyles.expanded}` : `${navStyles.navBar}`
        }
      >
        <div className={navStyles.navLeft}></div>
        <button className={navStyles.toggleIcon} onClick={handleToggle}>
          {toggle ? (
            <Icon icon="maki:cross" width="37" height="37"></Icon>
          ) : (
            <Icon icon="charm:menu-hamburger" width="37" height="37"></Icon>
          )}
        </button>
        <div className={navStyles.navRight}>
          <div className={navStyles.navBtn} onClick={handleChange3}>
            SEE WHAT'S HAPPENING
          </div>
          <div className={navStyles.navBtn}>
            <Link to="/sponsors" className={navStyles.navLink}>SPONSORS</Link>
          </div>
          <div className={navStyles.navBtn} onClick={handleChange}>
            ABOUT US
          </div>
          <div className={navStyles.navBtn} onClick={handleChange2}>
            CONTACT US
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
