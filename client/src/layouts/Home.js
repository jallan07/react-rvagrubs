// utils
import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import Links from '../components/navigation/Links';

const Main = () => {
  return (
    <>
      <Links />
      <div className="wrapper landing">
        <Container
          className="auth d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <Row className="mx-2 justify-content-center">
              <h2
                className="text-center display-4"
                style={{ color: '#ae1f23' }}
              >
                <i class="fas fa-hamburger fa-sm"></i> RVA GRUBS
              </h2>
            </Row>
            <Row className="mb-2 justify-content-center">
              <h5 className="text-center my-4 mx-5 home-info">
                Receive <strong>member-only</strong> discounts to all of
                Richmond's favorite restaurants. Create an account today!
              </h5>
            </Row>
            <Row className="my-2 justify-content-center">
              <Link to="/signup">
                <Button className="mx-2" variant="success">
                  Sign Up For Access
                </Button>
              </Link>
              <Link to="/login">
                <Button className="mx-2" variant="outline-success">
                  Login To Your Account
                </Button>
              </Link>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;
