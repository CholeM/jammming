import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div> */}
    </div>  
  );
}

export default App;
