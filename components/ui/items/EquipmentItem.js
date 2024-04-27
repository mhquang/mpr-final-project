import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { AuthContext } from "../../../store/auth-context";
import { useContext } from "react";
import ButtonItem from "../buttons/ButtonItem";

function EquipmentItem({ name, money, btn }) {
  const authCtx = useContext(AuthContext);
  const isSufficient = authCtx.userData?.money >= parseInt(money);
  

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const buyHandler = () => {
    const value = -parseInt(money);
    authCtx.updateMoney(value, name, 'buy');
  };
  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.money}>${money}</Text>
      </View>
      <View style={styles.innerContainer}>
        {isSufficient && <ButtonItem children={btn} onPress={buyHandler} />}
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
