import React from 'react';
import axios from 'axios';
import '../App.css';

let GrandPrixEntry = ({ race }) => {
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
          <h6>{race.raceName}</h6>
          <h6>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</h6>
        </div>
        </div>
    </>
  )
};

export default GrandPrixEntry;