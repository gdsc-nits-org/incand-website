import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <div className={navStyles.navBtn}>
            <Link to="/" className={navStyles.navLink}>
              HOME
            </Link>
          </div>
          <div className={navStyles.navBtn}>
            <Link to="/sponsors" className={navStyles.navLink}>
              SPONSORS
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
