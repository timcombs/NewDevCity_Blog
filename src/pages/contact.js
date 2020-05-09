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
    <p>
      The easiest way to get in touch with me is to DM or tweet at me on Twitter
      @deSolidState. Otherwise, if you want more information about me check out
      the links below.
    </p>

    <a className='icons' href='https://github.com/timcombs'>
      <FontAwesomeIcon icon={['fab', 'github-square']} />
    </a>

    <a className='icons' href='https://twitter.com/deSolidState'>
      <FontAwesomeIcon icon={['fab', 'twitter-square']} />
    </a>

    <a className='icons' href='https://www.linkedin.com/in/timothycombs/'>
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>

    <a className='icons' href='https://github.com/desolidstate'>
      <FontAwesomeIcon icon={['fab', 'github-square']} />
    </a>
  </Layout>
);

export default Contact;
