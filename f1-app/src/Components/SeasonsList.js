import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import GrandPrixEntry from './GrandPrixEntry.js';

let SeasonsList = () => {
  const [schedule, setSchedule] = useState([]);
  const [index, setIndex] = useState(0);

  const raceSchedule = schedule.slice(index, index + 4);

  const leftSlide = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  }
  const rightSlide = () => {
    if (index + 4 <= schedule.length - 1) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/current.json',
      headers: { }
    }
    axios(config)
      .then((response)=> {
        setSchedule(response.data.MRData.RaceTable.Races);
        console.log('Hello, here are the season results', response);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <>
      <h1 className="header">2021 Season Schedule</h1>
      <div className="season-list">
        <div className="season-carousel">
        <i className="fas fa-chevron-left" alt='' onClick={leftSlide}></i>
      {raceSchedule.map(race => <GrandPrixEntry key={race.round} race={race}/>)}
      <i className="fas fa-chevron-right" alt='' onClick={rightSlide}></i>
        </div>
      </div>
    </>
  )
};

export default SeasonsList;