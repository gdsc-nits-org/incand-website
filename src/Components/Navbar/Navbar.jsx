import navStyles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={navStyles.navBar}>
      <div className={navStyles.navLeft}></div>
      <div className={navStyles.navRight}>
        <div className={navStyles.navBtn}>SEE WHAT&apos;S HAPPENING</div>
        <div className={navStyles.navLine}></div>
        <div className={navStyles.navBtn}>ABOUT US</div>
        <div className={navStyles.navBtn}>CONTACT US</div>
      </div>
    </div>
  );
};

export default Navbar;
