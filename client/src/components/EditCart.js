import React from "react";
import EditOrder from "./EditOrder";

function EditCart({ orders, cart, removeOrder }) {

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {orders && orders.map((order, index) => (
        <EditOrder key={index} order={order} removeOrder={removeOrder}   />
      ))}
    </div>
  );
}

export default EditCart;

