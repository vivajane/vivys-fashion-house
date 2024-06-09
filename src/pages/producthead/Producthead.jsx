import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import "./Producthead.css"


const ProductHead = (props) => {
    const {product} = props;
  return (
    <div className='product-head'>
        HOME <MdNavigateNext /> {product.category} <MdNavigateNext /> {product.name}

      
    </div>
  )
}

export default ProductHead
