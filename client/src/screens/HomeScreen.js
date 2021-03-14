import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListElement from '../components/ListElement';
import LanguageSelection from '../components/LanguageSelection';
import './HomeScreenStyle.css';

const HomeScreen = () => {
  const [allRequests, setAllRequests] = useState([
    {
      requestedBy: '',
      requestBody: '',
      responses: [
        {
          responseBy: '',
          responseBody: '',
        },
      ],
    },
  ]);

  const fetchAllRequests = async () => {
    const res = await axios.get('/request/all');
    setAllRequests(res.data);
  };

  const checkLocale = () => {
    if (!sessionStorage.hasOwnProperty('locale'))
      sessionStorage.setItem('locale', 'en');
  };

  useEffect(() => {
    checkLocale();
    fetchAllRequests();
  }, []);
  return (
    <>
      <Row>
        <img
          className="title-img"
          src="https://i.ibb.co/gg04dqG/METROPOLITAN-3.png"
          alt="homepage img"
        />
      </Row>

      <Row className="subtitle-places d-flex w-100 justify-content-between">
        <h2>Requested Directions</h2>
        <LanguageSelection />
      </Row>
      <div className="list-group">
        {allRequests.map((request, index) => (
          <ListElement
            key={index}
            request={request}
            numRequests={request.responses.length}
          />
        ))}
      </div>

      <h6 className="subtitle-survey">
        Please, click to fill the survey before leaving:
      </h6>
      <Link to="/#Survey">
        <Button variant="outline-primary">Survey</Button>{' '}
      </Link>
    </>
  );
};

export default HomeScreen;
