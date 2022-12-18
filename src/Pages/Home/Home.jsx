import { Button, Navbar, Hero, About, Footer } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
