import { View, StyleSheet } from "react-native";
import { items } from "../../data/items/items";
import EquipmentItem from "../../components/ui/items/EquipmentItem";
import Title from "../../components/ui/Title";
function ItemListScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Items</Title>
      {items.map((item, index) => {
        return (
          <EquipmentItem
            key={index}
            name={item.name}
            money={item.money}
            btn={"Buy"}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ItemListScreen;
