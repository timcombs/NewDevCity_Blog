import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <h1>Organize your colors here!</h1>
    <Link to='/'>Go back to homepage</Link>
  </Layout>
);

export default Contact;
