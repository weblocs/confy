import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Scrollbars } from "react-custom-scrollbars"

class Header extends React.Component {
  

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeaderTitleQuery {
            allAirtable(filter: { table: { eq: "Imported table" } }) {
              edges {
                node {
                  recordId
                  id
                  data {
                    email
                    Name
                    Kategoria_PL
                    phone
                    image
                    logo
                    description
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <div
              style={{
                position: `fixed`,
                height: "100%",
                width: `300px`,
                top: 105,
                left: 0,
              }}
            >
              <div style={{ position: "fixed", top: 20, left: 20 }}>
                <Link style={{ textDecoration: "none", color: "#222" }} to="/">
                  <h1 style={{ marginBottom: 0 }}>Confy </h1>
                  <h3>{this.props.category}</h3>
                </Link>
              </div>
              <Scrollbars style={{ width: 300, height: 600 }}>
                <ul className="navLink">
                  {data.allAirtable.edges
                    .filter(cart => cart.node.data.image !== null)
                    .filter(
                      cart =>
                        cart.node.data.Kategoria_PL === this.props.category
                    )
                    .map(todo => (
                      <li key={todo.node.id}>
                        <Link to={"/post/" + todo.node.id}>
                          <div
                            style={{
                              backgroundColor: "#ccc",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: `url(${todo.node.data.image})`,
                              height: 140,
                              borderRadius: 10,
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                background: "rgba(0,0,0,.4)",
                                width: "100%",
                                height: "100%",
                                borderRadius: 10,
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  color: "#fff",
                                  bottom: 10,
                                  left: 10,
                                  paddingRight: 10,
                                }}
                              >
                                {todo.node.data.Name}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </Scrollbars>
            </div>
          </>
        )}
      />
    )
  }
}

export default Header
