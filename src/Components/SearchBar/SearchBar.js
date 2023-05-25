import React, { useCallback, useState } from "react";

import './SearchBar.css';

function SearchBar(props) {
  const { onSearchResults } = props;
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    onSearchResults(term);
  }, [onSearchResults, term]);

  return (
    <div className="bar-container">
      <input
        type="text"
        id="search"
        className="input"
        onChange={handleTermChange}
        placeholder="Enter term"
      />
      <button type="submit" className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
