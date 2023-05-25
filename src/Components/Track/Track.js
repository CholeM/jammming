import React, { useCallback } from "react";

import './Track.css';

function Track(props) {
  const { onAdd, onRemove, isRemoval, track } = props; 
  const addTrack = useCallback((e) => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback((e) => {
    onRemove(track);
  }, [onRemove, track]);

  const renderButton = () => {
    if (isRemoval) {
      return (
        <button className="btn" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button type="button" className="btn" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="container">
      <div className="name">
        <h3 className="trackName">{track.name}</h3>
        {renderButton ()}
      </div>
      <p className="details">
        <span>{track.artist}</span>
        <span> | </span>
        <span>{track.album}</span>
      </p>
    </div>
  );
};

export default Track;
