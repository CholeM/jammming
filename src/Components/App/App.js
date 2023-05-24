import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

import tracks from '../../mockData/tracks.json';

function App() {
  const data = tracks.tracks;

  console.log(data);
  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-container">
        <SearchResults tracks={data} />
        <Playlist />
      </div>
    </div>  
  );
}

export default App;
