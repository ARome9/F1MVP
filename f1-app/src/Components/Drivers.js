import React, { useState, useEffect } from 'react';
import '../App.css';

let Driver = ({ driver }) => {
  return (
    <>
    <h4>{driver.givenName} {driver.familyName}</h4>
    </>
  );
};

export default Driver;