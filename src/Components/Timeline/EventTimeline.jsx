import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import CardsOfEvents from '../CardsOfEvents/CardsOfEvents';
import style from "./EventTimeline.module.scss";
const EventTimeline = () => {
  return (
    <div className={style.timelineContainer}>
      <VerticalTimeline lineColor='#fff' className={style.timeline} layout='1-column-left'>
        <VerticalTimelineElement className={style.verticalTimeline} iconStyle={{ background: '#04102F', color: '#fff' }} icon={<FaGraduationCap />} contentStyle = {{ background : '#04102F', width : '80%', padding : '0rem'}} contentArrowStyle={{background:'#04102F'}}>
        <CardsOfEvents />
        </VerticalTimelineElement>
        <VerticalTimelineElement className={style.verticalTimeline} iconStyle={{ background: '#04102F', color: '#fff' }} icon={<FaGraduationCap />} contentStyle = {{ background : '#04102F', width : '80%', padding : '0rem'}} contentArrowStyle={{background:'#04102F'}}>
        <CardsOfEvents />
        </VerticalTimelineElement>
        <VerticalTimelineElement className={style.verticalTimeline} iconStyle={{ background: '#04102F', color: '#fff' }} icon={<FaGraduationCap />} contentStyle = {{ background : '#04102F', width : '80%', padding : '0rem'}} contentArrowStyle={{background:'#04102F'}}>
        <CardsOfEvents />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
};

export default EventTimeline
