import React, { useState } from "react";
import Card from "./Card";

export default function Product({ product, currentUserId, carts, setCarts }) {
  const [addedToCart, setAddedToCart] = useState(false);

  async function getProductById(productId) {
    const res = await fetch(`/products/${productId}`);
    if (res.ok) {
      const product = await res.json();
      return product;
    } else {
      console.log("Error retrieving product");
      return null;
    }
  }

  return (
    <div>
      <Card
        title={product.title}
        description={product.description}
        image={product.image}
        price={product.price}
        carts={carts}
        currentUserId={currentUserId}
        product={product}
        setCarts={setCarts}
        setAddedToCart={setAddedToCart}
        getProductById={getProductById}
      />
      {addedToCart && (
        <div className="alert alert-success" role="alert">
          Product added to cart successfully!
        </div>
      )}
    </div>
  );
}
