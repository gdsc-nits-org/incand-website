import { useRef } from "react";
import { Hero, About, Footer, Navbar } from "../../Components";
import style from "./Home.module.scss";

const Home = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.home}>
      <Navbar />
      <Hero handleClick={handleClick} handleClick2={handleClick2} />
      <About reference={ref} />
      <Footer reference={ref2} />
    </div>
  );
};

export default Home;
