import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ThirdPage = () => (
  <Layout>
    <SEO title='Page three' />
    <h1>Organize your colors here!</h1>
    <InputColors />
    <Link to='/'>Go back to homepage</Link>
  </Layout>
)

class InputColors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }

  render() {
    return (
      <input placeholder='enter color list'></input>
    );
  }

}

export default ThirdPage