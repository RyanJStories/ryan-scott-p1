import React from 'react';
import { graphql } from 'gatsby';

const AlbumPage = ({ data }) => {
  const { title, description, image, audio } = data.contentfulAlbum;

  return (
    <div>
      <h1>{title}</h1>
      <img src={image.file.url} alt={title} />
      <p>Description: {description}</p>
      <audio controls>
        <source src={audio.file.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
    </div>
  );
};

export const query = graphql`
  query() {
    contentfulAlbum(){
      title
      description
      image {
        file {
          url
        }
      }
      audio {
        file {
          url
        }
    }
    }
  }
`;

export default AlbumPage;
