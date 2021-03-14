import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import translate from '../utils/googleCloudTranslateAPI.js';

const Footer = () => {
  const [go, setGo] = useState('');

  const translateText = async (text, locale) => {
    try {
      if (locale === null) locale = 'en';
      let [response] = await translate.translate(text, locale);
      //console.log('translated: ', response);
      setGo(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    translateText('Go', sessionStorage.getItem('locale'));
  }, []);

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">{go ? go : 'Go'} Gators!</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
