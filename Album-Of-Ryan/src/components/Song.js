import React from 'react';
import { Link } from 'gatsby';

const Song = ({ song }) => {
  return (
    <div>
      <Link to={`/song/${song.slug}`}>
        <img src={song.image} alt={song.title} />
        <h3>{song.title}</h3>
      </Link>
    </div>
  );
};

export default Song;
