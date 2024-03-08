import React from 'react';
import HomePage from '../components/HomePage.js'; 

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home"/>
    <ul className={styles.list}>
    {
      data.allContentfulBlogPost.edges.map(edge => (
      <li key={edge.node.id}>
      </li>
      ))
    }
     </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const query = graphql`
{
  allContentfulAlbumPost{
    edges{
      node{
        title
        body{
          childMarkdownRemark{
            excerpt
          }
        }
       
        
          }
        }
      }
    }`

export default IndexPage;
