import React from 'react';
import './style.css';

const ProgressBar = ({ width }) => (
  <div className="ProgressBar">
    <div
      className="ProgressBar__Active"
      style={{
        width: `${width}%`
      }}
    ></div>
  </div>
);


export default ProgressBar;
