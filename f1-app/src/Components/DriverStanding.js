import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

let DriverStanding = ({ driver }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Modal show={show} onHide={() => { setShow(false) }}>
              <Modal.Header closeButton>
                <Modal.Title>{driver.familyName}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Wins:
                  <p>{driver.familyName}</p>
                </h3>
                <h3>Race Results:</h3>
                <h3>Fastest Lap:
                  <a href= "">{driver.familyName}</a>
                </h3>
              </Modal.Body>
          </Modal>
      <div className="driver-standing" onClick={() => { setShow(true)}} > {driver.position}. {driver.Driver.givenName} {driver.Driver.familyName}</div>
    </>
  )
};

export default DriverStanding;