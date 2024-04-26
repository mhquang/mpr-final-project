import { ScrollView, Alert } from "react-native";
import SideJobScreen from "./Work/SideJobScreen";
import MainJobScreen from "./Work/MainJobScreen";
import CrimeScreen from "./Work/CrimeScreen";
import { getRandomAccidents } from "../util/getRandomAccidents";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-context";
function WorkScreen() {
  const authCtx = useContext(AuthContext);
  const age = authCtx.userData?.age;
  useEffect(() => {
    const randomNumber = getRandomAccidents(1, 3);
    if(randomNumber === 1) {
      Alert.alert(
        "Opps",
        `You get traffic accident, you need to go to the hospital!`
      );
      authCtx.updateIndex({
        health: -30,
        happiness: -7,
      })
    }
  }, [age]);
  return (
    <ScreenLayout>
      <ScrollView>
        <SideJobScreen />
        <MainJobScreen />
        <CrimeScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default WorkScreen;
