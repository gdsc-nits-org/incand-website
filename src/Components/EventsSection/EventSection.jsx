import React, {useState} from 'react'
import styles from "./EventSection.module.scss"
import EventTab from "../EventTab/EventTab"
import EventTimeline from '../Timeline/EventTimeline'
import ConcertTimeline from '../Timeline/ConcertTimeline'
const EventSec = () => {
  const [active, setActive] = useState("Events");
  return (
    <div className={`${active === "Concerts" ? `${styles.concertBackground} ${styles.eventSec}` : styles.eventSec}`}>
      <EventTab active={active} setActive={setActive}/>
      {active === "Events" && <EventTimeline />}
      {active === "Concerts" && <ConcertTimeline />}
    </div>
  )
}

export default EventSec
