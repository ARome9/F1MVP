import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import '../App.css';


let GrandPrixEntry = ({ race }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={() => { setShow(true)}}
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

        <Modal show={show} onHide={() => { setShow(false) }}>
          <Modal.Header closeButton>
            <Modal.Title>{race.raceName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Circuit Name: {race.Circuit.circuitName}</h2>
          </Modal.Body>
        </Modal>
    </>
  )
};

export default GrandPrixEntry;