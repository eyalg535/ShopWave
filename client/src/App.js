import logo from './ShopWaveLogo.jpg';
import './App.css';
import  Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Navbar.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
