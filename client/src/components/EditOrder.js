import React from "react";
import CartProduct from "./CartProduct";

export default function EditOrder({ order, removeOrder }) {
  return (
    <div>
      <CartProduct
        product={order.product}
        order={order}
        removeOrder={removeOrder}
        key={order.id}
      />
    </div>
  );
}
