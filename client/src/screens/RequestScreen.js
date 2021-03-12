import React, { useState, useEffect } from 'react';
import axios from 'axios';
import translate from '../utils/googleCloudTranslateAPI.js';
import { Form, Button } from 'react-bootstrap';
import './RequestScreenStyle.css';
import Rating from '../components/Rating';

const RequestScreen = ({ match }) => {
  const [translatedRequestBody, setTranslatedRequestBody] = useState('');
  const [translatedResponseBody, setTranslatedResponseBody] = useState('');
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
  const [newResponse, setNewResponse] = useState({
    responseBy: '',
    responseBody: '',
  });

  // REQUESTS
  const fetchRequest = async () => {
    const res = await axios.get(`/request/${match.params.id}`);
    setRequest(res.data);
    translateText(
      setTranslatedRequestBody,
      res.data.requestBody,
      sessionStorage.getItem('locale')
    );
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

  // HELPERS
  const translateText = async (setTranslatedText, text, locale) => {
    try {
      let [response] = await translate.translate(text, locale);
      console.log('translated: ', response);
      setTranslatedText(response);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const checkLocale = () => {
    if (!sessionStorage.hasOwnProperty('locale'))
      sessionStorage.setItem('locale', 'en');
  };

  const setDateFormat = (timestamp) => {
    let date = timestamp + ''; // check*
    date = date.toString().substring(0, 10);
    return date;
  };

  // HANDLERS
  const onChangeHandler = (e) => {
    setNewResponse({ ...newResponse, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewResponse();
    fetchRequest();
  };

  useEffect(() => {
    checkLocale();
    fetchRequest();
  }, []);

  /*
  {translateText(
    setTranslatedResponseBody,
    response.responseBody,
    sessionStorage.getItem('locale')
  )
    ? translatedResponseBody
    : null}*/
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
            {translatedRequestBody}
          </p>
        </div>

        {request.responses.length !== 0 ? (
          <h3 className="subtitle-space">Directions</h3>
        ) : null}
        {request.responses.map((response, index) => (
          <li key={index} className="list-group-item">
            <strong>{response.responseBy}: </strong>
            {translateText(
              setTranslatedResponseBody,
              response.responseBody,
              sessionStorage.getItem('locale')
            )
              ? translatedResponseBody
              : null}
          </li>
        ))}
      </div>

      <div className="subtitle-space">
        <h3>Respond</h3>
        <Form className="input-group-response" onSubmit={onSubmitHandler}>
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
