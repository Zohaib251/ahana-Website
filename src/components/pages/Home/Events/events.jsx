import React from "react";
import HeadingSection from "../headingSection.jsx";
import Video from "./video.jsx";
import EventsCard from "./eventsCard.jsx";
import events1 from "../../../../image/pages/home/events/1.jpg";
import events2 from "../../../../image/pages/home/events/2.jpg";
import events3 from "../../../../image/pages/home/events/3.jpg";
const events = () => {
  return (
    <div className="pt-12 pb-32 bg-[#fff] flex flex-col items-center justify-center text-center">
      <HeadingSection
        title="Upcoming Events"
        description="Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!"
      />
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 ">
        <div>
          <Video />
        </div>
        
        <div className="flex flex-col space-y-5">
          <EventsCard events={events1} name="Lole White Yoga Tour" />
          <EventsCard events={events2} name="Free Yoga Madrid" />
          <EventsCard events={events3} name="One Love Dallas" />
        </div>
      </div>
    </div>
  );
};

export default events;
