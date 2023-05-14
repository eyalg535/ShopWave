import React from "react";
import Product from "./Product";

function ProductList({ products, currentUserId, carts, setCarts }) {
  
  return (
    <div className="row row-cols-1 row-cols-md-4">
      
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          product={product}
          carts={carts}
          setCarts={setCarts}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
}

export default ProductList;
