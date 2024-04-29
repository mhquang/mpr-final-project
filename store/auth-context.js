import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createContext, useEffect, useState } from "react";
import { updateUserData, deleteDocument } from "../util/firebase";
import { Alert } from "react-native";

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
  deleteWorking: (value) => {},
  resetLife: () => {},
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userData, setUserData] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const [isCreatingNewLife, setIsCreatingNewLife] = useState(false);
  useEffect(() => {
    // console.log(userData);
    const timer = setInterval(() => {
      if (userData) {
        setUserData((prevUserData) => {
          // if (prevUserData.health > 0) {
          //   const randomNum = getRandomAccidents(1, 10);
          //   accidents.forEach((accident) => {
          //     if (accident.id === randomNum) {
          //       if (
          //         accident.title &&
          //         accident.description &&
          //         (accident.happiness || accident.health || accident.iq || accident.money)
          //       ) {
          //         Alert.alert(accident.title, accident.description);
          //         return {
          //           ...prevUserData,
          //           money: prevUserData.money + accident.money,
          //           health: prevUserData.health - accident.health,
          //           iq: prevUserData.iq - accident.iq,
          //           happiness: prevUserData.happiness - accident.happiness,
          //         };
          //       } else {
          //         console.error(
          //           "Happiness, health, or IQ data is missing in accident:",
          //           accident
          //         );
          //       }
          //     }
          //   });
          // }
          if (prevUserData.age + 1 > 50) {
            return {
              ...prevUserData,
              age: prevUserData.age + 1,
              money: prevUserData.money + 100,
              health: prevUserData.health - 10,
              iq: prevUserData.iq - 5,
              happiness: prevUserData.happiness - 5,
              savings: prevUserData.savings + (prevUserData.savings * 5) / 100,
              loan: prevUserData.loan + (prevUserData.loan * 9.9) / 100,
            };
          } else {
            return {
              ...prevUserData,
              age: prevUserData.age + 1,
              money: prevUserData.money + 100,
              health:
                prevUserData.health + 5 > 100 ? 100 : prevUserData.health + 3,
              iq: prevUserData.iq + 5 > 100 ? 100 : prevUserData.iq + 3,
              happiness:
                prevUserData.happiness + 5 > 100
                  ? 100
                  : prevUserData.happiness + 3,
              savings: prevUserData.savings + (prevUserData.savings * 5) / 100,
              loan: prevUserData.loan + (prevUserData.loan * 9.9) / 100,
            };
          }
        });
        AsyncStorage.setItem("userData", JSON.stringify(userData));
      }
    }, 720000); // 12 minute actual: 720000

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
      if (item && action === "buyStocks") {
        updatedUserData?.wallet.push(item);
      }
      if (item && action === "sellStocks") {
        const itemIndex = updatedUserData.wallet.findIndex(
          (walletItem) => walletItem.code === item.code
        );
        if (itemIndex !== -1) {
          updatedUserData.wallet.splice(itemIndex, 1);
        }
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

      if (
        type === "degree" &&
        !updatedUserData.learned.learnedDegrees.includes(name)
      ) {
        updatedUserData?.learned.learnedDegrees.push(name);
      }
      if (
        type === "skill" &&
        !updatedUserData.learned.learnedSkills.includes(name)
      ) {
        updatedUserData?.learned.learnedSkills.push(name);
      }
      if (
        type === "course" &&
        !updatedUserData.learned.learnedCourses.includes(name)
      ) {
        updatedUserData?.learned.learnedCourses.push(name);
      }
      if (
        type === "language" &&
        !updatedUserData.learned.learnedLanguages.includes(name)
      ) {
        updatedUserData?.learned.learnedLanguages.push(name);
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
        currentMainJob.length === 0 &&
        currentSideJob.length <= 1
      ) {
        updatedUserData.currentWorking.main.push(name);
      }

      if (
        type === "side" &&
        currentSideJob.length < 2 &&
        !(currentMainJob.length === 1 && currentSideJob.length === 1)
      ) {
        updatedUserData.currentWorking.side.push(name);
      }

      if (type === "crime") {
        updatedUserData.currentWorking.crime.push(name);
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };
  
  const deleteWorking = ({ name, type }) => {
    if (userData && name) {
      const updatedUserData = { ...userData };
      const currentMainJob = updatedUserData.currentWorking.main;
      const currentSideJob = updatedUserData.currentWorking.side;
      if (type === "side") {
        const jobIndex = currentSideJob.indexOf(name);
        if (jobIndex !== -1) {
          currentSideJob.splice(jobIndex, 1);
        }
      }
      if (type === "main") {
        if (currentMainJob.length === 1) {
          currentMainJob.splice(0, 1);
        }
      }
      if (type === "crime") {
        if (updatedUserData.currentWorking.crime.length === 1) {
          updatedUserData.currentWorking.crime.splice(0, 1);
        }
      }
      setUserData(updatedUserData);
      AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  function resetLife() {
    const email = userData?.userId;
    async function reset() {
      try {
        setIsCreatingNewLife(true);
        await deleteDocument("userCharacteristics", email);
      } catch (error) {
        console.log(error);
      }
      setAuthToken(null);
      setUserData(null);
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("userData");
      setIsCreatingNewLife(false);
    }
    Alert.alert("You are dead!", "You are dead! You are dead! You are dead!", [
      {
        text: "OK",
        onPress: () => {
          reset();
        },
      },
    ]);
    return;
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
    deleteWorking: deleteWorking,
    resetLife: resetLife,
    logout: logout,
  };

  if (isSaving) {
    return <LoadingOverlay message="Saving your state..." />;
  }
  if (isCreatingNewLife) {
    return (
      <LoadingOverlay message="Creating a new life...Please login to continue!" />
    );
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
