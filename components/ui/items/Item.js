import { StyleSheet, View, Text, Alert } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../../store/auth-context";
import { getRandomAccidents } from "../../../util/getRandomAccidents";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import IndexText from "../IndexText";
import * as Progress from "react-native-progress";
import ButtonItem from "../buttons/ButtonItem";
import { formatNumber } from "./../../../util/formatNumber";
function Item({
  name,
  requirements,
  time,
  health,
  iq,
  happiness,
  money,
  salary,
  btn,
  times,
}) {
  const [progress, setProgress] = useState(0);
  const [year, setYear] = useState(0);
  const userHealth = useContext(AuthContext).userData?.health;
  const isSufficient = useContext(AuthContext).userData?.money >= money;

  const { updateIndex, updateMoney } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const indexHandler = () => {
    if (name === "Buy lotery tickets") {
      updateMoney({ value: -25 });
      if (getRandomAccidents(1, 500) === 1) {
        Alert.alert("Congratulation!", "You won a lotery");
        updateIndex({
          money: 50000,
          happiness: 35,
        });
      }
    } else {
      const updates = {};
      if (money) {
        const value = money === "Free" ? 0 : -parseInt(money);
        updates.money = value;
      }

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

      updateIndex(updates);

      if (progress < 1 && year < times) {
        setProgress(progress + 1 / times);
        setYear(year + 1);
      }
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        {(money === "Free" || isSufficient) && (
          <ButtonItem children={btn} onPress={indexHandler} />
        )}
        {salary && <ButtonItem children={btn} onPress={indexHandler} />}
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
          {salary ? (
            <Text style={styles.moneyTitle}>Salary: </Text>
          ) : (
            <Text style={styles.moneyTitle}>Price: </Text>
          )}
          <Text style={styles.money}>
            {salary
              ? `$${formatNumber(salary)}`
              : money === "Free"
              ? "Free"
              : `$${formatNumber(money)}`}
          </Text>
        </View>
      </View>
      {times && (
        <View>
          <Text style={styles.progress}>
            {year}/{times}
          </Text>
          <Progress.Bar
            color={Colors.blueIQ}
            progress={progress}
            width={null}
            height={10}
            borderRadius={6}
          />
        </View>
      )}
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

  progress: {
    fontFamily: "NTSomicMedium",
    fontSize: 13,
    marginBottom: 3,
  },

  pressed: {
    opacity: 0.7,
  },
});
