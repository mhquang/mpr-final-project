import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import ButtonItem from "../buttons/ButtonItem";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import { items } from "../../../data/items/items";
function StorageItem({ name }) {
  const { updateMoney } = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const selectedItem = items.find((item) => item.name === name);
  const sellItemHandler = () => {
    // updateMoney(parseInt(selectedItem.money) / 2, name, "sell");
    updateMoney({
      value: parseInt(selectedItem.money) / 2,
      item: name,
      action: "sell",
    });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View>
        <ButtonItem children={"Sell"} onPress={sellItemHandler} />
      </View>
    </View>
  );
}

export default StorageItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    maxHeight: 200,
    marginTop: 10,
    gap: 20,
    flexDirection: "row",
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  title: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.black,
  },
});
