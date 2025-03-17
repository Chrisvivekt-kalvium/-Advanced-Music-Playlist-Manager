import React from 'react'
import { useState } from 'react'

const SongList = ({songs}) => {




    const [song,setSong] = useState(songs)
    
    
    const [searchQuery, setSearchQuery] = useState('');  // use state for search // 1st step
    
    
    const [newSong,SetNewSong] = useState({
        title:'',
        artist:'',
        duration:''
    })
    const handleChange = (e)=>{
        
        SetNewSong({...newSong,[e.target.name]:e.target.value})
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();

        setSong([...song,newSong])
        SetNewSong({
            title:'',
            artist:'',
            duration:''
        })


    }

    // function for sort 
    const handleSort = (sortBy) => {
        const sortedSongs = [...song].sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
          return 0;
        });
        setSong(sortedSongs);
      };


    const handleDelete =(index)=>{
        const temp = [...song]
        temp.splice(index,1)
        setSong(temp)
    }


    const handleSearch = () => {
        const filteredSongs = song.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.artist.toLowerCase().includes(searchQuery.toLowerCase()) 
            
        );
        setSong(filteredSongs);
    }

    

  return (



    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='title' name='title' onChange={handleChange} value={newSong.title} />
            <input type='text' placeholder='artist' name='artist' onChange={handleChange} value={newSong.artist} />
            <input type='text' placeholder='duration' name='duration' onChange={handleChange} value={newSong.duration} />
            <button >Add song</button>
        </form>

    
        {/* second step for search */}

        <div>
        <input
          type="text"
          placeholder="Search songs by title, artist, or duration"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value) }
        
        />
       <button onClick={handleSearch}>search</button>
      </div>





        {/* Sort the songs  */}
        <div>
        <button onClick={() => handleSort('title')}>Sort by Title</button>
        <button onClick={() => handleSort('artist')}>Sort by Artist</button>
      
      </div>
  

        <h1>Songs list</h1>
      {song.map((item,index)=>(
        <div key={index}>
            <h2>{item.title}</h2>
            <h3>{item.artist}</h3>
            <h4>{item.duration}</h4>
            <button onClick={handleDelete}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default SongList
