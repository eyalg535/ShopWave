import React from "react";
import CardCart from "./CardCart";

function CartProduct({ order, product, removeOrder }) {
  return (
    <div>
      <CardCart
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        order={order}
        removeOrder={removeOrder}
      />
    </div>
  );
}

export default CartProduct;
