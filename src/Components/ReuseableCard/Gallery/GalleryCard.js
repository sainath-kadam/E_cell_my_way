
import React from "react";
import "./GalleryCard.css";

const GalleryCard = ({ title, descrip, img}) => {
  return (
    <section class="record">
      <div class="record-arrow"></div>
      <div
        id="record1"
        class="record-display"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div class="record-desc">
        <h1>{title}</h1>
        <p>{descrip}</p>        
      </div>
    </section>
  );
};

export default GalleryCard;