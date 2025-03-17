import React, { useState } from 'react';
import data from '../data'; // Ensure this is correct path
const SongList = () => {
  // Default to empty array if dummeData is undefined
  const [songs, setSongs] = useState(data);
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    duration: '',
  });

  const handleChange = (e) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
      setSongs([...songs, newSong]);
      setNewSong({
        title: '',
        artist: '',
        duration: '',
      });

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={newSong.title}
        />
        <input
          type="text"
          placeholder="Artist"
          name="artist"
          onChange={handleChange}
          value={newSong.artist}
        />
        <input
          type="text"
          placeholder="Duration"
          name="duration"
          onChange={handleChange}
          value={newSong.duration}
        />
        <button type="submit">Add Song</button>
      </form>

      <div>
        {songs.map((final, index) => (
          <div key={index}>
            <h1>{final.title}</h1>
            <p>{final.artist}</p>
            <p>{final.duration}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
