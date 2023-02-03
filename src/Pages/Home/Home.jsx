import { useRef } from "react";
import { Hero, About, Footer, Navbar } from "../../Components";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
