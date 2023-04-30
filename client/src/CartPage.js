import React, { useState, useEffect } from 'react';
// import './CartPage.css';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/carts')
      .then((response) => response.json())
      .then((data) => setCartItems(data));
  }, []);

  const deleteCartItem = (id) => {
    fetch(`/carts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    });
  };

  const changeCartItemQuantity = (id, quantity) => {
    fetch(`/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(
          cartItems.map((item) => (item.id === id ? { ...item, quantity: data.quantity } : item))
        );
      });
  };

  // const cartTotal = Array.isArray(cartItems) ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0) : 0;

  return (
    <div className="Cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => deleteCartItem(item.id)}>Delete</button>
          <button onClick={() => changeCartItemQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <button onClick={() => changeCartItemQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <>
          <hr />
          {/* <p>Total: ${cartTotal.toFixed(2)}</p> */}
        </>
      )}
    </div>
  );
}

export default CartPage;