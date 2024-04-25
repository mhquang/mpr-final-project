import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import IndexText from "../IndexText";
import { useContext } from "react";
import { IndexContext } from "../../../store/IndexContext";

function EquipmentItem({ name, money, btn }) {
  const { updateIndex } = useContext(IndexContext);
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        <Pressable
          style={({ pressed }) => [
            styles.applyButton,
            pressed && styles.pressed,
          ]}
        //   onPress={indexHandler}
        >
          <Text style={styles.apply}>{btn}</Text>
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.money}>{money}</Text>
      </View>
    </View>
  );
}

export default EquipmentItem;

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
    fontSize: 20,
    flex: 1,
    color: Colors.black,
  },

  applyButton: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  apply: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
    color: Colors.darkBlue,
  },









  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.7,
  },
});
