// Gallery.js

import React from 'react';
import './Gallery.css';

import { GalleryData } from '../../Assets/data/GalleryData.js';
import GalleryCard from '../../Components/ReuseableCard/Gallery/GalleryCard.js';

const Gallery = () => {
  return (
    <div className='gallery'style={{ backgroundColor: 'black' }}>
    <div className="gallery-section">
      {GalleryData.map((item, index) => (
        <div key={index} className="gallery-container">
          {item.images.map((image, i) => (
            <GalleryCard key={i} image={image} />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
