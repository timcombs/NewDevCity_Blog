import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import './sidebar.css';

import 'typeface-molengo';

// TODO: make sidebar 21% of total width
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
      fontWeight: `bold`,
      padding: `1rem`,
      width: `21%`,
      textAlign: `center`,
    }}
  >
    <h3>
      <Link to='/' activeClassName='graditext'>
        Home
      </Link>
    </h3>
    <h3>
      <Link to='/about' activeClassName='graditext'>
        About
      </Link>
    </h3>
    <h3>
      <Link to='/contact' activeClassName='graditext'>
        Contact
      </Link>
    </h3>
    {/* <h3>
      <Link to='/tags' activeClassName='graditext'>
        Tags
      </Link>
    </h3>
    <br />
    <br />
    <h3>
      <Link to='/tips'>latest Tip N Trick</Link>
    </h3>
    <h3>
      <Link to='/atrick'>TIP N TRICK</Link>
    </h3> */}
  </aside>
);

export default Sidebar;
