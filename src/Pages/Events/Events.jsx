import { Footer, EventSection, MainHero } from "../../Components";

import style from "./Events.module.scss";

const Events = () => {
  return (
    <div className={style.events}>
      <MainHero name="Event" />
      <EventSection />
      <Footer />
    </div>
  );
};

export default Events;
