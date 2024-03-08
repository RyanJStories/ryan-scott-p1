import React from 'react';
import { graphql } from 'gatsby';
import AlbumPage from '../components/AlbumPage';

const Album4 = ({ data }) => <AlbumPage data={data} />;

export const query = graphql`
  query {
    contentfulAlbum(title: { eq: "" }) {
        ...AlbumFields
      }
  }
`;

export default Album4;