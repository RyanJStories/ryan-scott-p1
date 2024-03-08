import React from 'react';
import { Link } from 'gatsby';

const HomePage = ({ songs }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <Link to={`/song/${song.slug}`}>{song.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
