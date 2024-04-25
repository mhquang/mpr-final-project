import { View, StyleSheet } from "react-native";
import { degrees } from "../../data/learning/dummy-degrees";
import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";

function LearingDegreesList() {
  return (
    <View style={styles.rootContainer}>
      <Title>Degrees</Title>
      {degrees.map((degree, index) => {
        return (
          <Item
            key={index}
            name={degree.name}
            requirements={degree.requirements}
            time={degree.time}
            health={degree.health}
            iq={degree.iq}
            happiness={degree.happiness}
            money={degree.money}
            btn={"Apply"}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default LearingDegreesList;
