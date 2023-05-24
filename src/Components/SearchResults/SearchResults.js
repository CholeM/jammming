import React from "react";

import './SearchResults.css';
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ tracks }) {
  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <Tracklist tracks={tracks} />
    </div>
  );
};

export default SearchResults;
