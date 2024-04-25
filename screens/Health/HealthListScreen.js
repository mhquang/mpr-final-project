import { StyleSheet, View } from "react-native";
import Item from "../../components/ui/Item";
import Title from "../../components/ui/Title";
import { treatment } from "../../data/health/treatment";

function HealthListScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>Treatment</Title>
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
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});
export default HealthListScreen;
