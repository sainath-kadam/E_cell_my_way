// AboutUs.js

import React from 'react';
import './About.css'; // Make sure to import the CSS file or include the styles in your component file
import about1 from '../../Assets/images/about1.jpg';
import about2 from '../../Assets/images/about2.jpg';
import about3 from '../../Assets/images/about3.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <div className="about-us-image left">
          <img
            src={about2}
            alt="Left Image"
          />
        </div>
        <div className="about-us-info left">
          <h2>Welcome to E cell IITT Tiruchirappalli</h2>
          <p>
            E cell IITT Tiruchirappalli, located in Evansville, IN, is a dynamic community dedicated to fostering innovation and entrepreneurship. Our mission is to empower individuals and businesses, providing them with the tools and resources needed to thrive in today's competitive landscape.
          </p>
          <p>
            At E cell IITT Tiruchirappalli, we believe in the power of ideas and the impact they can have. Whether you are a startup enthusiast, an aspiring entrepreneur, or an established business looking to innovate, we are here to support your journey. Join us in shaping the future of entrepreneurship!
          </p>
          <a href="#" title="Learn More">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="about-us-content">
        <div className="about-us-info left">
          <h2>About Our Work</h2>
          <p>
            E cell IITT Tiruchirappalli actively works towards fostering an entrepreneurial ecosystem. Through a series of events, workshops, and mentorship programs, we empower individuals to transform their ideas into successful ventures.
          </p>
          <p>
            Over the years, E cell IITT Tiruchirappalli has organized numerous events, including startup competitions, networking sessions, and industry talks. Our commitment to nurturing innovation has led to the success of several startups that originated from our community.
          </p>
          <a href="#" title="Learn More">
            LEARN MORE
          </a>
        </div>
        <div className="about-us-image right">
          <img
            src={about3}
            alt="Right Image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
