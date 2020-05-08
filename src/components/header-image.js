import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "newdevcity-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt='header picture of a sihouetted downtown skyline with a moire glitch for the sky.'
    />
  );
};
