import React from 'react';
import { Link } from 'gatsby';

import './sidebar.css';

import 'typeface-molengo';

const Sidebar = ({ data }) => (
  <aside style={{ fontFamily: `molengo, Verdana, sans-serif` }}>
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
    <h3>
      <Link to='/tags' activeClassName='graditext'>
        All Tags
      </Link>
    </h3>
    {/* <br />
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
