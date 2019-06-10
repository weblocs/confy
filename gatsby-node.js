/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const _ = require('lodash');
 const Promise = require('bluebird');
 const path = require('path');
 const slash = require('slash');

 exports.createPages = ({ graphql, actions}) => {
   const { createPage } = actions;
   return new Promise((resolve, reject) => {
     graphql(
      `
        {
          allAirtable {
            edges {
              node {
                table
                recordId
                id
                data {
                  name
                  Kategoria_PL
                  email
                  Name
                  phone
                  image
                  logo
                  description
                  youtube_url
                }
              }
            }
          }
        }
      `
     ).then(result => {
      if (result.errors) {
        console.log("createPages Error :'(")
        console.log(result.errors);
        reject(result.errors);
      }
      const postTemplate = path.resolve("./src/templates/blog-post.js");
      const categoryTemplate = path.resolve("./src/templates/category.js");
      // We want to create a detailed page for each
      // post node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allAirtable.edges.filter(cart => cart.node.table === "Imported table"), edge => {
        createPage({
          path: `/post/${edge.node.id}/`,
          component: slash(postTemplate),
          context: {
            allPostData: edge.node,
          },
        });
      });
      _.each(result.data.allAirtable.edges.filter(cart => cart.node.table === "Kategorie"), edge => {
        createPage({
          path: `/category/${edge.node.id}/`,
          component: slash(categoryTemplate),
          context: {
            allPostData: edge.node,
            allSubcategoriesData: result.data.allAirtable.edges.filter(cart => cart.node.table === "Subkategorie")[1]
          },
        });
      });
      resolve();
    });

   });
 };



