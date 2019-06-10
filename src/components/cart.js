import React from "react"
import { Link } from "gatsby"

const Cart = ({name, photo, link}) => (
  <Link to={link}>
    <div
      className="flexBox"
      style={{
        backgroundColor: '#ccc',
        backgroundImage:
          `url(${photo})`,
      }}
    >
      <span>{name}</span>
    </div>
  </Link>
)

export default Cart
