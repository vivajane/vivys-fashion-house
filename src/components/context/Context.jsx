import { createContext } from "react";
import allProducts from "../../Assets/allProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextProvider = createContext(null);
const cardDetail = () => {
  let cart = {};
  for (let i = 0; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const Context = (props) => {
  const [cartItem, setCartItem] = useState(cardDetail());

  const addCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]:prev[itemId]+1,
    }));
    
    alert("Added to cart, view cart")
    console.log(cartItem);
  };
  const removeCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const totalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        let iteminfo = allProducts.find((product)=>product.id===Number(item))
        totalAmount += iteminfo.price * cartItem[item];
      }
    }
    return totalAmount;
  }

  const totalCartDisplay = () => {
    let totalCart = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        totalCart += cartItem[item]
      }
    }
    return totalCart
  }

  // console.log("total cart amount")
  const contextValue = {totalCartDisplay,totalCartAmount,allProducts,cartItem,addCart,removeCart};

  return (
    <ContextProvider.Provider value={contextValue}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
