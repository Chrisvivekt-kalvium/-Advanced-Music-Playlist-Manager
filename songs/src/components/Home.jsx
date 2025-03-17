import React from 'react'
import songs from '../data'
import SongList from './SongList'
const Home = () => {
 
    return (
    <div>
      <h1>Songs</h1>
      <SongList songs={songs} />
    </div>
  )
}

export default Home
