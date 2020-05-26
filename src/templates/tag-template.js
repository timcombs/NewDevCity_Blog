import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const TagPageTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with `;

  return (
    <Layout>
      <h1
        style={{
          color: `#005400`,
          fontFamily: `lekton, Verdana, sans-serif`,
          fontWeight: `normal`,
          fontStyle: `normal`,
        }}
      >
        {tagHeader}
        <strong>{tag}</strong>
      </h1>
      {edges.map(({ node }) => {
        const { slug } = node.frontmatter;
        const { title } = node.frontmatter;
        const { excerpt } = node;

        return (
          <Link
            to={slug}
            key={node.id}
            style={{
              color: `#005400`,
              fontFamily: `lekton, Verdana, sans-serif`,
              fontWeight: `normal`,
              fontStyle: `normal`,
              textDecoration: `none`,
            }}
          >
            <h1>{title}</h1>
            <div style={{ fontSize: `1.25rem` }}>{excerpt}</div>
            <p
              className='continue'
              style={{
                textDecoration: `#009f00 double underline`,
                fontSize: `1.25rem`,
              }}
            >
              continue
            </p>
          </Link>
        );
      })}
    </Layout>
  );
};

TagPageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default TagPageTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            tags
          }
        }
      }
      totalCount
    }
  }
`;
