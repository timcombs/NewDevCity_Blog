import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
// import SEO from '../components/seo';

/*  ***************** This is the function to extract the data *****************
 ***** Function to create a list of <h1> elements with Post title ***********
 ***** @param {*} data
 */

function getPosts(data) {
  let posts = [];
  let postsList = data.allMarkdownRemark.edges;
  postsList.forEach((element) => {
    let postData = element.node.frontmatter;

    posts.push(
      <Link
        to={postData.slug}
        key={element.node.id}
        style={{
          fontSize: `3vw`,
          color: `#005400`,
          fontFamily: `lekton, Verdana, sans-serif`,
          fontWeight: `normal`,
          fontStyle: `normal`,
          textDecoration: `#009f00 double underline`,
        }}
      >
        <h1>{postData.title}</h1>
      </Link>
    );
  });

  return posts;
}

/*  ****************** This is a stateless React component *********************
    The data passed into the components is from the result after executing
    the GraphQL query below it.
*/

const IndexPage = ({ data }) => <Layout>{getPosts(data)}</Layout>;

export default IndexPage;

/*  *********************** This is the GraphQL query **************************
    The data obtained from the below GraphQL query will be passed into the 
    React component above
*/

export const postsQuery = graphql`
  query postsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
