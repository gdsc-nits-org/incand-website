import { Hero, About, Footer} from "../../Components";
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
