import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from './Logo';

function Navigation() {
  return (
    <Navbar bg="" expand="lg">
      <Logo />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mx-1" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="mx-1" href="/discounts">
            Discounts
          </Nav.Link>
          <Nav.Link className="mx-1" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="mx-1" href="/contact">
            Contact
          </Nav.Link>
          <Button
            className="ml-3 mr-5"
            variant="outline-success"
            href="/good-eats"
          >
            Food Finder
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
