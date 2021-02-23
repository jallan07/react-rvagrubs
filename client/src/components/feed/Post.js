import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import gravatar from 'gravatar';

const Post = () => {
  const avatar = gravatar.url(
    'rvagrubs@gmail.com',
    { s: '50', r: 'pg', d: 'retro' },
    true
  );
  return (
    <div className="w-100" style={{ maxWidth: '600px' }}>
      <Card className="rounded shadow">
        <Card.Body className="mx-5">
          <Row className="d-flex align-content-center mt-3">
            <img
              src={avatar}
              style={{ borderRadius: '50%' }}
              alt="user profile avatar"
            ></img>
            <h4 className="mx-3 mt-2">Username</h4>
          </Row>
          <Row className="ml-5 mr-2">
            <p>
              Donec molestie tellus in felis elementum tempus. Integer in turpis
              dictum, iaculis ipsum vel, imperdiet felis. Fusce ullamcorper, est
              non pretium tincidunt, tellus nunc laoreet eros.
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <Button className="mx-2 btn-yellow" type="submit">
              <i class="fas fa-utensils"></i>&nbsp; Like
            </Button>
            <Button className="mx-2 btn-yellow" type="submit">
              <i class="fas fa-comment"></i>&nbsp; Comment
            </Button>
          </Row>

          <div className="w-100 text-center mt-3"></div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
