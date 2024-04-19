import { useContext, useState } from "react";
import { Alert } from "react-native";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { getUserData, updateUserData } from "../util/firebase";
import SetupContent from "../components/setup/SetupContent";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

function SetupPlayerScreen() {
  const [isSettingup, setIsSettingup] = useState(false);
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const email = authCtx.userData?.userId;
  const name = authCtx.userData?.name;
  const isName = !!name;
  // function handleSetup(input) {
  //     console.log(input.userName);
  // }
  async function handleSetup({ userName, gender }) {
    setIsSettingup(true);
    try {
      await updateUserData("userCharacteristics", email, {
        level: 1,
        age: 0,
        userId: email,
        health: 100,
        iq: 110,
        money: 1000,
        happiness: 100,
        name: userName,
        userGender: gender,
      });
      const userData = await getUserData("userCharacteristics", email);
      authCtx.getUserData(userData);
      console.log(userData);
      navigation.navigate("Home");
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
    return <HomeScreen />;
  }
  return <SetupContent onSetup={handleSetup} />;
}

export default SetupPlayerScreen;
