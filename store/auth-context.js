import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  userData: undefined,
  token: "",
  isAuthenticated: false,
  getUserData: (userData) => {},
  updateIndex: (indexUpdates) => {},
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      if (userData) {
        setUserData((prevUserData) => ({
          ...prevUserData,
          age: prevUserData.age + 1,
        }));
        AsyncStorage.setItem("userData", JSON.stringify(userData));
      }
    }, 30000); // 1 minute

    return () => clearInterval(timer);
  }, [userData]);

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function getUserData(userData) {
    setUserData(userData);
    AsyncStorage.setItem("userData", JSON.stringify(userData));
  }

  const updateIndex = (indexUpdates) => {
    if (userData) {
      const updatedUserData = { ...userData };
      for (const indexName in indexUpdates) {
        if (indexUpdates.hasOwnProperty(indexName)) {
          updatedUserData[indexName] += indexUpdates[indexName];
        }
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };
  

  function logout() {
    setAuthToken(null);
    setUserData(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userData");
  }

  const value = {
    userData: userData,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    getUserData: getUserData,
    updateIndex: updateIndex,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
