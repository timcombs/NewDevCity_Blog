import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/layout';

const BlogPostTemplate = ({ data }) => {
  // extract the contents from data
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  let postImgFluid = frontmatter.postImg.childImageSharp.fluid;

  // return the component layout
  return (
    <Layout>
      <Img fluid={postImgFluid} />
      <h1>{frontmatter.title}</h1>
      <h3>
        by {frontmatter.author} {/* |{frontmatter.date} */}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
