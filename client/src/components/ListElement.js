import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import translate from '../utils/googleCloudTranslateAPI.js';

const ListElement = ({ request, numRequests }) => {
  const [translatedBody, setTranslatedBody] = useState('');

  const setDateFormat = (timestamp) => {
    let date = timestamp + ''; // check*
    date = date.toString().substring(0, 10);
    return date;
  };

  const translateText = async (text, locale) => {
    try {
      let [response] = await translate.translate(text, locale);
      console.log('translated: ', response);
      setTranslatedBody(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    translateText(request.requestBody, sessionStorage.getItem('locale'));
  }, [request]);

  return (
    <>
      <Link
        to={`/request/${request._id}`}
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{request.requestedBy}</h5>
          <small>{setDateFormat(request.createdAt)}</small>
        </div>
        <div className="d-flex w-100 justify-content-between">
          <p className="mb-1">
            <strong>Question: </strong>
            {translatedBody}
          </p>
          <small>{ numRequests !== 0 ? numRequests : 'No' } replies</small>
        </div>
      </Link>
    </>
  );
};

export default ListElement;
