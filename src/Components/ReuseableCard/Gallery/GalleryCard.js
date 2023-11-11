// Card.js

import React from 'react';
import './GalleryCard.css';

const GalleryCard = ({ image }) => {
  return (
    <div className="gallery-card">
      <img src={image.url} alt={`Gallery Image`} />
      <div className="card-caption">
        <p>{image.caption}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
