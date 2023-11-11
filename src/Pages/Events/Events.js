import React from 'react';
import "./Events.css";
import EventCard from "../../Components/ReuseableCard/EventCard/EventCard";
import EventData from "../../Assets/data/EventData";
const Events = () => {
  return (

    <div className='container' style={{ backgroundColor: 'black' }}>
      <div className="home-section-two">
        <div className="border-container atrang-sec">
          <h1 className="section-heading"></h1>
          <div className="council-card--container">
            {EventData.map((ele) => {
              return (
                <EventCard
                  key={ele.key}
                  img={ele.img}
                  name={ele.name}
                  post={ele.post}
                  about={ele.about}
                 
                  tag={ele.tag}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
