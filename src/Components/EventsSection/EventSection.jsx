import React, {useState} from 'react'
import styles from "./EventSection.module.scss"
import EventTab from "../EventTab/EventTab"
import CardsOfEvents from '../CardsOfEvents/CardsOfEvents'
import CardsOfConcerts from '../CardsOfConcerts/CardsOfConcerts'

const EventSec = () => {
  const [active, setActive] = useState("Events");
  return (
    <div className={`${active === "Concerts" ? `${styles.concertBackground} ${styles.eventSec}` : styles.eventSec}`}>
      <EventTab active={active} setActive={setActive}/>
      {active === "Events" && <CardsOfEvents /> }
      {active === "Concerts" && <CardsOfConcerts />}
    </div>
  )
}

export default EventSec
