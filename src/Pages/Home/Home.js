import React from 'react';
import Tagline from './Tagline/Tagline';
import Socialmedia from './Socialmedia/Socialmedia';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      <Tagline />
      <Socialmedia />
    </div>
  );
}

export default Home;
