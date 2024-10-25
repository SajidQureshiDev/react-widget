// MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="grid-container">
        {/* First Row */}
        <div className="grid-item black"></div>
        <div className="grid-item black"></div>
        <div className="grid-item black"></div>
        <div className="grid-item text-block">Insert Textblock</div>
        <div className="grid-item black"></div>

        {/* Second Row */}
      
        <div className="grid-item video-block">
          <span>Insert Random Video</span> 
          <div className="video-overlay">
            <button className="nesting-btn">NESTING</button>
          </div>
        </div>
        <div className="grid-item black"></div>

        {/* Third Row */}
        <div className="grid-item random-quote">Insert Random Quote</div>
        <div className="grid-item black"></div>
      </div>
    </div>
  );
};

export default MainContent;
