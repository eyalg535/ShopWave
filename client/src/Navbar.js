import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function CustomNavbar() {
const brandStyles = {
fontSize: '32px', // increase the font size
fontFamily: 'cursive', // change the font to a more wave-like font
fontWeight: 'bold', // add some extra weight to the font
color: '#0077be', 
};

return (
<Navbar bg="light" expand="lg">
<Navbar.Brand href="/" style={brandStyles}>ShopWave</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link as={Link} to="/">Home</Nav.Link>
<Nav.Link as={Link} to="/shop">Shop</Nav.Link>
<Nav.Link as={Link} to="/cart">Cart</Nav.Link>
<Nav.Link as={Link} to="/profile">Profile</Nav.Link>
<Nav.Link as={Link} to="/about">About Us</Nav.Link>
</Nav>
<Nav>
<Nav.Link as={Link} to="/login">Log In/Sign Up</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
);
}

export default CustomNavbar;