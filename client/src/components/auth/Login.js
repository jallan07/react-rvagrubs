import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import Logo from '../navigation/Logo';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // loading state and method for disabling duplicate submit button clicks
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('login submit');

    // after this is done waiting for signup, set loading back to false
    setLoading(false);
  }

  return (
    <>
      <Navbar bg="" expand="lg" fixed="top">
        <Logo />
      </Navbar>
      <div className="wrapper auth">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <Card className="rounded shadow">
              <Card.Body>
                <h2 className="text-center mb-4">
                  <i className="fas fa-lock fa-sm"></i> log in
                </h2>
                {/* if there IS an error, then display the error here in the Alert element */}
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      autoComplete="off"
                      placeholder="Email"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Control
                      type="password"
                      ref={passwordRef}
                      autoComplete="off"
                      placeholder="Password"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    disabled={loading}
                    className="w-100 btn-yellow"
                    type="submit"
                  >
                    Log In
                  </Button>
                </Form>
                <div className="w-100 text-center mt-3"></div>
              </Card.Body>
            </Card>
            <div className="w-100 text-center text-light  mt-4">
              Don't have an account yet?{' '}
              <Link className="authLink" to="/signup">
                Sign up
              </Link>
              .
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Login;
