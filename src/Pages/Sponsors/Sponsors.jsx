import React from 'react'
import {SponsorsCur, SponsorsHero,SponsorsWhy}from '../../Components'
import SponsorCont from '../../Components/SponsorCont/SponsorCont'
import SponsorPrev from '../../Components/SponsorPrev/SponsorPrev'

import style from './Sponsors.module.scss'
const Sponsors = () => {
  return (
   <div className={style.sponsors}>
      <SponsorsHero />
      <SponsorsWhy/>
      <SponsorsCur/> 
      <SponsorPrev/>
      <SponsorCont/>
      

    </div>
  )
}

export default Sponsors