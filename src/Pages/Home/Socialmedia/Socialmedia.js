// Socialmedia.js
import React from 'react';
import './Socialmedia.css';

const Socialmedia = () => {
  return (
    <div className='social-media'>
      <div className='MuiIconButton-root icon-buttons'>
        {/* Home Page Link */}
        <a href='YOUR_HOME_PAGE_LINK' target='_blank' className='home-page-link'>
          <i className='fas fa-home'></i>
        </a>

        {/* Social Media Icons */}
        <a href='YOUR_TWITTER_LINK' target='_blank'>
          <i className='fab fa-twitter'></i>
        </a>

        <a href='YOUR_INSTAGRAM_LINK' target='_blank'>
          <i className='fab fa-instagram'></i>
        </a>

        <a href='YOUR_LINKEDIN_LINK' target='_blank'>
          <i className='fab fa-linkedin'></i>
        </a>

        <a href='YOUR_FACEBOOK_LINK' target='_blank'>
          <i className='fab fa-facebook'></i>
        </a>

        <a href='YOUR_MAIL_LINK' target='_blank'>
          <i className='fas fa-envelope'></i>
        </a>
      </div>
    </div>
  );
}

export default Socialmedia;
