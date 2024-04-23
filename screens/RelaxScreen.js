import { ScrollView } from "react-native";
import SportsScreen from "./SportsScreen";

import ScreenLayout from "./ScreenLayout";
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
