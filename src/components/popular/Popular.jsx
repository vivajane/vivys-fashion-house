import "./Popular.css";
import products from "../../Assets/data"

import React from 'react'
import Item from "../item/Item";

const Popular = () => {
    console.log(products)
  return (
    
    <div className="popular-container">
        <div className="popular-item">
            <h3>POPULAR ITEMS</h3>
            <hr />
        </div>
        <div className="popular-product">
            {
                products.map((product, i)=>{
                    console.log(product)
                    return <Item key={product.id} name={product.name} id={product.id} price={product.price} image={product.image}/>

                })
            }
        </div>
    </div>
  )
}

export default Popular
