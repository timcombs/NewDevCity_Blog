import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <h1>Contact Information</h1>


      <a href='https://github.com/timcombs'>
        <FontAwesomeIcon icon={['fab', 'github-square']} />
      </a>

      <a href='https://twitter.com/deSolidState'>
        <FontAwesomeIcon icon={['fab', 'twitter-square']} />
      </a>

      <a href='https://www.linkedin.com/in/timothycombs/'>
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>

      <a href='https://github.com/desolidstate'>
        <FontAwesomeIcon icon={['fab', 'github-square']} />
      </a>

    <Link to='/'>Return to Home</Link>
    <br />
  </Layout>
);

export default Contact;
