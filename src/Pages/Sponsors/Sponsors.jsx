import React from 'react'
import {SponsorsCur, SponsorsHero,SponsorsWhy}from '../../Components'
import SponsorCont from '../../Components/SponsorCont/SponsorCont'

import style from './Sponsors.module.scss'
const Sponsors = () => {
  return (
   <div className={style.sponsors}>
      <SponsorsHero />
      <SponsorsWhy/>
      <SponsorsCur/> 
      <SponsorCont/>
      

    </div>
  )
}

export default Sponsors