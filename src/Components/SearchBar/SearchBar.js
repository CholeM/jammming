import React, { useEffect, useState } from "react";

import './SearchBar.css';

import tracks from '../../mockData/tracks.json';

function SearchBar({ setSearchResults }) {
  const data = tracks.tracks;

  console.log(data)

  const [search, setSearch] = useState('');
  const [searchWords, setSearchWords] = useState('');

  console.log(search)
  console.log(searchWords)

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSearchWords(search)
    console.log('submitted')
  }

  useEffect(() => {
    setSearchResults(data)
  }, [])

  return (
    <div className="bar-container">
      <form autoComplete="off">
        <input
          type="text"
          id="search"
          className="input"
          onChange={handleChange}
          placeholder="Enter term"
        />
        <button type="submit" className="search-btn" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
