import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import Driver from './Drivers.js';

let DriversList = () => {
  const [drivers, setDrivers] = useState([]);
  const [index, setIndex] = useState(0);

  const firstDrivers = drivers.slice(index, index + 4);

  const leftSlide = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  }
  const rightSlide = () => {
    if (index + 4 <= drivers.length - 1) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2021/drivers.json',
      headers: { }
    }
    axios(config)
      .then((response)=> {
        setDrivers(response.data.MRData.DriverTable.Drivers);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1 className="drivers-heading">Drivers</h1>
      <div className="drivers-list">
        <div className="driver-carousel">
          <i className="fas fa-chevron-left" alt='' onClick={leftSlide}></i>
          {firstDrivers.map(driver => <Driver key={driver.code} driver={driver} />)}
          <i className="fas fa-chevron-right" alt='' onClick={rightSlide}></i>
        </div>
      </div>
    </>
  )
};

export default DriversList;