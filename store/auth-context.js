import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { updateUserData } from "../util/firebase";
import LoadingOverlay from "../components/ui/LoadingOverlay";
export const AuthContext = createContext({
  userData: undefined,
  token: "",
  isAuthenticated: false,
  getUserData: (userData) => {},
  updateIndex: (indexUpdates) => {},
  updateMoney: (value) => {},
  sellItem: (item) => {},
  updateFriends: (friend) => {},
  removeFriends: (friend) => {},
  dateFriends: (friend) => {},
  breakUpFriends: () => {},
  updateLearning: (value) => {},
  updateWorking: (value) => {},
  resetLife: () => {},
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userData, setUserData] = useState();
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (userData) {
        setUserData((prevUserData) => ({
          ...prevUserData,
          age: prevUserData.age + 1,
          money: prevUserData.money + 100,
          savings: prevUserData.savings + (prevUserData.savings * 5) / 100,
          loan: prevUserData.loan + (prevUserData.loan * 9.9) / 100,
        }));
        AsyncStorage.setItem("userData", JSON.stringify(userData));
      }
    }, 720000); // 12 minute

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
          if (
            updatedUserData[indexName] >= 0 &&
            updatedUserData[indexName] <= 100 &&
            indexName !== "money"
          ) {
            updatedUserData[indexName] += indexUpdates[indexName];
          }
          if (updatedUserData[indexName] >= 0 && indexName === "money") {
            updatedUserData[indexName] += indexUpdates[indexName];
          }
          if (updatedUserData[indexName] < 0) {
            updatedUserData[indexName] = 0;
          }
          if (
            updatedUserData[indexName] > 100 &&
            (indexName === "health" ||
              indexName === "iq" ||
              indexName === "happiness")
          ) {
            updatedUserData[indexName] = 100;
          }
        }
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const updateMoney = ({ value, item, action }) => {
    if (userData) {
      const updatedUserData = { ...userData };
      if (value) {
        updatedUserData["money"] += value;
      }
      if (item && action === "buy") {
        updatedUserData?.items.push(item);
      }
      if (item && action === "sell") {
        const itemIndex = updatedUserData.items.indexOf(item);
        if (itemIndex !== -1) {
          updatedUserData.items.splice(itemIndex, 1);
        }
      }
      if (action === "deposit") {
        updatedUserData["savings"] -= value;
      }
      if (action === "withdrawal") {
        updatedUserData["savings"] -= value;
      }
      if (action === "loan") {
        updatedUserData["loan"] += value;
      }
      if (action === "loanRepayment") {
        updatedUserData["loan"] += value;
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const sellItem = (item) => {
    if (userData) {
      const updatedUserData = { ...userData };
      const itemIndex = updatedUserData.items.indexOf(item);
      if (itemIndex !== -1) {
        updatedUserData.items.splice(itemIndex, 1);
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const updateFriends = (friend) => {
    if (userData) {
      const updatedUserData = { ...userData };
      updatedUserData?.friends.push(friend);
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const removeFriends = (friend) => {
    if (userData) {
      const updatedUserData = { ...userData };
      const friendIndex = updatedUserData.friends.indexOf(friend);
      if (friendIndex !== -1) {
        updatedUserData.friends.splice(friendIndex, 1);
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const dateFriends = (friend) => {
    if (userData) {
      const updatedUserData = { ...userData };
      if (updatedUserData.lover.length === 0) {
        updatedUserData?.lover.push(friend);
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const breakUpFriends = () => {
    if (userData) {
      const updatedUserData = { ...userData };
      if (updatedUserData.lover.length === 1) {
        updatedUserData.lover.splice(0, 1);
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const updateLearning = ({ name, type }) => {
    if (userData && name) {
      const updatedUserData = { ...userData };

      if (type === "degree" && !updatedUserData.learnedDegrees.includes(name)) {
        updatedUserData?.learnedDegrees.push(name);
        console.log(updatedUserData.learnedDegrees);
      }
      if (type === "skill" && !updatedUserData.learnedSkills.includes(name)) {
        updatedUserData?.learnedSkills.push(name);
        console.log(updatedUserData.learnedSkills);
      }
      if (type === "course" && !updatedUserData.learnedCourses.includes(name)) {
        updatedUserData?.learnedCourses.push(name);
        console.log(updatedUserData.learnedCourses);
      }
      if (
        type === "language" &&
        !updatedUserData.learnedLanguages.includes(name)
      ) {
        updatedUserData?.learnedLanguages.push(name);
        console.log(updatedUserData.learnedLanguages);
      }

      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const updateWorking = ({ name, type }) => {
    if (userData && name) {
      const updatedUserData = { ...userData };

      const currentMainJob = updatedUserData.currentWorking.main;
      const currentSideJob = updatedUserData.currentWorking.side;

      if (
        type === "main" &&
        currentMainJob === "" &&
        currentSideJob.length < 1
      ) {
        updatedUserData.currentWorking.main = name;
      }

      if (
        type === "side" &&
        currentSideJob.length < 2 &&
        !(currentMainJob && currentSideJob.length === 1)
      ) {
        updatedUserData.currentWorking.side.push(name);
      }

      if (type === "crime" && currentMainJob === "") {
        updatedUserData.currentWorking.crime = name;
      }

      console.log(updatedUserData.currentWorking);
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  function resetLife() {
    setAuthToken(null);
    setUserData(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userData");
  }

  async function logout() {
    setIsSaving(true);
    const email = userData?.userId;
    try {
      await updateUserData("userCharacteristics", email, userData);
    } catch (error) {
      console.log(error);
    }
    setAuthToken(null);
    setUserData(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userData");
    setIsSaving(false);
  }

  const value = {
    userData: userData,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    getUserData: getUserData,
    updateIndex: updateIndex,
    updateMoney: updateMoney,
    sellItem: sellItem,
    updateFriends: updateFriends,
    removeFriends: removeFriends,
    dateFriends: dateFriends,
    breakUpFriends: breakUpFriends,
    updateLearning: updateLearning,
    updateWorking: updateWorking,
    resetLife: resetLife,
    logout: logout,
  };

  if (isSaving) {
    return <LoadingOverlay message="Saving your state..." />;
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
