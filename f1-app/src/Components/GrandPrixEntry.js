import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import circuitPhotos from './photos/circuitPhotos.js';
import '../App.css';


let GrandPrixEntry = ({ race }) => {
  const [show, setShow] = useState(false);
  const [raceResults, setResults] = useState([]);

  const top10 = raceResults.slice(0, 11);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  useEffect(() => {
    let config = {
      method: 'get',
      url: `http://ergast.com/api/f1/${race.season}/${race.round}/results.json`,
      headers: { }
    }
    axios(config)
      .then((response)=> {
        setResults(response.data.MRData.RaceTable.Races[0].Results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Modal show={show} onHide={() => { setShow(false) }}>
          <Modal.Header closeButton>
            <Modal.Title>{race.raceName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Circuit Name:
              <p>{race.Circuit.circuitName}</p>
            </h3>
            <h3>Race Results:</h3>
            <ol>
              {top10.map(pos =>
                  <li>{pos.Driver.familyName} #{pos.number}</li>
              )}
            </ol>
            <h3>More Info:
              <a href= "" onClick={() => {openInNewTab(race.Circuit.url)}}>{race.raceName}</a>
            </h3>
          </Modal.Body>
      </Modal>

      <div className="race-card-info">
        <div className="race-card" onClick={() => { setShow(true)}}
          style={{backgroundImage: "url(" + `${circuitPhotos[race.Circuit.circuitId]}` + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '150px',
          height: '150px'
        }}>
        </div>
        <div className="race-info-container" style={{color: "white"}}>
          <div className="race-info" >
            <h6><strong>{race.raceName}</strong></h6>
            <h6><strong>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</strong></h6>
          </div>
        </div>
      </div>
    </>
  )
};

export default GrandPrixEntry;