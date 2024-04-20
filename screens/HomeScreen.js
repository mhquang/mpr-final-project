import { StyleSheet, Text, View } from "react-native";
import Item from "../components/ui/Item";

function HomeScreen() {
  const test = {
    name: "Bachelor of Information Systems and Technology",
    requirements: [
      "Bachelor's degree in Artificial Intelligence",
      "At least 18 years old",
    ],
    time: "1 year",
    health: { isIncrease: true, index: "1" },
    iq: { isIncrease: false, index: "1" },
    happiness: { isIncrease: false, index: "2" },
    money: "$800 - $1000",
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Item
        name={test.name}
        requirements={test.requirements}
        time={test.time}
        health={test.health}
        iq={test.iq}
        happiness={test.happiness}
        money={test.money}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
});
