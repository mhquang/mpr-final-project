import { StyleSheet, View, Text } from "react-native";
import Item from "../../components/ui/Item";
import Title from "../../components/ui/Title";
import { treatment } from "../../data/health/treatment";
import { useContext } from "react";
import { IndexContext } from "../../store/IndexContext";
import { AuthContext } from "../../store/auth-context";
import { useFonts } from "expo-font";

function HealthListScreen() {
    const indexCtx = useContext(IndexContext);
    const authCtx = useContext(AuthContext);
    const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../assets/fonts/Unbounded-SemiBold.ttf"),
      });
      if (!fontsLoaded) {
        return null;
      }
    const age = authCtx.userData?.age;
    const health = indexCtx.health;
    return (
        <View style={styles.rootContainer}>
            <Title>Health</Title>
            <View style={styles.healthInfoContainer}>
            <Text style={styles.titleInfo}>Age: <Text style={styles.text}>{age}</Text></Text>
            <Text style={styles.titleInfo}>Health: <Text style={[styles.text, {color: health <= -50 ? 'red' : 'green'}]}>{health <= -50 ? 'Bad' : 'Good'}</Text></Text>
            </View>
            {treatment.map((item, index) => {
                return (
                    <Item
                        key={index}
                        name={item.name}
                        time={item.time}
                        requirements={item.requirements}
                        health={item.health}
                        iq={item.iq}
                        happiness={item.happiness}
                        money={item.money}
                        btn={"Apply"}
                    />
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 10,
        width: "100%",
    },
    healthInfoContainer: {
        flex: 1,
        marginLeft: 20,
        marginVertical: 15,
    },
      titleInfo: {
        fontSize: 20,
        color: "white",
        fontFamily: "UnboundedSemibold",
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 18,
        color: "white",
        fontFamily: "NTSomicMedium",
      },
});
export default HealthListScreen;
