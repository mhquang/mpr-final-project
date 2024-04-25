import { StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "../../../constants/styles";
import { useFonts } from "expo-font";

function InvestmentItem({
  name,
  code,
  money,
  interest,
  isIncrease,
  buttonText,
}) {
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
      <View style={styles.inforContainer}>
        <Text style={styles.code}>{code}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.moneyContainer}>
        <Text style={styles.money}>${money}</Text>
        <Text style={[styles.interest, isIncrease ? styles.green : styles.red]}>
          {isIncrease ? `+${interest}%` : `-${interest}%`}
        </Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

export default InvestmentItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
  },

  inforContainer: {
    flex: 3,
  },

  moneyContainer: {
    flex: 2,
  },

  code: {
    fontFamily: "NTSomicMedium",
    fontSize: 25,
    color: Colors.black,
  },

  name: {
    fontFamily: "NTSomicMedium",
    fontSize: 13,
    color: Colors.gray,
  },

  money: {
    marginTop: 5,
    fontFamily: "UnboundedSemibold",
    fontSize: 18,
  },

  interest: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    marginHorizontal: 5,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },

  button: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
    color: Colors.darkBlue,
  },
  pressed: {
    opacity: 0.7,
  },
});
