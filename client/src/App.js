import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Navbar.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';


function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
