import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from './Logo';

// redux
import { useSelector } from 'react-redux';

function Navigation() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      {auth.isAuthenticated ? (
        <Navbar bg="light" expand="lg" fixed="top">
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="mx-1" href="/contact">
                Newsfeed
              </Nav.Link>
              <Nav.Link className="mx-1" href="/discounts">
                Discounts
              </Nav.Link>
              <Nav.Link className="mx-1" href="/contact">
                Profile
              </Nav.Link>
              <Button className="ml-3 mr-5" variant="outline-success" href="/">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar bg="light" expand="lg" fixed="top">
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                className="mx-1"
                href="https://www.instagram.com/rvagrubs/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram fa-sm"></i> Follow
              </Nav.Link>
              <Nav.Link className="mx-1" href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="mx-1" href="/login">
                Login
              </Nav.Link>
              <Button
                className="ml-3 mr-5"
                variant="outline-success"
                href="/signup"
              >
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
}

export default Navigation;
