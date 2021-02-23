import React from 'react';
import Links from '../components/navigation/Links';
import { Container, Card } from 'react-bootstrap';

const Main = () => {
  return (
    <>
      <Links />
      <div className="wrapper landing">
        <Container
          className="auth d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <Card className="rounded shadow auth card">
              <Card.Body>
                <h2 className="text-center">
                  <i class="fas fa-hamburger fa-sm"></i> rva grubs
                </h2>
                <p className="text-center mb-3">
                  <em>Member-only discounts </em>
                </p>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;
