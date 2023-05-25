import React from "react";
import { Link } from "react-router-dom";

function Card({
  product,
  title,
  description,
  image,
  price,
  carts,
  currentUserId,
  setCarts,
  setAddedToCart,
  getProductById,
}) {

  const addToCart = async () => {
    const newProd = await getProductById(product.id); // Retrieve product by ID  
    const cart = carts.length ? (carts.length === 1 ? carts[0] : carts.slice(-1)[0]) : null;

    if (cart) {
      const res = await fetch(`/cart/${cart.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: cart.user_id,
          products: newProd,
        }),
      });

      if (res.ok) {
        const updatedCart = await res.json();
        setCarts(
          carts.map((cart) => (cart.id === updatedCart.id ? updatedCart : cart))
        );
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 5000);
      }
    }
  };

  const handleAddToCart = async () => {
    if (!currentUserId) {
      alert("Please login to add to cart!");
      return;
    }
    await addToCart();
  };

  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Price: $
            {price}
          </li>
        </ul>
        <div className="card-body">
          <Link to={{ pathname: `/show/${product.id}`, state: { product: { title, description, image, price } } }}>
            <button type="button" className="btn btn-primary mr-2">
              See more...
            </button>
          </Link>
          <button
            className="btn btn-warning"
            onClick={handleAddToCart}
          >
            <i className="fas fa-cart-plus">Add to cart</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
