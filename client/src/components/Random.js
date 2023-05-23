import React from "react";
import ProductList from "./ProductList";

function Random({ filteredProducts, currentUserId, user, carts, setCarts }) {
  
  return (
    <>
    <br/>
    <div>
      <div>
      <h1>Hello, Welcome to ShopWave !</h1>
      <h3>Find great deals on a wide variety of products from independent sellers.</h3>
      <h3>Start browsing now!</h3>
    </div>
    <br/>
    <br/>
      <ProductList
        products={filteredProducts}
        currentUserId={currentUserId}
        carts={carts}
        setCarts={setCarts}
      />
    </div>
    </>
  );
}

export default Random;
