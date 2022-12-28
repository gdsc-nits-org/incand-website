/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import navStyles from "./Navbar.module.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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

  useEvent("scroll", changeToggle);

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
            <Icon icon="maki:cross" width="37"></Icon>
          ) : (
            <Icon icon="charm:menu-hamburger" width="37" height="37"></Icon>
          )}
        </button>
        <div className={navStyles.navRight}>
          <div className={navStyles.navBtn}>SEE WHAT'S HAPPENING</div>
          <div className={navStyles.navLine}></div>
          <div className={navStyles.navBtn}>ABOUT US</div>
          <div className={navStyles.navBtn}>CONTACT US</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
