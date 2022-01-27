import React, { useState, useEffect } from 'react';
import DriversList from './Components/DriversList.js';
import SeasonsList from './Components/SeasonsList.js';
import ConstructorList from './Components/ConstructorList.js';
// import CircuitList from './Components/CircuitList.js';
import StandingsList from './Components/StandingsList.js';
import Playlist from './Components/Playlist.js';
import YOUTUBE_API_KEY from './config.js';
import axios from 'axios';
import './App.css';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

let getPlaylist = (callback) => {
  axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLfoNZDHitwjU-UZEPlWHRW7SYO20fO6v0&maxResults=21&key=${YOUTUBE_API_KEY}`)
    .then(results => {
      console.log('results ', results);
      callback(results.data.items);
    })
    .catch(error => {
      console.error('Error: ', error);
    })
};

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getPlaylist(setVideos);
  }, []);

  return (
    <div className="App">
      <div className="banner-container">
        <img className="banner" src={require("./f1.png")}></img>
      </div>
      <div className="container">
        <div className="playlist-container">
          <Playlist videos={videos} />
        </div>
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
