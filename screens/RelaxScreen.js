import { ScrollView } from "react-native";
import SportsScreen from "./Relax/SportsScreen";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import LeisureScreen from "./Relax/LeisureScreen";
function RelaxScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <LeisureScreen />
        <SportsScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default RelaxScreen;
