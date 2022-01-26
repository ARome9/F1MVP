import logo from './logo.svg';
import './App.css';

import DriversList from './Components/DriversList.js';
import SeasonsList from './Components/SeasonsList.js';
import ConstructorList from './Components/ConstructorList.js';
import CircuitList from './Components/CircuitList.js';
import StandingsList from './Components/StandingsList.js';

function App() {
  return (
    <div className="App">
      <h1>F1</h1>
      <div className="container">
        {/* <div className="drivers">
          <DriversList />
        </div> */}
        <div className="middle-container">
          <div className="seasons">
            <SeasonsList />
          </div>
          <div className="constructor">
            <ConstructorList />
          </div>
          <div className="drivers">
            <DriversList />
          </div>
        </div>
        <div className="standings">
          <StandingsList />
        </div>
      </div>
    </div>
  );
}

export default App;
