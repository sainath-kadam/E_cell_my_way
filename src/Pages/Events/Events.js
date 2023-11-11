import React from 'react'
import './Events.css'
import EventCard from '../../Components/ReuseableCard/EventCards/EventCard';
import { EventData } from '../../Assets/data/EventData.js';


function Events() {
  return (
    <div className='container' style={{ backgroundColor: 'black' }}>
      <div className="event-page--container">

        <h1 className="event-heading">
          EVENTS
        </h1>
        <div className="event-card--conatiner">
          {EventData.map((card) => {
            return (
              <EventCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Events
