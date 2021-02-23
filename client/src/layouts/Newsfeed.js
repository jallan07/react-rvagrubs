// utils
import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';

// components
import Links from '../components/navigation/Links';
import Post from '../components/feed/Post';

const Newsfeed = () => {
  return (
    <>
      <Links />
      <div className="wrapper landing py-5">
        <Container
          className="py-5 auth d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="py-5 container">
            <Container className="py-5">
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
              <Row className="py-4 justify-content-center align-items-center">
                <Post />
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Newsfeed;
