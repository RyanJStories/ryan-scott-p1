import React from 'react';

const AlbumPage = ({ song }) => {
  return (
    <div>
      <h1>{song.title}</h1>
      <img src={song.image} alt={song.title} />
      <p>Description: {song.description}</p>
      <audio controls>
        <source src={song.audio} type="audio/mpeg" />
        Your music cannot be found at this time
      </audio>
      
    </div>
  );
};

export default AlbumPage;
