import React from "react";

import './Track.css';

function Track({ track }) {
  return (
    <div className="container">
      <div className="name">
        <h3 className="trackName">{track.name}</h3>
        <button type="button" className="btn">+</button>
      </div>
      <p className="details">
        <span>{track.artists[0].name}</span>
        <span> || </span>
        <span>{track.album.name}</span>
      </p>
    </div>
  );
};

export default Track;
