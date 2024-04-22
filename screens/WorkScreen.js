import { Text, View, StyleSheet } from "react-native";
import ScreenLayout from "./ScreenLayout";

function WorkScreen() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Work Screen</Text>
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

export default WorkScreen;
