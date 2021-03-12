import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import './RequestScreenStyle.css'

const RequestScreen = ({ match }) => {
  const [newResponse, setNewResponse] = useState({
    responseBy: '',
    responseBody: '',
  });
  const [request, setRequest] = useState({
    requestedBy: '',
    requestBody: '',
    responses: [
      {
        responseBy: '',
        responseBody: '',
      },
    ],
  });

  const fetchRequest = async () => {
    const res = await axios.get(`/request/${match.params.id}`);
    setRequest(res.data);
  };

  const addNewResponse = async () => {
    console.log('pre', newResponse);
    await axios
      .post('/request/newresponse/' + match.params.id, newResponse, {
        headers: { 'Content-Type': 'Application/json' },
      })
      .then((res) => {
        console.log('NewRes -> ', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setDateFormat = (timestamp) => {
    let date = timestamp + ''; // check*
    date = date.toString().substring(0, 10);
    return date;
  };

  const onChangeHandler = (e) => {
    setNewResponse({ ...newResponse, [e.target.name]: e.target.value });
    console.log(newResponse);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewResponse();
    fetchRequest();
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <>
      <h2>Question</h2>

      <div className="list-group">
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{request.requestedBy}</h5>
            <small>{setDateFormat(request.createdAt)}</small>
          </div>
          <p className="mb-1">
            <strong>Question: </strong>
            {request.requestBody}
          </p>
        </div>

        {request.responses.length !== 0 ? <h3 className='subtitle-space'>Directions</h3> : null}
        {request.responses.map((response, index) => (
          <li key={index} className="list-group-item">
            <strong>{response.responseBy}: </strong>
            {response.responseBody}
          </li>
        ))}
      </div>

      <div className='subtitle-space'>
        <h3>Respond</h3>
        <Form className='input-group-response' onSubmit={onSubmitHandler}>
          <Form.Group>
            <Form.Label>Who is responding</Form.Label>
            <Form.Control
              type="text"
              name="responseBy"
              placeholder="Name"
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Respond</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="responseBody"
              placeholder="Direction"
              onChange={onChangeHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default RequestScreen;
