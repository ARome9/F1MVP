import React, { useState, useEffect } from 'react';
import '../App.css';

let DriverStanding = ({ driver }) => (
  <>
  <div className="driver-standing"> {driver.position}. {driver.Driver.givenName} {driver.Driver.familyName}</div>
  </>
  );

export default DriverStanding;