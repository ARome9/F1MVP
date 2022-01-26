import React from 'react';
import axios from 'axios';
import '../App.css';

let Constructor = (props) => {
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
          <h6>{props.team.name}</h6>
        </div>
      </div>
    </>
  )
};

export default Constructor;