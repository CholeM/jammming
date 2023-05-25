import React, { useCallback } from "react";

import './Playlist.css';
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
  const { onNameChange, onSave, playlistTracks, onRemove } = props;

  const handleNameChange = useCallback((e) => {
    onNameChange(e.target.value);
  }, [onNameChange]);

  return (
    <div className="play-container">
      <h2>Playlist</h2>
      <input className="input" onChange={handleNameChange} defaultValue={"New Playlist"} />
      <Tracklist
        tracks={playlistTracks}
        isRemoval={true}
        onRemove={onRemove}
      />
      <button type='button' className='playlist-btn' onClick={onSave}>
        Save To Spotify
      </button>
    </div>
  );
};

export default Playlist;
