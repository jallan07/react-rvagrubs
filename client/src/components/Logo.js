import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Navbar.Brand className="ml-5 brand" href="#home">
      <Link to="/">
        <img src="/img/RVA_GrumbsLogo-02.png" width="75" alt="logo"></img>
      </Link>
    </Navbar.Brand>
  );
};

export default Logo;
