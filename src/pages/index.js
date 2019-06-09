import React from "react"
import { graphql } from "gatsby"
import Cart from "../components/Cart"
import Header from "../components/header"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "Artyści i prowadzący" };
  }

  changeCategory  = (cart) => {
    if(this.state.category === "Artyści i prowadzący") {
      this.setState({
        category: cart.node.data.name
      });
    } else {
      this.setState({
        category: cart.node.data.name
      });
    }
  }

  render() {
    return (
      <div>
        {/* <div className="flex">
      {this.props.data.allAirtable.edges
        .filter(cart => cart.node.table === "Subkategorie")
        .map(cart => (
          <div key={cart.node.id}>
          {cart.node.data.name}
            </div>
        ))}
    </div>  */}

          <Header category={this.state.category} />


          <main style={{
            position: `relative`,
            height: '100%',
            width: `calc(100% - 300px)`,
            top: 0,
            left: `300px`,
            padding: 15,
            overflowY: 'scroll'
          }}
          >

        <h2 style={{ marginTop: 30, marginBottom: 40 }}>Kategorie</h2>
        
        <div className="flex">
          {this.props.data.allAirtable.edges
            .filter(cart => cart.node.table === "Kategorie")
            .map(cart => (
              <span onClick={() => this.changeCategory(cart)}>
              <Cart
                key={cart.node.id}
                name={cart.node.data.name}
                link={`/category/${cart.node.id}`}
                photo={cart.node.data.image}
              />
              </span>
            ))}
        </div>
        </main>
      </div>
    )
  }
}

export default MainPage

export const query = graphql`
  query {
    allAirtable {
      edges {
        node {
          recordId
          id
          table
          data {
            name
            image
          }
        }
      }
    }
  }
`
