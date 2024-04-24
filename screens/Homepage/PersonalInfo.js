import { View, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { useFonts } from "expo-font";
import { AuthContext } from "../../store/auth-context";

function PersonalInfo() {
    const authCtx = useContext(AuthContext);
    const [fontsLoaded] = useFonts({
        NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
        UnboundedSemibold: require("../../assets/fonts/Unbounded-SemiBold.ttf"),
        UnboundedMedium: require("../../assets/fonts/Unbounded-Medium.ttf"),
      });
      if (!fontsLoaded) {
        return null;
      }
    const userData = authCtx.userData;
    const netWorth = userData?.money + userData?.savings;
    const isSingle = userData?.isSingle;
    const relationshipStatus = isSingle ? "Single" : "In relationship";
    return (
        <View style={styles.rootContainer}>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>Life Scenario: </Text>
            <Text style={styles.text}>Becoming a Pro Programmer</Text>
            </View>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>Age: </Text>
            <Text style={styles.text}>{userData?.age}</Text>
            </View>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>Name: </Text>
            <Text style={styles.text}>{userData?.name}</Text>
            </View>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>Gender: </Text>
            <Text style={styles.text}>{userData?.userGender}</Text>
            </View>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>Relationship Status: </Text>
            <Text style={styles.text}>{relationshipStatus}</Text>
            </View>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>Net Worth: </Text>
            <Text style={styles.text}>${netWorth}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      width: "100%",
    },
    innerContainer: {
      justifyContent: "center",
      padding: 10,
      flexDirection: "row",
      marginHorizontal: 20,
    },
    title: {
      fontSize: 16,
      color: "white",
      fontFamily: "UnboundedSemibold"
    },
    text: {
        fontSize: 16,
        color: "white",
        fontFamily: "NTSomicMedium"
    }
  });

export default PersonalInfo;