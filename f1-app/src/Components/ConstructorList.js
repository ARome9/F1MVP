import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import Constructor from './Constructor.js';

let ConstructorList = () => {
  const [constructors, setConstructor] = useState([]);
  const [index, setIndex] = useState(0);

  const firstConstructors = constructors.slice(index, index + 4);

  const leftSlide = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  }
  const rightSlide = () => {
    if (index + 4 <= constructors.length - 1) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2021/constructors.json',
      headers: { }
    }
    axios(config)
      .then((response)=> {
        setConstructor(response.data.MRData.ConstructorTable.Constructors);
        console.log('Hello, here are the constructor results', response.data.MRData.ConstructorTable.Constructors);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <>
      <h1 className="header">Constructors</h1>
      <div className="season-list">
      <div className="season-carousel">
        <i className="fas fa-chevron-left" alt='' onClick={leftSlide}></i>
        {firstConstructors.map(team => <Constructor key={team.constructorId} team={team}/>)}
        <i className="fas fa-chevron-right" alt='' onClick={rightSlide}></i>
        </div>
      </div>
    </>
  )
};

export default ConstructorList;