import { ScrollView, Alert } from "react-native";
import SportsScreen from "./Relax/SportsScreen";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import LeisureScreen from "./Relax/LeisureScreen";
import TravelScreen from "./Relax/TravelScreen";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { getRandomAccidents } from "../util/getRandomAccidents";
function RelaxScreen() {
  const authCtx = useContext(AuthContext);
  const age = authCtx.userData?.age;
  useEffect(() => {
    const randomNumber = getRandomAccidents(1, 3);
    if(randomNumber === 1) {
      Alert.alert(
        "Opps",
        `You get head pooped by a bird!`
      );
      authCtx.updateIndex({
        happiness: -3,
      })
    }
    
  }, [age]);

  return (
    <ScreenLayout>
      <ScrollView>
        <LeisureScreen />
        <SportsScreen />
        <TravelScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default RelaxScreen;
