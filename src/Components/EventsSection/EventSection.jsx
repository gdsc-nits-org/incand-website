import { useState } from "react";

import EventTab from "../EventTab/EventTab";
import EventTimeline from "../Timeline/EventTimeline";
import ConcertTimeline from "../Timeline/ConcertTimeline";

import styles from "./EventSection.module.scss";

const EventSec = () => {
  const [active, setActive] = useState("Events");
  return (
    <div
      className={`${
        active === "Concerts"
          ? `${styles.concertBackground} ${styles.eventSec}`
          : styles.eventSec
      }`}
    >
      <EventTab active={active} setActive={setActive} />
      {active === "Events" && <EventTimeline />}
      {active === "Concerts" && <ConcertTimeline />}
    </div>
  );
};

export default EventSec;
