import React, { useState, useEffect } from 'react';
import driverPhotos from './photos/driverPhotos.js';
import '../App.css';

let Driver = ({ driver }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <>
    <div className="driver-card-info">
      <div className="driver-card"
        onClick={() => { openInNewTab(driver.url) }}
        style={{backgroundImage: "url(" + `${driverPhotos[driver.code]}` + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '150px',
          height: '150px'
        }}>
      </div>
      <div className="driver-name-container" style={{color: "white"}}>
        <div className="driver-info">
          <h6>{driver.givenName} {driver.familyName}</h6>
        </div>
      </div>
    </div>
  </>
  );
};

export default Driver;