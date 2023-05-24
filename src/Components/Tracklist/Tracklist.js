import React from "react";
import Track from "../Track/Track";

import './Tracklist.css';

function Tracklist({ tracks }) {
  return (
    <div className="tracklist">
      <div>
        {tracks.map(track => {
          return (
            <div key={track.id}>
              <Track track={track} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Tracklist;
