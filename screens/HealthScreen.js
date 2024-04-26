import { ScrollView, Alert } from "react-native";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import HealthListScreen from "./Health/HealthListScreen";
import { getRandomAccidents } from "../util/getRandomAccidents";
import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-context";
function HealthScreen() {
  const authCtx = useContext(AuthContext);
  const age = authCtx.userData?.age;
  useEffect(() => {
    const randomNumber = getRandomAccidents(1, 2);
    if(randomNumber === 1) {
      Alert.alert(
        "Opps",
        `You get sick, you need to go to the doctor!`
      );
      authCtx.updateIndex({
        health: -3,
        happiness: -2,
      })
    }
  }, [age]);
  return (
    <ScreenLayout>
      <ScrollView>
        <HealthListScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default HealthScreen;
