import React from 'react';
import { Link } from 'gatsby';

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="../pages/album1">Thinking Of Words</Link>
          <Link to="../pages/album2">Nightmares Attack!</Link>
          <Link to="../pages/album3">Night Whispers</Link>
          <Link to="../pages/album4">Clouds Scape</Link>
          <Link to="../pages/index.js">Home</Link>
        </li>
        {}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
