import React from "react";
import ProductList from "./ProductList";

function ProductsPage({ filteredProducts, user, currentUserId, carts, setCarts }) {
  if (!user || !user.id) {
    return <p>Please log in to view the product page.</p>;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <ProductList
        products={filteredProducts}
        currentUserId={currentUserId}
        carts={carts}
        setCarts={setCarts}
      />
    </div>
  );
}

export default ProductsPage;
