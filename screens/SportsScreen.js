import { View, StyleSheet } from "react-native";
import Item from "../components/ui/Item";
import { sports } from "../data/dummy-sports";
import Title from "../components/ui/Title";
function SportsScreen() {

    return (
        <View style={styles.rootContainer}>
            <Title children={'Sports'} />
            {sports.map((item, index) => {
                return <Item
                    key={index}
                    name={item.name}
                    requirements={item.requirements}
                    time={item.time}
                    health={item.health}
                    iq={item.iq}
                    happiness={item.happiness}
                    money={item.money}
                />
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
});
export default SportsScreen;