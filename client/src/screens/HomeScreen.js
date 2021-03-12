import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import ListElement from '../components/ListElement';
import LanguageSelection from '../components/LanguageSelection';
import { LocaleContext } from '../context/LocaleContext';
import './HomeScreenStyle.css';

const HomeScreen = () => {
  const { locale } = useContext(LocaleContext);
  const [allRequests, setAllRequests] = useState([{}]);

  const fetchAllRequests = async () => {
    const res = await axios.get('/request/all');
    setAllRequests(res.data);
    console.log(res.data);
  };

  useEffect(() => {
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
      <Row>
        <LanguageSelection />
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
  );
};

export default HomeScreen;
