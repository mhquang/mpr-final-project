import { StyleSheet, View, Text, Alert } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import { formatNumber } from "./../../../util/formatNumber";

import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import IndexText from "../IndexText";
import ButtonItem from "../buttons/ButtonItem";
import { crime } from './../../../data/work/crime';

function WorkItem({
  name,
  requirements,
  time,
  health,
  iq,
  happiness,
  salary,
  btn,
  type,
  isWorking,
}) {
  const authCtx = useContext(AuthContext);
  const userHealth = authCtx.userData?.health;
  const mainJob = authCtx.userData?.currentWorking.main;
  const sideJob = authCtx.userData?.currentWorking.side

  const isButtonShown = mainJob === "" || !!mainJob && sideJob.length < 1;

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const onPressHandler = () => {
    const updates = {};

    if (salary) {
      const value = +salary;
      updates.money = value;
    }

    if (health) {
      const { isIncrease, index } = health;
      const value = isIncrease ? parseInt(index) : -parseInt(index);
      if (isIncrease || userHealth > 20) {
        updates.health = value;
      } else {
        Alert.alert(
          "Warning",
          "Your health is low, you need to get treatments!"
        );
        return;
      }
    }

    if (iq) {
      const { isIncrease, index } = iq;
      const value = isIncrease ? parseInt(index) : -parseInt(index);
      updates.iq = value;
    }

    if (happiness) {
      const { isIncrease, index } = happiness;
      const value = isIncrease ? parseInt(index) : -parseInt(index);
      updates.happiness = value;
    }

    authCtx.updateIndex(updates);

    authCtx.updateWorking({ name: name, type: type });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        {type === "main" && mainJob === "" && (
          <ButtonItem children={"main"} onPress={onPressHandler} />
        )}
        {type === "side" && isButtonShown && (
          <ButtonItem children={"side"} onPress={onPressHandler} />
        )}
        {type === "crime" && (
          <ButtonItem children={"crime"} onPress={onPressHandler} />
        )}
        {isWorking && <Text style={styles.require}>Working</Text>}
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.requireContainer}>
          {requirements &&
            requirements.map((requirement, index) => (
              <Text key={index} style={styles.require}>
                {requirement}
              </Text>
            ))}
        </View>
        <View style={styles.timeContainer}>
          {time && <Ionicons name="time-outline" size={20} />}
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

        <View style={styles.salaryContainer}>
          <Text style={styles.moneyTitle}>Salary: </Text>
          <Text style={styles.money}>${formatNumber(salary)}</Text>
        </View>
      </View>
    </View>
  );
}

export default WorkItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    maxHeight: 250,
    marginTop: 10,
    gap: 10,
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
    color: Colors.gray,
  },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  time: {
    marginLeft: 5,
    fontFamily: "UnboundedMedium",
  },

  indexContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    flex: 1,
  },

  salaryContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  moneyTitle: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.gray,
  },

  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 17,
  },

  pressed: {
    opacity: 0.7,
  },
});
