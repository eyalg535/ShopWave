import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { NavDropdown } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../Navbar.css";

export default function NavBar({
  user,
  setUser,
  searchItem,
  searchCategory,
  setSearchTerm,
  getItems,
}) {
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  };

  let categories = [
    "All",
    "iPads",
    "Tablets",
    "Bags",
    "PCs",
    "Laptops",
    "Phones",
    "TVs",
    "Toys",
    "Chocolates",
    "Guitars",
    "Pants",
    "Plants",
  ];
  let sorted = categories.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? 1 : -1
  );

  const toggleCategoryPopup = (e) => {
    if (e) e.preventDefault();
    setShowCategoryPopup(!showCategoryPopup);
  };

  const handleCategorySelect = (category, e) => {
    if (e) e.preventDefault();
    setSearchTerm("");
    searchCategory(category);
    toggleCategoryPopup();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <Link to="/" className="navbar-brand">
          ShopWave
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/productspage" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button
                className="btn btn-info dropdown-toggle"
                onClick={(e) => toggleCategoryPopup(e)}
              >
                Categories
              </button>
              {showCategoryPopup && (
                <div
                  className={`dropdown-menu ${showCategoryPopup ? "show" : ""}`}
                >
                  {sorted.map((s, index) => (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={(e) => handleCategorySelect(s, e)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
          <Search
            searchItem={searchItem}
            searchCategory={searchCategory}
            setSearchTerm={setSearchTerm}
            getItems={getItems}
          />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/checkout" className="nav-link">
                <i className="bi bi-cart4"></i> Checkout
              </Link>
            </li>
            {user ? (
              <NavDropdown title={user.username} id="user-dropdown">
                <NavDropdown.Item onClick={handleLogoutClick}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

