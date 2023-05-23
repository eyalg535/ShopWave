// import React, { useState } from "react";
// import Search from "./Search";
// import { Link, useNavigate } from "react-router-dom";
// import "./PastBtnCss.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Category from "./Category";

// export default function NavBar({
//   user,
//   setUser,
//   searchItem,
//   searchCategory,
//   setSearchTerm,
//   getItems,
// }) {
//   const [active, setActive] = useState(false);
//   const [showCategoryPopup, setShowCategoryPopup] = useState(false);
//   const navigate = useNavigate();

//   const toggleHidden = () => {
//     setActive(!active);
//   };

//   const toggleButton = () => {
//     setActive(false);
//   };

//   let categories = [
//     "All",
//     "iPads",
//     "Tablets",
//     "Bags",
//     "PCs",
//     "Laptops",
//     "Phones",
//     "TVs",
//     "Toys",
//     "Chocolates",
//     "Guitars",
//     "Pants",
//     "Plants",
//   ];
//   let sorted = categories.sort((a, b) =>
//     a.toLowerCase() > b.toLowerCase() ? 1 : -1
//   );

//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//         navigate("/");
//       }
//     });
//   }

//   const toggleCategoryPopup = (e) => {
//     if (e) e.preventDefault();
//     setShowCategoryPopup(!showCategoryPopup);
//   };

//   const handleCategorySelect = (category, e) => {
//     if (e) e.preventDefault();
//     setSearchTerm(""); 
//     searchCategory(category);
//     toggleCategoryPopup();
//   };



//   return (
//     <nav
//       style={{ fontWeight: "bold", fontFamily: "Verdana" }}
//       className="navbar navbar-expand-lg navbar navbar-dark bg-info"
//     >
//       <div className="container-fluid">
//         <ul className="navbar-nav mr-auto">
//           <div className="navbar-header">
//             {user ? (
//               <Link to="/">
//                 <li className="nav-item active">
//                   <button className="btn btn-light">
//                     ShopWave <span className="sr-only">(current)</span>
//                   </button>
//                 </li>
//               </Link>
//             ) : (
//               <Link to="/login">
//                 <li className="nav-item active">
//                   <button className="btn btn-light">
//                     ShopWave <span className="sr-only">(current)</span>
//                   </button>
//                 </li>
//               </Link>
//             )}
//           </div>
//           {/* <li className="nav-item">
//             {user ? (
//               <Link to="/cart">
//                 <button className="btn btn-light">Past Orders</button>
//               </Link>
//             ) : (
//               <div>
//                 <button
//                   className="btn btn-light"
//                   onClick={() => toggleHidden()}
//                 >
//                   <i className="fas fa-shopping-cart text-dark">
//                     Past Orders
//                   </i>
//                 </button>
//                 <div className={active ? "overlay active" : "overlay"}>
//                   <div className="popup">
//                     <button className="close" onClick={() => toggleButton()}>
//                       <br />
//                       &times;
//                     </button>
//                     <div
//                       style={{ fontFamily: "Verdana" }}
//                       className="content"
//                     >
//                       You are not logged in. Please log in to see your past
//                       orders.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </li> */}
//           <li className="nav-item">
//             <button
//               className="btn btn-light dropdown-toggle"
//               id="navbarDropdown"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded={showCategoryPopup ? "true" : "false"}
//               onClick={(e) => toggleCategoryPopup(e)}
//             >
//               Categories
//             </button>

//             {showCategoryPopup && (
//               <div className={`dropdown-menu ${showCategoryPopup ? "show" : ""}`} aria-labelledby="navbarDropdown">

//                 {sorted.map((s, index) => (
//                   <button
//                     key={index}
//                     className="dropdown-item"
//                     onClick={(e) => handleCategorySelect(s, e)}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             )}

//           </li>
//         </ul>
//         <Search
//           searchItem={searchItem}
//           searchCategory={searchCategory}
//           setSearchTerm={setSearchTerm}
//           getItems={getItems}
//         />
//         <li className="nav-item">
//             {user ? (
//               <Link to="/checkout">
//                 <button className="btn btn-light">
//                 <i className="bi bi-cart4">Checkout</i>
//                 </button>
//               </Link>
//             ) : (
//               <div>
//                 <button
//                   className="btn btn-light"
//                   onClick={() => toggleHidden()}
//                 >
//                   <i className="bi bi-cart4">Checkout</i>
//                 </button>
//                 <div className={active ? "overlay active" : "overlay"}>
//                   <div className="popup">
//                     <button className="close" onClick={() => toggleButton()}>
//                       &times;
//                     </button>
//                     <div
//                       style={{ fontFamily: "Verdana" }}
//                       className="content"
//                     >
//                       You are not logged in. Please log in to checkout.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </li>
//         <ul className="nav navbar-nav navbar-right">
//           {user ? (
//             <div className="d-flex align-items-center">
//               <p className="nav-link mb-0 mr-3 align-self-center">
//                 Welcome {user.username}!
//               </p>
//               <button className="btn btn-light" onClick={handleLogoutClick}>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>/<Link to="/signUp">SignUp</Link>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>


//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Category from "./Category";
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

