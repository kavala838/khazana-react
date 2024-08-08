import React from 'react';
import './ComingSoon.css';

const ComingSoon = ({ componentName }) => {
  return (
    <div className="coming-soon-container">
      <div className="circle-loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <h1 className="coming-soon-text">
        {componentName} is Coming Soon!
      </h1>
      <p className="subtext">
        We are working hard to bring you this feature. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;
