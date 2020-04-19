import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import 'typeface-lekton';

const Header = ({ data }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 0.1rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            fontSize: `2.75vw`,
            color: `white`,
            fontFamily: `lekton, Verdana, sans-serif`,
            fontWeight: `normal`,
            fontStyle: `normal`,
            textDecoration: `none`,
          }}
        >
          <p>
            the future of the web is collaborative and creative,
            <br />
            therefore it must be secure, inclusive, and accessible.
          </p>
          <p>the future is now.</p>
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
