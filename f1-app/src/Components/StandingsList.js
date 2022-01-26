import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import DriverStanding from './DriverStanding.js';

let StandingsList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2021/driverStandings.json',
      headers: { }
    }
    axios(config)
      .then((response)=> {
        setDrivers(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        console.log('Hello, here are the driver standings!', response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="standings-container">
      <h1 className="standings-header">Standings</h1>
      <div className="standings-list">
        <ol>
          {drivers.map(driver =>
            <DriverStanding key={driver.Driver.code} driver={driver} />
          )}
        </ol>
      </div>
    </div>
  )
  };

export default StandingsList;