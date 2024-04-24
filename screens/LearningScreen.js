import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import ScreenLayout from "./ScreenLayout";

function LearningScreen() {
  const authCtx = useContext(AuthContext);

  const health = authCtx.userData?.health / 100;
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Learning Screen</Text>
        <Progress.Bar progress={0.3} width={200} />
      </View>
    </ScreenLayout>
  );
}

export default LearningScreen;
