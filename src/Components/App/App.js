import React, { useState, useCallback } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../utils/Spotify';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }, 
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currTrack) => currTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className='App'>
      <h1>Ja<span className="green">mmm</span>ing</h1>
      <SearchBar onSearchResults={search} />
      <div className="App-container">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistTracks={playlistTracks}
          playlistName={playlistName}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist} 
        />
      </div>
    </div>  
  );
}

export default App;
