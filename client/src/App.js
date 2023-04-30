import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Navbar.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import ProductPage from './ProductPage';
import CartPage from './CartPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <main>
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/shop" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="/about" element={<About />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpForm onLogin={handleLogin} />} />
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/shop" element={<Home />} />
                <Route path="/cart" element={<Home />} />
                <Route path="/profile" element={<Home />} />
                <Route path="/about" element={<Home />} />

              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
