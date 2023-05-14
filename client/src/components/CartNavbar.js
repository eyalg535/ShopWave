import React from "react";
import { Link } from "react-router-dom";

function CartNavBar(props) {
  let categories = [
    "iPads",
    "Tablets",
    "Speakers",
    "Microphones",
    "Cables",
    "Mouses",
    "Printers",
    "Refrigerators",
    "Antennas",
    "USBs",
    "SD Cards",
    "PCs",
    "Laptops",
    "Phones",
    "TVs",
    "Chargers",
    "Extension Cords",
    "Stoves",
    "Grills",
    "Earphones",
    "Headphones",
    "Cameras",
    "Remotes",
    "Phone Cases",
    "Laptop Cases",
    "Kindles",
    "Video Games",
    "Smartwatches",
  ];
  let sorted = categories.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? 1 : -1
  );

  let user = props.currentUserId;

  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
          <Link
            to={{
              pathname: "/home",
              state: {
                user: props.currentUserId,
                carts: props.carts,
              },
            }}
          >
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <li className="nav-item">
            <Link
              to={{
                pathname: "/cart",
                state: {
                  user: user,
                  carts: props.carts,
                  removeOrder: props.removeOrder,
                },
              }}
            >
              <a
                className="nav-link"
                onClick={() =>
                  props.currentUserId ? (
                    <Alert> Hi </Alert>
                  ) : (
                    alert("Please log in to see past orders")
                  )
                }
              >
                Past Orders
              </a>
            </Link>
          </li>
          {props.currentUserId === undefined ? (
            <Link to="/login">
              {" "}
              <li className="nav-item">
                <a className="nav-link">Login/Sign Up</a>
              </li>
            </Link>
          ) : (
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link">Log Out</a>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default CartNavBar;
