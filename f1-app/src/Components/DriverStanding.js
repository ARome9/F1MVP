import React, { useState, useEffect } from 'react';
import '../App.css';

let DriverStanding = ({ driver }) => (
  <>
  <li className="driver-standing"> {driver.Driver.givenName} {driver.Driver.familyName}</li>
  </>
  );

export default DriverStanding;