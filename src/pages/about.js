import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title='About' />
    <h1>About</h1>
    <p>About</p>
    <Link className='styled-a' to='/'>
      Return to the homepage
    </Link>
  </Layout>
);

export default About;
