import { useState } from "react";
import { Icon } from "@iconify/react";
import navStyles from "./Navbar.module.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

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
        <div className={navStyles.navBtn}>SEE WHAT&apos;S HAPPENING</div>
        {/* <div className={navStyles.navLine}></div> */}
        <div className={navStyles.navBtn}>ABOUT US</div>
        <div className={navStyles.navBtn}>CONTACT US</div>
      </div>
    </div>
  );
};

export default Navbar;
