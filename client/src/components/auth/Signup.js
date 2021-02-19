import React, { useRef, useState } from 'react';
import {
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// redux
import { setAlert } from '../../redux/actions/setAlert';

import { useSelector } from 'react-redux';

function Signup() {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // create the error state object and method
  // const [error, setError] = useState();

  // loading state and method for disabling duplicate submit button clicks
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // if the passwords ddo not match, then push a new error into the error state object
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // exit out of the function immediately when the mismatch occurs
      // return setError('Passwords do not match');
      setAlert('Passwords do not match');
    }

    console.log('signup submit');
    // after this is done waiting for signup, set loading back to false
    setLoading(false);
  }

  const errors = useSelector((state) => state.alerts);

  return (
    <div className="wrapper auth">
      <Container
        className="auth d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Card className="rounded shadow">
            <Card.Body>
              <h2 className="text-center">
                <i className="fas fa-user fa-sm"></i> sign up
              </h2>
              <p className="text-center mb-3 small">
                <em>All fields are required</em>
              </p>
              {/* if there IS an error, then display the error here in the Alert element */}
              {errors.length > 0 && <Alert variant="danger">{errors}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group id="firstname">
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        ref={fnameRef}
                        autoComplete="off"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group id="lastname">
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        ref={lnameRef}
                        autoComplete="off"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
                <Form.Group id="passwordConfirm">
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    autoComplete="off"
                    placeholder="Confirm your password"
                    required
                  ></Form.Control>
                </Form.Group>
                <Button
                  disabled={loading}
                  className="w-100 btn-yellow"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center text-light mt-4">
            Already have an account?{' '}
            <Link className="authLink" to="login">
              Log in
            </Link>
            .
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
