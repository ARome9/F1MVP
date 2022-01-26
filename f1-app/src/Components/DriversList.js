import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import Driver from './Drivers.js';

let DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2021/drivers.json',
      headers: { }
    }
    axios(config)
      .then((response)=> {
        setDrivers(response.data.MRData.DriverTable.Drivers);
        console.log('Hello!', response.data.MRData.DriverTable);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="drivers-container">
      <h1 className="drivers-heading">Drivers</h1>
      <div className="drivers-list">
        <ul>
        {drivers.map(driver =>
          <Driver key={driver.code} driver={driver} />
          )}
        </ul>
        <button className="back-btn">Back</button>
        <button>Next</button>
      </div>
    </div>
  )
};

export default DriversList;