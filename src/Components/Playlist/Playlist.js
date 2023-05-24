import React, { useState } from "react";

import './Playlist.css';

function Playlist() {
  const [playlist, setPlaylist] = useState([]);
  console.log(playlist);

  function handleChange(e) {
    setPlaylist(e.target.value);
  }

  return (
    <div className="play-container">
      <h2>Playlist</h2>
      <button type='button' className='playlist-btn' onChange={handleChange}>
        Save To Spotify
      </button>
    </div>
  );
};

export default Playlist;
