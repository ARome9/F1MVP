import React, { useState, useEffect } from 'react';
import '../App.css';

let Driver = ({ driver }) => {
  return (
    <>
    <div
      style={{backgroundImage: "url(" + "f1Logo.jpeg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '150px',
        height: '150px'
      }}>
      <div style={{color: "white"}}>
        <h6>{driver.givenName} {driver.familyName}</h6>
      </div>
    </div>
  </>
  );
};

export default Driver;