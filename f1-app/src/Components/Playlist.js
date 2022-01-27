import React, { useState, useEffect } from 'react';
import VideoEntry from './VideoEntry.js'

let Playlist = ({ videos }) => (
  <div className="playlist">
    {videos.map(video =>
      <VideoEntry key={video.id} video={video}/>
    )}
  </div>
)

export default Playlist;