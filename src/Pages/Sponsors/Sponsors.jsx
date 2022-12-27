import React from 'react'
import {SponsorsCur, SponsorsHero,SponsorsWhy}from '../../Components'
import style from './Sponsors.module.scss'
const Sponsors = () => {
  return (
   <div className={style.sponsors}>
      <SponsorsHero />
      <SponsorsWhy/>
      <SponsorsCur/>
    </div>
  )
}

export default Sponsors