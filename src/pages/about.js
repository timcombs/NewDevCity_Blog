import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "code-venn.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title='About' />
      <h1>About</h1>


      <p>
        NewDevCity is a blog for new and experienced coders and artists who care about the intersections of code, art, and collaboration. 
      </p>

      <Img
        fluid={data.file.childImageSharp.fluid}
        alt='venn diagram showing the intersection between code, art, and collaboration' 
      />
      <br />

      <p>
        Over 50% of the world spends time consuming and creating on the internet. Because we use it to create and collaborate across the world the internet needs to be accessible, safe and secure for everyone. 
      </p>

      <p>
        Read the <Link to='/welcome-to-new-dev-city-blog'>Welcome Blog Post</Link> for more about what you'll see on this blog.
      </p>
    </Layout>
  )
}



export default About;
