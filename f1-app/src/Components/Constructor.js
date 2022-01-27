import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import constructorsPhotos from './photos/constructorsPhotos.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


let Constructor = (props) => {
  const [show, setShow] = useState(false);
  const [constructorStandings, setConstructorStandings] = useState([]);
  const [constructorDrivers, setConstructorDrivers] = useState([]);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  useEffect(() => {
    let config = {
      method: 'get',
      url: `http://ergast.com/api/f1/constructors/${props.team.constructorId}/constructorStandings.json`,
      headers: { }
    }
    axios(config)
      .then((response)=> {
        setConstructorStandings(response.data.MRData.StandingsTable.StandingsLists);
        console.log('Hello, here are the constructors info!', response.data.MRData.StandingsTable.StandingsLists);
      })
      .then(() => {
        let driverConfig = {
          method: 'get',
          url: `http://ergast.com/api/f1/2021/constructors/${props.team.constructorId}/drivers.json`,
          headers: { }
        }
        axios(driverConfig)
          .then((response) => {
            setConstructorDrivers(response.data.MRData.DriverTable.Drivers);
            console.log('Hello, here are the constructor driver results', response.data.MRData.DriverTable.Drivers)
          })
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Modal show={show} onHide={() => { setShow(false) }}>
            <Modal.Header closeButton>
              <Modal.Title>{props.team.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body">
                  <h5>Team Standings:</h5>
                  <table>
                    <tbody>
                      <tr>
                        <th>Year</th>
                        <th>Position</th>
                      </tr>
                      {constructorStandings.map(val => {
                        return (
                          <tr>
                            <td>{val.season}</td>
                            <td>{val.ConstructorStandings[0].position}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h4>Current Drivers:</h4>
                  <div>
                    <div>
                      {constructorDrivers.map(driver => {
                        return (
                          <h5>{driver.familyName}</h5>
                        )
                      })}
                    </div>
                  </div>
                </div>
              <p>More Info:
                <a href= "" onClick={() => {openInNewTab(props.team.url)}}> {props.team.name}</a>
              </p>
            </Modal.Body>
        </Modal>
      <div
        className="driver-card"
        onClick={() => { setShow(true)}}
        style={{backgroundImage: "url(" + `${constructorsPhotos[props.team.constructorId]}` + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '150px',
          height: '150px'
        }}>
      </div>
    </>
  )
};

export default Constructor;