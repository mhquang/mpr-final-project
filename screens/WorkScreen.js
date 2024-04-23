import { ScrollView } from "react-native";
import SideJobScreen from "./SideJobScreen";
import MainJobScreen from "./MainJobScreen";
import CrimeScreen from "./CrimeScreen";

import ScreenLayout from "./ScreenLayout";
function WorkScreen() {
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
