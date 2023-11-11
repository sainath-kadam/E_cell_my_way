import React from 'react'
import './Gallery.css'

import { GalleryData } from '../../Assets/data/GalleryData.js';
import GalleryCard from '../../Components/ReuseableCard/Gallery/GalleryCard.js';
const Gallery = ({ gotoAbout, gotoOrganizer }) => {
  return (
    <div className='event'style={{ backgroundColor: 'black' }}>
    <div className="event-page--container">
      <div className="anim-main-container">
      </div>
      <div className="event-card--conatiner">
        {GalleryData.map((card) => {
          return (
            <GalleryCard
              key={card.key}
              title={card.title}
              descrip={card.descrip}
              img={card.image}
            />
          );
        })}
      </div>
      <hr className="hr" />
    </div>
    </div>
  );
};

export default Gallery;