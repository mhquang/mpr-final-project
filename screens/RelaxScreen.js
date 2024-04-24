import { ScrollView } from "react-native";
import SportsScreen from "./Relax/SportsScreen";
import ScreenLayout from "./GeneralComs/ScreenLayout";
function RelaxScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <SportsScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default RelaxScreen;
