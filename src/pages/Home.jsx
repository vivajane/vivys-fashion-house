import React from "react";
import Hero from "../components/hero/Hero";
// import Item from '../components/item/Item';
import Popular from "../components/popular/Popular";
import Review from "../components/reviews/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Review />
    </>
  );
};

export default Home;
