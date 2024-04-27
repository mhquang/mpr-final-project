import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";

function StorageItem({ name }) {
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
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
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  title: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    flex: 1,
    color: Colors.black,
  },
});
