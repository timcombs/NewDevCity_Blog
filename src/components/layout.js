/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import HeaderImg from './header-image';
import './layout.css';

import 'typeface-lekton';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div
        style={{
          background: `linear-gradient(#ffcf4a, 85%, #ff00ff)`,
          fontFamily: `lekton, sans-serif`,
          fontWeight: `normal`,
          fontSize: `1.2rem`,
        }}
      >
        <HeaderImg />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            lineHeight: `95%`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              fontSize: `1rem`,
              paddingTop: `1rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
            {` `}by{` `}
            <a href='https://www.timcombs.github.io'>Tim Combs</a>
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
