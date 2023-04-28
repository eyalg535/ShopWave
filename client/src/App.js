import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Navbar.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

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
                {/* <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} /> */}
                <Route path="/about" element={<About />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
