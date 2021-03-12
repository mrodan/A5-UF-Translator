import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const NewRequestScreen = (props) => {
  const [newRequest, setNewRequest] = useState({
    requestedBy: '',
    requestBody: '',
  });

  const onChangeHandler = (e) => {
    setNewRequest({ ...newRequest, [e.target.name]: e.target.value });
  };

  const createNewRequest = async () => {
    await axios
      .post(
        '/request/newrequest',
        {
          requestedBy: newRequest.requestedBy,
          requestBody: newRequest.requestBody,
        },
        { headers: { 'Content-Type': 'Application/json' } }
      )
      .then((res) => {
        //console.log('NewReq -> ', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createNewRequest();
    props.history.push('/');
  };


  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group>
        <Form.Label>Who is requesting</Form.Label>
        <Form.Control
          type="text"
          name="requestedBy"
          placeholder="Name"
          onChange={onChangeHandler}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Ask for directions</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="requestBody"
          placeholder="Address/Place/Building"
          onChange={onChangeHandler}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewRequestScreen;
