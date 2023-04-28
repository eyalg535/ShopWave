import React, { useReducer } from 'react';

function Home({ user }) {
  if (user) {

  return (
    <div>
      <h1>Welcome to ShopWave, {user.username}!</h1>
      <p>Find great deals on a wide variety of products from independent sellers.</p>
      <p>Start browsing now!</p>
    </div>
  );
  } else {
    return (
      <div>
        <h1>Welcome to ShopWave</h1>
        <p>Find great deals on a wide variety of products from independent sellers.</p>
        <p>Start browsing now!</p>
        <h2>Please Login or Sign Up</h2>
      </div>
    );
  }
}

export default Home;
