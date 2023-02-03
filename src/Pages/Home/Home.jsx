import { useRef } from "react";
import { Hero, About, Footer, Navbar } from "../../Components";
import style from "./Home.module.scss";

const Home = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };
  // const handleClick2 = () => {
  //   ref2.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // const handleClick3 = () => {
  //   ref3.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className={style.home}>
      {/* <Navbar
        handleClick={handleClick}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
      /> */}
      <Hero reference={ref3} />
      <About reference={ref} />
      <Footer reference={ref2} />
    </div>
  );
};

export default Home;
