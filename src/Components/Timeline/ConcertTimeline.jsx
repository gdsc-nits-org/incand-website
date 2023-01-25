import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import CardsOfConcerts from '../CardsOfConcerts/CardsOfConcerts'
import style from "./ConcertTimeline.module.scss";
const ConcertTimeline = () => {
  return (
    <div className={style.timelineContainer}>
      <VerticalTimeline lineColor='#fff' className={style.timeline} layout='1-column-left'>
        <VerticalTimelineElement className={style.verticalTimeline} iconStyle={{ background: '#04102F', color: '#fff' }} icon={<FaGraduationCap />} contentStyle = {{ background : '#04102F', width : '80%', padding : '0rem'}} contentArrowStyle={{color:'#04102F'}}>
        <CardsOfConcerts />
        </VerticalTimelineElement>
        <VerticalTimelineElement className={style.verticalTimeline} iconStyle={{ background: '#04102F', color: '#fff' }} icon={<FaGraduationCap />} contentStyle = {{ background : '#04102F', width : '80%', padding : '0rem'}} contentArrowStyle={{background:'#04102F'}}>
        <CardsOfConcerts />
        </VerticalTimelineElement>
        <VerticalTimelineElement className={style.verticalTimeline} iconStyle={{ background: '#04102F', color: '#fff' }} icon={<FaGraduationCap />} contentStyle = {{ background : '#04102F', width : '80%', padding : '0rem'}} contentArrowStyle={{background:'#04102F'}}>
        <CardsOfConcerts />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
};

export default ConcertTimeline
