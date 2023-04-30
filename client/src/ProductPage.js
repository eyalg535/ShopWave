import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './App.css'
import CartPage from './CartPage';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const handleRemove = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleAddToCart = async (product) => {
    const response = await fetch(`/products/${product.id}`);
    const productData = await response.json();
    setCartItems(prevCartItems => [...prevCartItems, productData]);
  };
  
  

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard 
        key={product.id}
        className={`product-card-${index}`} // add unique class name here
         image={product.image}
         name={product.name}
         price={product.price}
         quantity={product.quantity}
         rating={product.rating}
         onRemove={() => handleRemove(product.id)}
         onAddToCart={() => handleAddToCart(product)}
         style={{ marginRight: index % 4 === 3 ? 0 : '50rem', paddingRight: '10 !important' }} // set margin for each card
        />
      ))}
    </div>
  );
}
export default ProductPage;
