import React from 'react';
import PropTypes from 'prop-types';

// Utilities
import kebabCase from 'lodash/kebabCase';

// Components
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Layout>
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map((tag) => (
            <Link
              key={tag.fieldValue}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              style={{
                color: `#005400`,
                fontFamily: `lekton, Verdana, sans-serif`,
                fontWeight: `bold`,
                fontSize: `1.15em`,
                textDecoration: `none`,
                lineHeight: `1.25em`,
              }}
            >
              {tag.fieldValue} ({tag.totalCount}
              <span> </span> post
              {tag.totalCount === 1 ? '' : 's'})<br />
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  </div>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
