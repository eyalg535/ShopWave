import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductPage() {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      {products.map((product) => (
        <ProductCard 
        key={product.id}
         image={product.image}
         name={product.name}
         price={product.price}
         quantity={product.quantity}
         rating={product.rating}
         onRemove={() => handleRemove(product.id)}
         />
      ))}
    </div>
  );
}
export default ProductPage;
