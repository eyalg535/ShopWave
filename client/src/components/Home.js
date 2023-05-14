import React from 'react';

function Home({ user }) {
  if (user) {

  return (
    <div>
      <h1>Hello {user.username}, Welcome to ShopWave !</h1>
      <h3>Find great deals on a wide variety of products from independent sellers.</h3>
      <h3>Start browsing now!</h3>
    </div>
  );
  } else {
    return (
      <div>
        <h1>Welcome to ShopWave!</h1>
        <h3>Find great deals on a wide variety of products from independent sellers.</h3>
        <h3>Start browsing now!</h3>
        <h2>Please Login or Sign Up</h2>
      </div>
    );
  }
}

export default Home;
