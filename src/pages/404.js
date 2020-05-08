import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = (data) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "404-void.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <SEO title='404: Not found' />
        <h1
          style={{
            textAlign: `center`,
          }}
        >
          404 - NOT FOUND
        </h1>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt='header picture of a sihouetted downtown skyline with a moire glitch for the sky.'
        />
        <p
          style={{
            textAlign: `center`,
          }}
        >
          You just hit a route that doesn&#39;t exist....
          <br />
          beware you are entering the void.
        </p>
      </Layout>
    )}
  />
);

export default NotFoundPage;
