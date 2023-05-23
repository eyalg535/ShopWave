import React from "react";
import EditOrder from "./EditOrder";

function EditCart({ currentCart, removeOrder }) {
  if (!currentCart || !currentCart.orders) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {currentCart.orders.map((order) => (
        <EditOrder
          key={order.id}
          order={order}
          removeOrder={() => removeOrder(order.id)}
        />
      ))}
    </div>
  );
}

export default EditCart;

