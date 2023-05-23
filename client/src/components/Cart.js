import React from "react";
import Order from "./Order";

function Cart({ cart, orders }) {
  console.log("props order", orders);

  if (!Array.isArray(orders)) {
    return null; // or return a loading indicator or an empty state message
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4">
        {orders.map((order) => (
          <div className="col mb-4" key={order.id}>
            <Order order={order} product={order.product} />
          </div>
        ))}
      </div>
    </div>
  );
}



export default Cart;
