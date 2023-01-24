import React, {useState} from 'react'
import styles from "./EventSection.module.scss"
import EventTab from "../EventTab/EventTab"
import CardsOfEvents from '../CardsOfEvents/CardsOfEvents'

const EventSec = () => {
  const [active, setActive] = useState("Events");
  return (
    <div className={`${active === "Concerts" ? `${styles.concertBackground} ${styles.eventSec}` : styles.eventSec}`}>
      <EventTab active={active} setActive={setActive}/>
      <CardsOfEvents />
    </div>
  )
}

export default EventSec
