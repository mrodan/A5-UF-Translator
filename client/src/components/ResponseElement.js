import React, { useState } from 'react';
import translate from '../utils/googleCloudTranslateAPI.js';

/*          <li key={index} className="list-group-item">
            <strong>{response.responseBy}: </strong>
            {translatedResponses[index]}
          </li>
*/
const ResponseElement = ({ response, index }) => {
  const [translatedResponseBody, setTranslatedResponseBody] = useState('');

  const translateText = async (text, locale) => {
    try {
      let [response] = await translate.translate(text, locale);
      //console.log('translated: ', response);
      setTranslatedResponseBody(response);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li key={index} className="list-group-item">
      <strong>{response.responseBy}: </strong>
      {translateText(response.responseBody, sessionStorage.getItem('locale')) ? translatedResponseBody : null}
    </li>
  );
};

export default ResponseElement;
