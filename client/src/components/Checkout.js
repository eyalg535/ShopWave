import React, { useState, useEffect } from "react";
import EditCart from "./EditCart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Checkout({ user, currentUserId, carts, products, orders, setCarts }) {
const navigate = useNavigate()
  const [currentCart, setCurrentCart] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect(() => {
  //   async function fetchData() {
  //     if (carts.length > 0) {
  //       setCurrentCart(carts[carts.length - 1]);
  //     }
  //     if (currentUserId) {
  //       try {
  //         const response = await fetch(`/users/${currentUserId}`);
  //         if (response.ok) {
  //           const data = await response.json();
  //           setCurrentUser(data);
  //         } else {
  //           throw new Error('Network response was not ok.');
  //         }
  //       } catch (error) {
  //         console.error('There was an error fetching the user data:', error);
  //       }
  //     }
  //   }
  //   fetchData();
  // }, [carts, currentUserId]);  
  useEffect(() => {
    async function fetchCurrentCart() {
      if (currentUserId) {
        const response = await fetch(`/cart/${currentUserId}`);
        const cartData = await response.json();
        if (cartData.length > 0) {
          setCurrentCart(cartData[cartData.length - 1]);
        }
      }
    }
    fetchCurrentCart();
  }, [currentUserId]);
  
  

  const purchased = async () => {
    try {
      const res = await fetch("/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: currentUserId,
          orders: currentCart.orders,
        }),
      });
      const user = await res.json();
      alert("Purchased");
      navigate("/", { state: { user: user.id } });
    } catch (error) {
      console.error(error);
    }
  };
  

  const removeOrder = (order) => {
    fetch(`/carts/${currentCart.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: currentCart.id,
        order: order,
      }),
    })
      .then((res) => res.json())
      .then((user) =>
        setCurrentCart({
          current_cart:
            user.carts === 1 ? user.carts[0] : user.carts.slice(-1)[0],
        })
      );
  };

const currentCartProducts = products.filter(product => currentCart.products && currentCart.products.includes(product.id));


  let totalPrice = currentCart && currentCart.orders
  ? currentCart.orders.map((o) => o.product?.price || 0).reduce((a, b) => a + b, 0)
  : 0;
  return (
    <div>
      <h1>Order Summary</h1>

      <div>
        {currentCart.created_at}
        <br />
        <br />
        <br />
        <EditCart
        currentCart={currentCart}
        currentCartProducts={currentCartProducts}
         setCarts={setCarts}
          // cart={currentCart}
          // orders={orders}
          //  removeOrder={removeOrder}
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
                    <label forhtml="validationDefault02">Email</label>
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
                    <label forhtml="validationDefaultUsername">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control"
                      placeholder="City"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>

                  <div className="form-group col-md-9">
                    <label forhtml="validationDefault03">Address</label>
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
                    <label forhtml="validationDefault04">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label forhtml="validationDefault05">Zip</label>
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
              <div className="auth-wrapper auth-inner row-2">
                <h2 className="text-center">
                  Payment Information <i className="fab fa-cc-visa mr-2"></i>
                  <i className="fab fa-cc-mastercard mr-2"></i>
                </h2>
                <div className="form-group col-md-9">
                  <div className="col-md-70 mb-6">
                    <label forhtml="validationDefault01">Name On Card</label>
                    <input
                      type="text"
                      className="form-control "
                      id="cname"
                      name="cardname"
                      required
                    />
                  </div>
                  <div className="col-md-70 mb-9">
                    <label forhtml="validationDefault02">
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
                    <label forhtml="validationDefaultUsername">Exp.Date</label>
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
                    <label forhtml="validationDefaultUsername">CVV</label>
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
                        <label className="form-check-label" forhtml="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                      <br />
                      <div className="text-left">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={() => this.purchased(currentUserId)}
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

