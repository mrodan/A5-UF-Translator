import React, { useState, useEffect } from 'react';
import axios from 'axios';
import translate from '../utils/googleCloudTranslateAPI.js';
import { Form, Button } from 'react-bootstrap';
import LanguageSelection from '../components/LanguageSelection';
import ResponseElement from '../components/ResponseElement';
import Rating from '../components/Rating';
import './RequestScreenStyle.css';

const RequestScreen = ({ match }) => {
  const [translatedRequestBody, setTranslatedRequestBody] = useState('');
  const [toggleRate, setToggleRate] = useState(false);
  const [newRate, setNewRate] = useState(0);
  const [request, setRequest] = useState({
    requestedBy: '',
    requestBody: '',
    responses: [
      {
        responseBy: '',
        responseBody: '',
      },
    ],
    rating: 0.0,
    ratingCount: 0,
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
    await axios
      .post('/request/newresponse/' + match.params.id, newResponse, {
        headers: { 'Content-Type': 'Application/json' },
      })
      .then((res) => {
        //console.log('NewRes -> ', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateRating = async () => {
    await axios
      .post(
        '/request/updaterating/' + match.params.id,
        {
          updateRating: Math.ceil(newRate / 20),
        },
        {
          headers: { 'Content-Type': 'Application/json' },
        }
      )
      .then((res) => {
        //console.log('NewRate -> ', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // HELPERS
  const translateText = async (setTranslatedText, text, locale) => {
    try {
      let [response] = await translate.translate(text.toString(), locale);
      //console.log('translated: ', response);
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
    let date = timestamp + '';
    date = date.toString().substring(0, 10);
    return date;
  };

  // HANDLERS
  const onChangeHandlerResponse = (e) => {
    setNewResponse({ ...newResponse, [e.target.name]: e.target.value });
  };

  const onSubmitHandlerResponse = (e) => {
    e.preventDefault();
    addNewResponse();
    fetchRequest();
  };

  const onClickHandlerToggleRate = () => {
    setToggleRate(!toggleRate);
  };

  const onChangeHandlerRate = (e) => {
    setNewRate(e.target.value);
    console.log(Math.ceil(e.target.value / 20));
  };

  const onSubmitHandlerRate = () => {
    request.rating = Math.ceil(newRate / 20);
    updateRating();
  };

  useEffect(() => {
    checkLocale();
    fetchRequest();
  }, []);

  return (
    <>
      <div className="d-flex w-100 justify-content-between">
        <h2>Question</h2>
        <LanguageSelection />
      </div>

      <div className="list-group">
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{request.requestedBy}</h5>
            <small>{setDateFormat(request.createdAt)}</small>
          </div>
          <div className="mb-1 d-flex w-100 justify-content-between">
            <div>
              <strong>Question: </strong>
              {translatedRequestBody}
            </div>
            <div className="rating-space">
              <Rating value={request.rating} />
            </div>
          </div>
        </div>

        {request.responses.length !== 0 ? (
          <h3 className="subtitle-space">Directions</h3>
        ) : null}
        {request.responses.map((response, index) => (
          <ResponseElement key={index} response={response} index={index} />
        ))}
      </div>

      <div className="subtitle-space">
        <h3>Reply</h3>
        <Form
          className="input-group-response"
          onSubmit={onSubmitHandlerResponse}
        >
          <Form.Group>
            <Form.Label>Who is responding</Form.Label>
            <Form.Control
              type="text"
              name="responseBy"
              placeholder="Name"
              onChange={onChangeHandlerResponse}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Direction</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="responseBody"
              placeholder="Guide/Steps"
              onChange={onChangeHandlerResponse}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="subtitle-space">
        <Button
          className="rate-toggle-btn"
          variant="outline-primary"
          onClick={onClickHandlerToggleRate}
        >
          Rate Translations
        </Button>{' '}
        {toggleRate ? (
          <Form onSubmit={onSubmitHandlerRate} className="rating-bar">
            <Form.Group controlId="formBasicRangeCustom">
              <Form.Label>How were the translations?</Form.Label>
              <Form.Control
                value={newRate}
                onChange={onChangeHandlerRate}
                type="range"
                custom
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Rate
            </Button>
          </Form>
        ) : null}
      </div>
    </>
  );
};

export default RequestScreen;
