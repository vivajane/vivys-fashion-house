import React, { useContext } from "react";
import "./Cart.css";
import "../../Assets/allProducts";

import { ContextProvider } from "../../components/context/Context";

const Cart = () => {
  const {totalCartAmount,allProducts,cartItem,removeCart} = useContext(ContextProvider);

  return (
    <div className="cart-flex">
      <div className="cart-con">
        <div className="heading-flex">
          <h2>Product details</h2>
          <h2>Remove</h2>
        </div>
        <hr className="hr" />
        {allProducts.map((e) => {
          console.log(e.amount)
          if (cartItem[e.id] > 0) {
            return (
              <div className="heading-flex">
                <div>
                  <img src={e.image} alt="" className="main-cart-img" />
                  <p>{e.name}</p>
                  <p>NGN{e.price}</p>
                  <p>{cartItem[e.id]}</p>

                  <p>NGN{e.price* cartItem[e.id] }</p>
                </div>
               
                <div className="button-div">
                  <button
                    className="cart-button"
                    onClick={() => {
                      removeCart(e.id);
                    }}
                  >
                    &times;
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="total-cart">
        <div>
          <h2>
            Cart Totals
          </h2>
        </div>
        <div className="cart-prop-flex">
          <p>Subtotal</p>
        <p>NGN{totalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-prop-flex">
          <p>Delivery Fee</p>
          <p>0</p>
        </div>
        <hr />
        <div className="cart-prop-flex">
          <p>Total</p>
          <p>NGN{totalCartAmount()}</p>
        </div>
        <hr />
        <div className="checkout"><button>PROCEED TO CHECKOUT</button></div>
      </div>
    </div>
  );
};

export default Cart;
