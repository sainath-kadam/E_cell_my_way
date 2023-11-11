
import React from "react";
import "./EventCard.css";
const EventCard = ({
  img,
  name,
  post,
  about,
  tag,
}) => {
  return (
    <div className="box">
      <div className="team-card-svg-animal"></div>
      <div className={`${tag} team-card card-img`}>
        <img className="blur image-main" src={img} alt="profile" />
        <div className="team-card-body">
          <h4 className="name">{name}</h4>
          <h5 className="title">{post}</h5>
          <hr className="team-card-hr" />
          <p className="text">{about}</p>         
          </div>
        </div>
      </div>
    
  );
};
export default EventCard;
