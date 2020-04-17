import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ data }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </div>
  </header>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => <Header data={data} {...props} />}
  />
);

Header.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
