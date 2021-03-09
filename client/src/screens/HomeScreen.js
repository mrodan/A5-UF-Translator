import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import ListElement from '../components/ListElement';
import './HomeScreenStyle.css';

const HomeScreen = () => {
  const [allRequests, setAllRequests] = useState([{}]);

  const fetchAllRequests = async () => {
    const res = await axios.get('/request/all');
    setAllRequests(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchAllRequests();
    console.log(allRequests);
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
      <Row className="subtitle-places">
        <h2>List of Places</h2>
      </Row>
      <div className="list-group">
        {allRequests.map((request) => (
          <ListElement request={request} />
        ))}
      </div>
    </>

    /*
    <>
      <Row>
        <h1>Image</h1>
      </Row>
      <Row>
        <h1>Add Question</h1>
      </Row>
      <Row>
        {allRequests.map((request) => (
          <Col key={request._id} sm={12} md={6} lg={4} xlg={2}>
            <RequestCard request={request} />
          </Col>
        ))}
      </Row>
    </>
    */
  );
};

/*
      <Row>
        {allRequests.map((request) => (
          <Col key={request._id} sm={12} md={6} lg={4} xlg={2}>
            <RequestCard request={request} />
          </Col>
        ))}
      </Row>
      */

export default HomeScreen;
