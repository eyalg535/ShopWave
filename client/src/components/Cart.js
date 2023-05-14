import React from "react";
import Order from "./Order";

function Cart(props) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4">
        {props.orders.map((order) => (
          <div className="col mb-4" key={order.id}>
            <Order order={order} product={order.product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
