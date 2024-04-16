import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useEffect, useState } from "react";
import { getUserData } from "../util/firebase";

export const AuthContext = createContext({
  userData: undefined,
  token: "",
  isAuthenticated: false,
  getUserData: (userData) => {},
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userData, setUserData] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function getUserData(userData) {
    setUserData(userData);
  }

  function logout() {
    setAuthToken(null);
    setUserData(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    userData: userData,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    getUserData: getUserData,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
