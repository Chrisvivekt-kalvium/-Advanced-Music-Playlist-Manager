import React from 'react';
import data from '../data'; // Ensure this is correct path

import SongList from './SongList';

const Home = () => {
  console.log('dummeData in Home:', data); // Add this line to debug

  return (
    <div>
      <SongList  />
    </div>
  );
};

export default Home;
