import React from "react";
import Track from "../Track/Track";

import './Tracklist.css';

function Tracklist(props) {
  const { tracks, onAdd, isRemoval, onRemove } = props;
  
  return (
    <div className="tracklist">
      <div>
        {tracks?.map((track) => {
          return (
            <Track 
              key={track.id}
              track={track}
              onAdd={onAdd}
              isRemoval={isRemoval}
              onRemove={onRemove}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Tracklist;
