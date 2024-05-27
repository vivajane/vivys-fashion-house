import React, {useContext} from 'react';
import {ContextProvider} from "../../components/context/Context";
// import allProducts from '../../Assets/data';
import Item from '../../components/item/Item';
import allProducts from '../../Assets/allProducts';
import "./Categories.css"


const Categories = (props) => {
    const allproducts = useContext(ContextProvider)
  return (
    <div>
    <div className='category-product'>
        {
            allProducts && allProducts?.map((product, i) => {
                if(props.category===product.category){
                    return <Item key={product.id} name={product.name} id={product.id} price={product.price} image={product.image}/>
                }else{
                    return null
                }
                
            })
        }
      
    </div>
    </div>
  )
}

export default Categories
