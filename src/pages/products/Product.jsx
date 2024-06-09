import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../components/context/Context";
import "./Product.css";
import { useParams } from "react-router-dom";
import ProductHead from "../producthead/Producthead";
import ProductDesc from "../productdesc/ProductDesc";

const Product = () => {
  const { allProducts } = useContext(ContextProvider);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
  return (
    <div>
      <ProductHead product={product} />
      <ProductDesc product={product} />
    </div>
  );
};

export default Product;
