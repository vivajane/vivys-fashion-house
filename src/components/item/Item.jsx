import "./Item.css"
import React from 'react';
// import naira from "../../images/naira.png"

const Item = ({image, name, price}) => {
  return (
    <div className="item">
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{price}</p>
    </div>
  )
}

export default Item;
