import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from './components/NavBar';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Random from "./components/Random";
import ShowProduct from "./components/ShowProduct";
import Checkout from "./components/Checkout";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch('/me');
      if (response.ok) {
        const user = await response.json();
        setUser(user);
        setCurrentUserId(user.id);
      } else {
        setUser(null);
        setCurrentUserId(null);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/products`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (currentUserId) {
      fetchCarts();
      fetchOrders();
    }
  }, [currentUserId]);

  async function fetchCarts() {
    try {
      const cartsResponse = await fetch(`/users/${currentUserId}/carts`);
      const cartsData = await cartsResponse.json();
      setCarts(cartsData.carts);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOrders() {
    try {
      const ordersResponse = await fetch(`/users/${currentUserId}/orders`);
      const ordersData = await ordersResponse.json();
      if (Array.isArray(ordersData)) {
        setOrders(ordersData);
      } else if (typeof ordersData === 'object') {
        setOrders([ordersData]);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.log('Error fetching orders:', error);
    }
  }

  useEffect(() => {
    async function fetchCurrentCart() {
      if (currentUserId) {
        const response = await fetch(`/users/${currentUserId}/carts`);
        const cartData = await response.json();
        setCarts(cartData.carts);
      }
    }
    fetchCurrentCart();
  }, [currentUserId]);

  const searchItem = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchCategory = (searchCategory) => {
    setSearchCategory(searchCategory);
    if (searchCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filteredByCategory = products.filter(
        (product) => product.category === searchCategory
      );
      setFilteredProducts(filteredByCategory);
    }
  };

  const getItems = (searchItem) => {
    fetch(`/products/${searchItem}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const filteredByTerm = products.filter((product) =>
        product.title && product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredProducts(filteredByTerm);
    }
  }, [products, searchTerm]);

  return (
    <div>
      <Router>
        <NavBar
          user={user}
          setUser={setUser}
          searchItem={searchItem}
          searchCategory={handleSearchCategory}
          setSearchTerm={setSearchTerm}
          carts={carts}
          getItems={getItems}
        />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} setCarts={setCarts} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route
            path="/"
            element={
              filteredProducts && filteredProducts.length > 0 ? (
                <Random
                  filteredProducts={filteredProducts}
                  currentUserId={currentUserId}
                  carts={carts}
                  setCarts={setCarts}
                  user={user}
                />
              ) : (
                <div>No products found.</div>
              )
            }
          />
          {products.map((product) => (
            <Route key={product.id}
              path={`/show/${product.id}`}
              element={<ShowProduct product={product} user={user} carts={carts} />}
            />
          ))}
          <Route path="/checkout" element={<Checkout user={user} currentUserId={currentUserId} products={products} setProducts={setProducts} orders={orders} setCarts={setCarts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
