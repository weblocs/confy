import React, { Component } from 'react'
import {graphql} from 'gatsby'
import Cart from "../components/cart"
import Header from "../components/header"

class PostPage extends Component {

  render () {
    const postData = this.props.pageContext.allPostData;
    const data = this.props.data;
    return (
        <div>
          {/* <Header category={postData.data.name}  /> */}
        <main
          style={{
            position: `relative`,
            height: "100%",
            width: `calc(100% - 300px)`,
            top: 0,
            left: `150px`,
            padding: 15,
            overflowY: "scroll",
          }}
        >
            <div style={{marginBottom: 20, width: '100%', height: 250, position: 'relative', background: `url(${postData.data.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 10 }}>
            <div style={{background: 'rgba(0,0,0,.4)', width: '100%', height: '100%', borderRadius: 10}}>
                <div style={{position: 'absolute', bottom: 30, left: 40}}>
                <h1 style={{color: '#fff', marginBottom: 5}}>{postData.data.name}</h1>
                <div style={{maxWidth: 600, lineHeight: 1}}>
                    {data.allAirtable.edges
                        .filter(cart => cart.node.table === "Subkategorie")
                        .filter(cart => cart.node.data.category === postData.data.name)
                        .map(cart => (
                        <span style={{marginRight: 5, fontSize: 12, color: '#fff'}}>
                            {cart.node.data.name}
                            </span>
                        ))}
                </div>
                </div>
            </div>
            </div>
            
            
            <div className="flex">
            {data.allAirtable.edges
                .filter(cart => cart.node.table === "Imported table")
                .filter(cart => cart.node.data.Kategoria_PL === postData.data.name)
                .map(cart => (
                <Cart
                key={cart.node.id}
                name={cart.node.data.Name}
                link={`/post/${cart.node.id}`}
                photo={cart.node.data.image}
                />
                ))}
            </div>
            </main>
        </div>
    )
  }
}

export default PostPage

export const query = graphql`
  query {
    allAirtable {
      edges {
        node {
          recordId
          id
          table
          data {
            Name
            Kategoria_PL
            name
            category
            image
          }
        }
      }
    }
  }
`