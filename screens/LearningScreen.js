import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

import * as Progress from "react-native-progress";
import ScreenLayout from "./ScreenLayout";

function LearningScreen() {
  const authCtx = useContext(AuthContext);

  const health = authCtx.userData?.health / 100;
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Learning Screen</Text>
        <Progress.Bar progress={health} width={200} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LearningScreen;
