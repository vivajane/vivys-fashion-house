import "./Item.css"
import React from 'react';
// import naira from "../../images/naira.png"

const Item = ({product}) => {
  return (
    <div className="item">
        <img src={product.image} alt="" />
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default Item;
