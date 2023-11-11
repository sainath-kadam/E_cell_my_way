import React, { useEffect, useState } from 'react';
import './Tagline.css';  // Import the combined CSS file

const Tagline = () => {
  const tagline = "Catalyzing Reformers";
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < tagline.length) {
        setAnimatedText((prevText) => prevText + tagline.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className='home-container'>
      <div className='tagline-container'>
        <div className='name'>
          <span className='e-cell-name'>Entrepreneurship Cell</span>
          <span className='college-name'>IIIT Tiruchirappalli</span>
        </div>
        <div>
          <h4 className='tagline'>"{animatedText}"</h4>
        </div>
        <a href="LINK_URL" className="button" target='blank'>Join Us</a>
      </div>
    </div>
  );
}

export default Tagline;
