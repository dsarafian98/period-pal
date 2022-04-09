import React, {useState} from 'react';
import {
  PINK,
  SALMONPINK,
  GREEN,
  BLUE,
  YELLOW,
  selectedColorScheme,
} from '../ColorSchemes';

export const GlobalContext = React.createContext();

const GlobalService = props => {
  const [name, setName] = useState('my name');
  const [color, setColor] = useState(PINK);

  const getColor = () => {
    return color;
  };

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        color,
        getColor,
        setColor,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalService;
