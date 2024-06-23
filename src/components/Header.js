import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/catalog" className="nav-link">Каталог</Link>
          <Link to="/favorites" className="nav-link">Избранное</Link>
          <Link to="/cart" className="nav-link">Корзина</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
