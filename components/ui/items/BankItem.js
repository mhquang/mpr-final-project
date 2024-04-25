import { StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "../../../constants/styles";
import { useFonts } from "expo-font";
import { useState } from "react";

function BankItem({ name, isDeposit, interest, money, savings, isLoan }) {
  const [loanMoney, setLoanMoney] = useState(0);

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
        <View>
          <Text style={styles.name}>{name}</Text>
          {interest && (
            <Text style={styles.interest}>
              Interest:{" "}
              <Text
                style={[styles.interest, isDeposit ? styles.green : styles.red]}
              >
                {isDeposit ? `${interest}%/year` : `${interest}%/year`}
              </Text>
            </Text>
          )}
        </View>
        {isLoan ? (
          <Text style={styles.money}>${loanMoney}</Text>
        ) : (
          <Text style={styles.money}>
            {isDeposit ? `$${money}` : `$${savings}`}
          </Text>
        )}
      </View>
      {isLoan ? (
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonText}>$100</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonText}>$1000</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonText}>$100K</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonText}>10%</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonText}>25%</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonText}>50%</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default BankItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },

  inforContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },

  name: {
    fontFamily: "NTSomicMedium",
    fontSize: 23,
    color: Colors.black,
    marginBottom: 3,
  },

  interest: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    marginRight: 30,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },

  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 18,
    color: Colors.gray,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 30,
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
