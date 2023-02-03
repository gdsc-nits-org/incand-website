import { Navbar, Footer, EventHero, EventSection } from "../../Components";

import style from "./Events.module.scss";

const Events = () => {
  return (
    <div className={style.events}>
      <Navbar />
      <EventHero />
      <EventSection />
      <Footer />
    </div>
  );
};

export default Events;
