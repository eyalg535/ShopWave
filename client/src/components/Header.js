import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import EditCart from './EditCart';

function Header({ currentUserId }) {
  const [carts, setCarts] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    async function fetchUserCart() {
      const response = await fetch(`/users/${currentUserId}`);
      const user = await response.json();
      setCarts(user.carts);
      console.log(user);
    }
  
    fetchUserCart();
  }, [currentUserId]);

  const makeNewCart = async (user) => {
  try {
    const response = await fetch('/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user,
      }),
    });
    const data = await response.json();
    setCarts(data.carts);
  } catch (error) {
    console.error(error);
  }
};

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const currentCart = carts && carts.length === 1 ? carts[0] : carts && carts.slice(-1)[0];

const prevCarts = carts && carts.slice(0, -1);

  if (currentCart === undefined) {
    return <h3>ShopWave</h3>;
  }

  return (
    <div>
      <Link
        to={{
          pathname: '/checkout',
          state: { cart: currentCart, user: currentUserId },
        }}
      >
        <button>Take me to checkout</button>
      </Link>
      <button onClick={toggleHidden}>Show Previous Carts</button>
      {!isHidden && <PrevCarts carts={prevCarts} />}
      <div>
        <h1>Current Cart</h1>
        <EditCart cart={currentCart} orders={currentCart.orders} />
      </div>
    </div>
  );
}

function PrevCarts({ carts }) {
  return (
    <div>
      <h1>Previous Carts</h1>
      {carts.length === 0 ? (
        <h3>You have no previous carts</h3>
      ) : (
        carts.map((cart) => (
          <h3 key={cart.id}>
            <Cart cart={cart} orders={cart.orders} />
          </h3>
        ))
      )}
    </div>
  );
}

export default Header;
