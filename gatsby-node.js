/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const _ = require('lodash');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-template.js');
  const tagTemplate = path.resolve('src/templates/tag-template.js');

  return graphql(`
    {
      postsRemark: allMarkdownRemark(
        limit: 100
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.postsRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
      });
    });
    result.data.tagsGroup.group.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  });
};
