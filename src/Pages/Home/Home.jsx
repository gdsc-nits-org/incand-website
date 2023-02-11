import { Hero, About, Footer, Merchandise } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <Hero />
      <About />
      <Merchandise />
      <Footer />
    </div>
  );
};

export default Home;
