import { Alert } from "react-native";
export function setItemTime(name, time, value, updates, authCtx) {
  authCtx.updateMoney({ value: value });
  const timer = setTimeout(() => {
    Alert.alert("Congratulations", `You finished ${name}`, [
      {
        text: "OK",
        onPress: () => {
          authCtx.updateIndex(updates);
        },
      },
    ]);
  }, parseInt(time));
  return () => clearTimeout(timer);
}
