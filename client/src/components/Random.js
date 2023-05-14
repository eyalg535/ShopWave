import React, { useState } from "react";
import ProductList from "./ProductList";
import NavBar from "./NavBar";

function Random({ user, filteredProducts, setUser, currentUserId, carts, setCarts, products, setProducts }) {
  
  return (
    <div>
      
      {/* <NavBar
        user={user}
        setUser={setUser}
        searchItem={searchItem}
        searchCategory={handleSearchCategory}
        setSearchTerm={setSearchTerm}
        current_user_id={currentUserId}
        carts={carts}
      /> */}
      <ProductList
        products={filteredProducts}
        currentUserId={currentUserId}
        carts={carts}
        setCarts={setCarts}
      />
    </div>
  );
}

export default Random;
