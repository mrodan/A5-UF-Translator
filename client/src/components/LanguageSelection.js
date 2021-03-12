import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { LocaleContext } from '../context/LocaleContext';
import languages from '../assets/availableLanguages';

const LanguageSelection = () => {
  const { setLocale } = useContext(LocaleContext);

  const onClickListener = (lan) => {
    setLocale(lan);
    console.log(lan);

    sessionStorage.removeItem('locale');
    sessionStorage.setItem('locale', lan);
    console.log(sessionStorage.getItem('locale'));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map((lan) => (
          <Dropdown.Item
            key={lan.name}
            onClick={onClickListener.bind(this, lan.name)}
          >
            {lan.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelection;
//https://www.npmjs.com/package/iso-639-1
