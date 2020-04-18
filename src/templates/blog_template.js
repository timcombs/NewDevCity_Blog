import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/layout';

import 'typeface-lekton';

const BlogPostTemplate = ({ data }) => {
  // extract the contents from data
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  let postImgFluid = frontmatter.postImg.childImageSharp.fluid;

  // return the component layout
  return (
    <Layout>
      <h1
        style={{
          textAlign: `center`,
          fontSize: `3rem`,
        }}
      >
        {frontmatter.title}
      </h1>
      <h3
        style={{
          fontSize: `1rem`,
          paddingBottom: `1rem`,
        }}
      >
        by {frontmatter.author} {/* |{frontmatter.date} */}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Img fluid={postImgFluid} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const PostDataQuery = graphql`
  query postDataQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        date
        postImg {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
