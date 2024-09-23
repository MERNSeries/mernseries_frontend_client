// import React from 'react'
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="home-heading">Welcome to Our E-Commerce Store</h1>
        <p className="home-paragraph">Find the best products here!</p>
      </div>
      <Products />
    </>
  );
};

export default Home;
