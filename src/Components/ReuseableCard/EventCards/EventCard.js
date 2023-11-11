import React from 'react'
import './EventCard.css'

function EventCard({ title, description, image }) {
  return (
    <div>
      <section class="record">
        <div class="record-arrow"></div>
        <div
          id="record1"
          class="record-display"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div class="record-desc">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    </div>
  )
}

export default EventCard
