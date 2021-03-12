/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export const LocaleContext = React.createContext();

export default ({ children }) => {
  const [locale, setLocale] = useState('en');
  //const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
