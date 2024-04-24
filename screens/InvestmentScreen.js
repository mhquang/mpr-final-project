import { View, Text, StyleSheet } from "react-native";
import ScreenLayout from "./GeneralComs/ScreenLayout";
function InvestmentScreen() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Investment Screen</Text>
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

export default InvestmentScreen;
