// utils
import React from 'react';
import { Container, Card } from 'react-bootstrap';

// components
import Links from '../components/navigation/Links';
import Post from '../components/feed/Post';

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
            <Card className="rounded shadow auth card">
              <Card.Body>
                <h2 className="text-center display-4">
                  <i class="fas fa-hamburger fa-sm"></i> rva grubs
                </h2>
                <h5 className="text-center my-3 mx-2">
                  <em>
                    Member-only discounts for all of RVA's favorite restaurants
                  </em>
                </h5>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;
