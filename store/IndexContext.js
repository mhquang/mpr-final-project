import { createContext, useContext, useState } from "react";
import { AuthContext } from "./auth-context";

const authCtx = useContext(AuthContext);

export const IndexContext = createContext({
  health: 0,
  iq: 0,
  happiness: 0,
  updateIndex: (index, value) => {},
});

const IndexContextProvider = ({ children }) => {
  const initialIndex = {
    health: authCtx.userData?.health,
    iq: authCtx.userData?.iq,
    happiness: authCtx.userData?.happiness,
  };
  const [index, setIndex] = useState(initialIndex);

  const updateIndex = (index, value) => {
    setIndex((prevIndex) => ({
      ...prevIndex,
      [index]: prevIndex[index] + value,
    }));
  };

  const value = {
    health: index.health,
    iq: index.iq,
    happiness: index.happiness,
    updateIndex,
  }

  return (
    <IndexContext.Provider value={value}>
        {children}
    </IndexContext.Provider>
  )
};

export default IndexContextProvider;
