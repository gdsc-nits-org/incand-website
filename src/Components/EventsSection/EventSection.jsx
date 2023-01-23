import React from 'react'
import styles from "./EventSection.module.scss"
import EventTab from "../EventTab/EventTab"
import CardsOfEvents from './CardsOfEvents/CardsOfEvents'

const EventSec = () => {
  return (
    <div className={styles.eventSec}>
      <EventTab />
      <CardsOfEvents />
    </div>
  )
}

export default EventSec
