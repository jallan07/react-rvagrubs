import React, { useRef, useState, useHistory } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // pull out the signup function from the AuthContext.js file
  // create the error state object and method
  const [error, setError] = useState();
  // loading state and method for disabling duplicate submit button clicks
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('login submit');

    // after this is done waiting for signup, set loading back to false
    setLoading(false);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">LOG IN</h2>
          {/* if there IS an error, then display the error here in the Alert element */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3"></div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account yet? <Link to="/signup">Sign up.</Link>
      </div>
    </div>
  );
}

export default Login;
