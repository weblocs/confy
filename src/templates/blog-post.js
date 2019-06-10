import React, { Component } from "react"
import Header from "../components/header"
class PostPage extends Component {
  render() {
    const postData = this.props.pageContext.allPostData

    return (
      <div>
        <Header category={postData.data.Kategoria_PL}  />
        <main
          style={{
            position: `relative`,
            height: "100%",
            width: `calc(100% - 300px)`,
            top: 0,
            left: `300px`,
            padding: 15,
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              marginBottom: 20,
              width: "100%",
              height: 250,
              position: "relative",
              background: `url(${postData.data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 10,
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
              <h1
                style={{
                  position: "absolute",
                  bottom: 40,
                  left: 40,
                  color: "#fff",
                  marginBottom: 0,
                }}
              >
                {postData.data.Name}
              </h1>
            </div>
          </div>
          <p
            style={{
              maxWidth: 600,
              marginLeft: 40,
              marginTop: 40,
              fontWeight: 300,
              textAlign: "justify",
            }}
          >
            {postData.data.description}
          </p>
          <div style={{ marginLeft: 40 }}>
            <iframe
              title={postData.data.Name}
              style={{ border: "none" }}
              width="420"
              height="315"
              src={postData.data.youtube_url}
            ></iframe>
          </div>
        </main>
      </div>
    )
  }
}

export default PostPage
