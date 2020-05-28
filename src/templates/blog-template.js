import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

// import Img from 'gatsby-image';
import Layout from '../components/layout';

import 'typeface-lekton';

const BlogPostTemplate = ({ data }) => {
  // extract the contents from data
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

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
        }}
      >
        by {frontmatter.author} | {frontmatter.date}
      </h3>
      <p
        style={{
          fontWeight: `bold`,
          fontSize: `1.35rem`,
          marginBottom: `2rem`,
        }}
      >
        Tags:{' '}
        {frontmatter.tags.map((tag) => {
          return (
            <Link
              key={tag}
              to={`/tags/${kebabCase(tag)}/`}
              style={{ textDecoration: `none` }}
            >
              <span> {tag} </span>
            </Link>
          );
        })}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p
        style={{
          fontWeight: `bold`,
          fontSize: `1rem`,
          marginBottom: `2rem`,
        }}
      >
        Tags:{' '}
        {frontmatter.tags.map((tag) => {
          return (
            <Link
              key={tag}
              to={`/tags/${kebabCase(tag)}/`}
              style={{ textDecoration: `none` }}
            >
              <span> {tag} </span>
            </Link>
          );
        })}
      </p>
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
        tags
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;
