import React, { useContext } from "react";
import { ContextProvider } from "../../components/context/Context";
// import allProducts from '../../Assets/data';
import Item from "../../components/item/Item";
import allProducts from "../../Assets/allProducts";
import "./Categories.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Categories = (props) => {
  const {allProducts} = useContext(ContextProvider);
  
  return (
    <div className="category-container">
      <div className="show-more">
        <div className="show-products">
          <p><strong>Showing 1-9 </strong>out of 36 products</p>
        </div>
        <div className="image">
          <p>Sort by</p>
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
      </div>
      <div className="category-product">
        {allProducts &&
          allProducts?.map((product, i) => {
            if (props.category === product.category) {
              return (
                <Item
                  key={product.id}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                  image={product.image}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      <div className="explore"><p className="explore-more">Explore More</p></div>
    </div>
  );
};

export default Categories;
