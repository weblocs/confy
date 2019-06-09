import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"



import "./layout.css"


  class Layout extends React.Component {
    

    render() {
      return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allAirtable(filter: { table: { eq: "Imported table" } }) {
          edges {
            node {
              recordId
              id
              data {
                email
                Name
                phone
                image
                logo
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        
        

          
          
          {this.props.children}
          
          

      </>
    )}
  />
)
        }}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
