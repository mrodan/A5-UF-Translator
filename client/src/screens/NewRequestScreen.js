import React from 'react';
import { Form } from 'react-bootstrap'

const NewRequestScreen = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Who is requesting</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Ask for directions</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Address/Place/Building" />
      </Form.Group>
    </Form>
  );
};

export default NewRequestScreen;
