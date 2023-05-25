import React from "react";

import './SearchResults.css';
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  const { searchResults, onAdd } = props;
  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} />
    </div>
  );
};

export default SearchResults;
