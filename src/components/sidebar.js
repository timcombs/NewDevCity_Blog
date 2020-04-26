import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import './sidebar.css';

import 'typeface-molengo';

// TODO: make sidebar 27% of total width
// TODO: make font size 10% bigger than body text
// TODO: what color is sidebar
// TODO: put nav at top of sidebar
//       nav - Home, About, Contact, various Tags(?),
// TODO: add most recent Tip N Trick at bottom
// TODO: on mobile - sidebar horizontal is just under header
//       without the tip N trick
//       or becomes just a hamburger toggle and slides out
// TODO: when does sidebar

const Sidebar = ({ data }) => (
  <aside
    style={{
      background: `black`,
      fontFamily: `molengo, Verdana, sans-serif`,
      fontSize: `1.75rem`,
      fontWeight: `bold`,
      padding: `1rem`,
      width: `27%`,
      textAlign: `center`,
    }}
  >
    <h2>
      <Link to='/' activeClassName='graditext'>
        Home
      </Link>
    </h2>
    <h2>
      <Link to='/about' activeClassName='graditext'>
        About
      </Link>
    </h2>
    <h2>
      <Link to='/contact' activeClassName='graditext'>
        Contact
      </Link>
    </h2>
    <h2>
      <Link to='/tags' activeClassName='graditext'>
        Tags
      </Link>
    </h2>
    <br />
    <h2>
      <Link>latest Tip N Trick</Link>
    </h2>
    <h2>
      <Link>TIP N TRICK</Link>
    </h2>
  </aside>
);

export default Sidebar;
