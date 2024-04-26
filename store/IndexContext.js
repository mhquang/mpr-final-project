import { createContext, useState } from "react";

export const IndexContext = createContext({
  health: 0,
  iq: 0,
  happiness: 0,
  updateIndex: (index, value) => {},
});

const IndexContextProvider = ({ children }) => {
  const initialIndex = {
    health: 0,
    iq: 0,
    happiness: 0,
  };
  const [index, setIndex] = useState(initialIndex);

  const updateIndex = (indexKey, value) => {
    setIndex((prevIndex) => ({
      ...prevIndex,
      [indexKey]: (prevIndex[indexKey] || 0) + value,
    }));
  };
  
  
  const value = {
    health: index.health,
    iq: index.iq,
    happiness: index.happiness,
    updateIndex,
  };

  return (
    <IndexContext.Provider value={value}>{children}</IndexContext.Provider>
  );
};

export default IndexContextProvider;
