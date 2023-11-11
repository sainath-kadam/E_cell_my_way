// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='copyrights'>All Rights Reserved &copy;E-Cell IIIT Tiruchirappalli</div>
      <div className='developer'>
        Made with <img
          className="heart-footer"
          src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif"
          alt="heart"
        /> By Web Team E-cell IIITT
      </div>
    </div>
  );
}

export default Footer;
