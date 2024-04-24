import { View, StyleSheet } from "react-native";
import Item from "../../components/ui/Item";
import Title from "../../components/ui/Title";
import { leisure } from "../../data/relax/leisure/leisure";
function LeisureScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Leisure</Title>
      {leisure.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            requirements={item.requirements}
            time={item.time}
            health={item.health}
            happiness={item.happiness}
            money={item.money}
            btn={"Take part in"}
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
export default LeisureScreen;
