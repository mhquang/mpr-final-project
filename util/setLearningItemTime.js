import { Alert } from "react-native";
export function setLearningItemTime(name, time, value, updates, authCtx, setIsLearning) {
    authCtx.updateMoney({ value: value})
    setIsLearning(true);
    const timer = setTimeout(() => {
        Alert.alert(
            "Congratulations",
            `You finished ${name}`,
            [
              {
                text: "OK",
                onPress: () => {
                    authCtx.updateIndex(updates);                  
                },
              },
            ]
          );
          setIsLearning(false);
      }, parseInt(time));
      return () => clearTimeout(timer);
}