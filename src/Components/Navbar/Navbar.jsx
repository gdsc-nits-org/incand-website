import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  useEvent("scroll");
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${navStyles.navLink} ${navStyles.active}`
                : `${navStyles.navLink}`
            }
          >
            HOME
          </NavLink>
        </div>
        <div className={navStyles.navBtn}>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? `${navStyles.navLink} ${navStyles.active}`
                : `${navStyles.navLink}`
            }
          >
            GALLERY
          </NavLink>
        </div>
        <div className={navStyles.navBtn}>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? `${navStyles.navLink} ${navStyles.active}`
                : `${navStyles.navLink}`
            }
          >
            EVENTS
          </NavLink>
        </div>
        <div className={navStyles.navBtn}>
          <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              isActive
                ? `${navStyles.navLink} ${navStyles.active}`
                : `${navStyles.navLink}`
            }
          >
            SPONSORS
          </NavLink>
        </div>
        {/* <div className={navStyles.navBtn}>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive
                ? `${navStyles.navLink} ${navStyles.active}`
                : `${navStyles.navLink}`
            }
          >
            TEAM
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
