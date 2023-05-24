import { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar setSearchResults={setResults} />
      <div className="App-container">
        <SearchResults tracks={results} />
        <Playlist />
      </div>
    </div>  
  );
}

export default App;
