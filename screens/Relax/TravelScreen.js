import { View, StyleSheet } from "react-native";
import Item from "../../components/ui/Item";
import Title from "../../components/ui/Title";
import { travel } from "../../data/relax/travel";

function TravelScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Travel</Title>
      {travel.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            requirements={item.requirements}
            time={item.time}
            iq={item.iq}
            health={item.health}
            happiness={item.happiness}
            money={item.money}
            btn={"Visit"}
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
export default TravelScreen;