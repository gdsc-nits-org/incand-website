import React from 'react'
import { Navbar, Footer} from "../../Components";
import EventHero from '../../Components/EventHero/EventHero';
import EventSection from '../../Components/EventsSection/EventSection';

import style from "./Events.module.scss";

const Events = () => {
  return (
    <div className={style.events}>
      <Navbar />
      <EventHero />
      <EventSection />
      <Footer />
    </div>
  )
}

export default Events;
