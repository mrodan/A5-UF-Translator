import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { LocaleContext } from '../context/LocaleContext';
import languages from '../assets/availableLanguages';
import ISO6391 from 'iso-639-1';

const LanguageSelection = (props) => {
  const { setLocale } = useContext(LocaleContext);

  const onClickListener = (language) => {
    setLocale(ISO6391.getCode(language));

    sessionStorage.removeItem('locale');
    sessionStorage.setItem('locale', ISO6391.getCode(language));
    window.location.reload();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map((language) => (
          <Dropdown.Item
            key={language.name}
            onClick={onClickListener.bind(this, language.name)}
          >
            {language.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelection;
//https://www.npmjs.com/package/iso-639-1
