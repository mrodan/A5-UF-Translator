import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import languages from '../assets/availableLanguages';
import ISO6391 from 'iso-639-1';
import './LanguageSelectionStyle.css'

const LanguageSelection = (props) => {
  const onClickListener = (language) => {
    sessionStorage.removeItem('locale');
    sessionStorage.setItem('locale', ISO6391.getCode(language));
    window.location.reload();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Language
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-scroll'>
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