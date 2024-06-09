import "./Item.css"
import React from 'react';
import { NavLink } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <NavLink to= {`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></NavLink>
        
        <p>{props.name}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default Item;
