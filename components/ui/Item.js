import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import IndexText from "./IndexText";

function Item({ name, requirements, time, health, iq, happiness, money, btn }) {
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../assets/fonts/Unbounded-Medium.ttf"),
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
        >
          <Text style={styles.apply}>{btn}</Text>
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.requireContainer}>
          {requirements.map((requirement, index) => (
            <Text key={index} style={styles.require}>
              - {requirement}
            </Text>
          ))}
        </View>

        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={20} />
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.indexContainer}>
          {health && (
            <>
              <IndexText isIncrease={health.isIncrease}>
                {health.index}
              </IndexText>
              <Ionicons name="heart" color={Colors.redHealth} size={20} />
            </>
          )}
          {iq && (
            <>
              <IndexText isIncrease={iq.isIncrease}>{iq.index}</IndexText>
              <FontAwesome6 name="brain" color={Colors.blueIQ} size={20} />
            </>
          )}
          {happiness && (
            <>
              <IndexText isIncrease={happiness.isIncrease}>
                {happiness.index}
              </IndexText>
              <Ionicons name="happy" color={Colors.yellowHappiness} size={20} />
            </>
          )}
        </View>

        <Text style={styles.money}>{money}</Text>
      </View>
    </View>
  );
}

export default Item;

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
    gap: 20
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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

  requireContainer: {
    flex: 1,
  },
  require: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
  },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  time: {
    marginLeft: 5,
    fontFamily: "UnboundedMedium",
  },

  indexContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
  },

  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.7,
  },
});
