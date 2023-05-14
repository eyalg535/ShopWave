import React, { useState } from "react";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import "./PastBtnCss.css";

export default function NavBar({ user, setUser, searchItem, searchCategory, setSearchTerm }) {
  const [active, setActive] = useState(false);
  // const [username, setUsername] = useState(user ? user.username : '');
  const navigate = useNavigate();
  const toggleHidden = () => {
    setActive(true);
  };

  const toggleButton = () => {
    setActive(false);
  };

  let categories = ["iPads",
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
    "Smartwatches",];
  let sorted = categories.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? 1 : -1
  );

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate('/')
      }
    });
  }

  return (
    <nav
      style={{ fontWeight: "bold", fontFamily: "Verdana" }}
      className="navbar navbar-expand-lg navbar navbar-dark bg-info"
    >
      <div className="container-fluid">
        <ul className="navbar-nav mr-auto">
          <div className="navbar-header">
            {user ? (
              <Link to="/">
                <li className="nav-item active">
                  <button className="btn btn-light">
                    ShopWave <span className="sr-only">(current)</span>
                  </button>
                </li>
              </Link>
            ) : (
              <Link to="/login" >
                <li className="nav-item active">
                  <button className="btn btn-light">
                    ShopWave <span className="sr-only">(current)</span>
                  </button>
                </li>
              </Link>
            )}
          </div>

          <li className="nav-item">
            {user ? (
              <Link
                to="/cart">
                {/* {" "} */}
                <button className="btn btn-light">Past Orders</button>
              </Link> //alert("Please log in to see past orders")
            ) : (
              <div>
                <button
                  className="btn btn-light"
                  onClick={() => toggleHidden()}
                >
                  <i className="fas fa-shopping-cart text-dark">Past Orders</i>
                </button>
                <div
                  className={
                    active ? "overlay active" : "overlay "
                  }
                >
                  <div className="popup">
                    <button
                      className="close"
                      onClick={() => toggleButton()}
                    >
                      <br />
                      &times;
                    </button>

                    <div
                      style={{ fontFamily: "Verdana" }}
                      className="content"
                    >
                      You are not logged in. Please log in to see your past
                      orders.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            className={
              window.location.href === "http://localhost:3001/"
                ? "nav-item dropdown"
                : "nav-item "
            }
          >
            <button
              className="btn btn-light"
              href="/"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              color="red"
            >
              Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {sorted.map((s, index) => (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => searchCategory(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </li>
          <li className="nav-item">
            {user ? (
              <Link to="/checkout">
                <button className="btn btn-light">
                  <i className="fas fa-shopping-cart text-dark">Checkout</i>
                </button>
              </Link>
            ) : (
              <div>
                <button
                  className="btn btn-light"
                  onClick={() => toggleHidden()}
                >
                  <i className="fas fa-shopping-cart text-dark">Checkout</i>
                </button>
                <div
                  className={
                    active ? "overlay active" : "overlay "
                  }
                >
                  <div className="popup">
                    <button className="close" onClick={() => toggleButton()}>
                      &times;
                    </button>
                    <div
                      style={{ "fontFamily": "Verdana" }}
                      className="content"
                    >
                      You are not logged in. Please log in to checkout.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        <Search searchItem={searchItem} searchCategory={searchCategory} setSearchTerm={setSearchTerm} />
        <ul className="nav navbar-nav navbar-right">
          {user ? (
            <div className="d-flex align-items-center">
              {user && <p className="nav-link mb-0 mr-3 align-self-center">Welcome {user.username}!</p>}
              <button className="btn btn-light" onClick={handleLogoutClick}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
