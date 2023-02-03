import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CardsOfEvents from "../CardsOfEvents/CardsOfEvents";

import Styles from "./ConcertTimeline.module.scss";

import Data from "../../Data/EventsData.json";

const EventTimeline = () => {
  return (
    <div>
      <VerticalTimeline className={Styles.verticalTimeline} layout="1-column-left">
        {Data.map((data) => (
          <VerticalTimelineElement
            key={data.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#04102F" }}
            contentArrowStyle={{ borderRight: "7px solid  #04102F" }}
            iconStyle={{
              background: "#04102F",
              color: "#fff",
              width: "20px",
              height: "20px",
              transform: "translateX(50%)",
            }}
          >
            <CardsOfEvents
              header={data.header}
              subheader={data.subheader}
              text={data.text}
              header2={data.header2}
              imgUrls={data.imgUrls}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default EventTimeline;
