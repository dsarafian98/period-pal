import React, {useState} from 'react';

export const GlobalContext = React.createContext();

const GlobalService = props => {
  const [name, setName] = React.useState('my name');

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalService;
