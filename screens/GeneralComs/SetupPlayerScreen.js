import { useContext, useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { useNavigation } from "@react-navigation/native";
import { getUserData, updateUserData } from "../../util/firebase";

import LoadingOverlay from "../../components/ui/LoadingOverlay";
import SetupContent from "../../components/setup/SetupContent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainScreen from "./MainScreen";

function SetupPlayerScreen() {
  const [isSettingup, setIsSettingup] = useState(false);
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  useLayoutEffect(() => {
    async function fetchUserData() {
      try {
        const value = await AsyncStorage.getItem("userData");
        if (value !== null) {
          console.log(value);
          authCtx.getUserData(JSON.parse(value));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  const email = authCtx.userData?.userId;
  const name = authCtx.userData?.name;
  const isName = !!name;

  async function handleSetup({ userName, gender }) {
    setIsSettingup(true);
    try {
      await updateUserData("userCharacteristics", email, {
        userId: email,
        name: userName,
        age: 0,
        userGender: gender,
        health: 20,
        iq: 20,
        happiness: 20,
        money: 1000,
        savings: 500,
        isSingle: true,
        friends: []
      });
      const userData = await getUserData("userCharacteristics", email);
      authCtx.getUserData(userData);
      console.log(userData);
      navigation.navigate("MainScreen");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsSettingup(false);
    }
  }
  if (isSettingup) {
    return <LoadingOverlay message="Get starting..." />;
  }
  if (isName) {
    return <MainScreen />;
  }
  return <SetupContent onSetup={handleSetup} />;
}

export default SetupPlayerScreen;
