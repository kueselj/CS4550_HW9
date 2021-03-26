import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react'
import { create_post, fetch_users } from '../api';

export default function PostsNew() {
  let [post, setPost] = useState({});

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(post);
    create_post(post);
  }

  function updateName(ev) {
    let p1 = Object.assign({}, post);
    p1["name"] = ev.target.value;
    setPost(p1);
  }

  function updateDate(ev) {
    let p1 = Object.assign({}, post);
    p1["date"] = ev.target.value;
    setPost(p1);
  }

  function updateBody(ev) {
    let p1 = Object.assign({}, post);
    p1["body"] = ev.target.value;
    setPost(p1);
  }

  // Note: File input can't be a controlled input.
  return (
    <Row>
      <Col>
        <h2>New Post</h2>
        <Form onSubmit={onSubmit}>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
                          onChange={updateName}
                          value={post.name} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="text"
                          onChange={updateDate}
                          value={post.date} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea"
                          rows={4}
                          onChange={updateBody}
                          value={post.body} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Col>
    </Row>
  );
}