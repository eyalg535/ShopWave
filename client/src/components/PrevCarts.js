import React from "react";
import Cart from "./Cart";

export default function PrevCarts({ user, carts }) {
  let prevCarts = carts.slice(0, -1);

  return (
    <div>
      <h1>Previous Carts</h1>
      {prevCarts.length === 0 ? (
        <h3>You have no previous carts</h3>
      ) : (
        prevCarts.map((cart, index) => (
          <h3>
            <Cart
              key={cart.id}
              index={index + 1}
              cart={cart}
              orders={cart.orders}
            />
          </h3>
        ))
      )}
    </div>
  );
}