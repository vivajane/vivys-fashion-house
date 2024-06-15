import React, { useContext } from "react";
import "./ProductDesc.css";
import { MdOutlineStar } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { ContextProvider } from "../../components/context/Context";
import { useNavigate } from "react-router-dom";


// {/* <MdOutlineStar /> */}

const ProductDesc = (props) => {
  // const navigate = useNavigate();
  const onClickButton = () => {
      // navigate("/cart")
  }
  const { product } = props;
  const {addCart} = useContext(ContextProvider)
  console.log(product);
  return (
    <div className="product-display">
      <div className="img-flex">
        <div className="img-mini">
          <img src={product.image} alt="h" />
          <img src={product.image} alt="l" />
          <img src={product.image} alt="f" />
          <img src={product.image} alt="y" />
        </div>
        <div className="img-big">
          <img src={product.image} alt="y" />
        </div>
      </div>

      <div className="right-side">
        <div className="right">
          <h1>{product.name}</h1>
          <div className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <div className="price">
            <p>(125)</p>
            <p><strong>{product.price}</strong></p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              necessitatibus non voluptas consequuntur excepturi, magnam,
              repellat totam ea voluptatum possimus neque laudantium porro quos
              facilis veritatis modi impedit, beatae blanditiis!
            </p>
          </div>
          <div className="select-size">
            <h2>Select size(UK)</h2>
            <div className="size">
              <p className="size-p">10</p>
              <p className="size-p">12</p>
              <p className="size-p">14</p>
              <p className="size-p">16</p>
            </div>
            <div className="cart">
              <button onClick={()=>{addCart(product.id); onClickButton()}}>Add to Cart</button>
            </div>
            <div className="category"><h3>Category: <span>{product.category}</span> </h3></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
