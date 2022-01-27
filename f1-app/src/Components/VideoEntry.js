import React, { useState, useEffect } from 'react';

let VideoEntry = ({ video }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url);
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  return (
    <div>
      <img onClick={() => { openInNewTab(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`)}} src={video.snippet.thumbnails.default.url}></img>
      <h6>{video.snippet.title}</h6>
    </div>
  )

};

export default VideoEntry;