import React, { useState, useEffect } from "react";
import EditCart from "./EditCart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Checkout({ user, currentUserId, products, setCarts, setProducts }) {
  const navigate = useNavigate();
  const [currentCart, setCurrentCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCartData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/users/${currentUserId}/carts/current_user_cart`);
        const cartData = await response.json();
        setCurrentCart(cartData);
      } catch (error) {
        console.log("Error fetching cart data:", error);
      }
      setIsLoading(false);
    };

    if (user) {
      fetchCartData();
    }
  }, [currentUserId, user]);

  const purchase = async () => {
    // Get the payment information details
    const cardName = document.getElementById("cname").value;
    const cardNumber = document.getElementById("ccnum").value;
    const expirationDate = document.getElementById("expd").value;
    const cvv = document.getElementById("cvvid").value;

    // Add validation for empty payment information details
    if (!cardName || !cardNumber || !expirationDate || !cvv) {
      alert("Please fill in all the payment information details.");
      return;
    }
    try {
      const res = await fetch("/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: currentUserId,
          orders: currentCart.orders,
        }),
      });

      if (res.ok) {
        // Fetch the newly created cart data
        const cartResponse = await fetch(`/users/${currentUserId}/carts`);
        const cartData = await cartResponse.json();

        // Find the latest cart (assuming it's the first one in the response)
        const latestCart = cartData.carts[0];

        // Update the current cart with the newly created cart
        setCurrentCart(latestCart);

        // Remove the purchased product from the products list
        const purchasedProductIds = currentCart.orders.map((order) => order.product.id);
        const updatedProducts = products.filter(
          (product) => !purchasedProductIds.includes(product.id)
        );
        setProducts(updatedProducts);

        // Delete the purchased product from the API
        await Promise.all(
          purchasedProductIds.map((productId) =>
            fetch(`/products/${productId}`, {
              method: "DELETE",
            })
          )
        );
      } else {
        console.error("Failed to purchase. Response:", res);
      }

      // Navigate back to the home page
      navigate("/productspage");
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  const removeOrder = (orderId) => {
    if (currentCart && currentCart.id) {
      fetch(`/carts/${currentCart.id}/orders/${orderId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            const updatedOrders = currentCart.orders.filter(
              (order) => order.id !== orderId
            );
            setCurrentCart({ ...currentCart, orders: updatedOrders });
          } else {
          }
        })
        .catch((error) => {
        });
    }
  };

  const emptyCart = () => {
    if (currentCart && currentCart.id) {
      fetch(`/carts/${currentCart.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setCurrentCart({ ...currentCart, orders: [] });
          } else {
          }
        })
        .catch((error) => {
        });
    }
  };

  const currentCartProducts = products.filter((product) =>
    currentCart?.products?.includes(product.id)
  ) ?? [];

  let totalPrice = currentCart && currentCart.orders
    ? currentCart.orders
      .map((o) => o.product?.price || 0)
      .reduce((a, b) => a + b, 0)
    : 0;

  if (isLoading) {
    return <p>Loading cart data...</p>;
  }

  if (!user) {
    return <p>Please log in to view the cart.</p>;
  }

  if (!currentCart) {
    return <p>Failed to fetch cart data.</p>;
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <br />
      <div>
        <button
          type="button"
          className="btn btn-danger mr-2 md-"
          onClick={emptyCart}
        >
          Empty Cart
        </button>
      </div>
      <br />
      <div>
        {currentCart?.created_at}
        <br />
        <br />
        <br />
        <EditCart
          currentCart={currentCart}
          removeOrder={(orderId) => removeOrder(orderId)}
        />
      </div>

      <Container>
        <Row></Row>
        <br />
        <h4>
          Order Total : $
          <span>
            <b>{totalPrice}</b>
          </span>
        </h4>
        <br />
        <br />
        <Row>
          <Col>
            <div>
              <form>
                {/* Billing Address */}
                <div className=" auth-wrapper auth-inner row-">
                  <h2 className="text-center">
                    Billing Address <i className="fas fa-home fa-sm"> </i>
                  </h2>
                  <div className="form-group col-md-9">
                    <label htmlFor="validationDefault01">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Full Name"
                      name="firstname"
                      required
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label htmlFor="validationDefault02">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label htmlFor="validationDefault03">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="adr"
                      placeholder="Address"
                      name="address"
                      required
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label htmlFor="validationDefault04">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label htmlFor="validationDefault05">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Zip"
                      name="Zip"
                      placeholder="Zip"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <Col>
            <form>
              {/* Payment Information */}
              <div className="auth-wrapper auth-inner row-2">
                <h2 className="text-center">
                  Payment Information <i className="fab fa-cc-visa mr-2"></i>
                  <i className="fab fa-cc-mastercard mr-2"></i>
                </h2>
                <div className="form-group col-md-9">
                  <div className="col-md-70 mb-6">
                    <label htmlFor="validationDefault01">Name On Card</label>
                    <input
                      type="text"
                      className="form-control "
                      id="cname"
                      name="cardname"
                      required
                    />
                  </div>
                  <div className="col-md-70 mb-9">
                    <label htmlFor="validationDefault02">
                      Credit Card Number
                    </label>
                    <input
                      type="text"
                      id="ccnum"
                      className="form-control"
                      name="Credit Card Number"
                      required
                    />
                  </div>
                  <div className="col-md-70 mb-9">
                    <label htmlFor="validationDefaultUsername">Exp.Date</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="expd"
                        aria-describedby="inputGroupPrepend2"
                        name="expirationd"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-10 mb-9">
                    <label htmlFor="validationDefaultUsername">CVV</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="cvvid"
                        name="cvv"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="text-left">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck2"
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                      />
                      <div className="text-left">
                        <label className="form-check-label" htmlFor="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                      <br />
                      <div className="text-left">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={purchase}
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Checkout;