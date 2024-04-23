import { View, StyleSheet } from "react-native";
import { sports } from "../data/dummy-sports";

import Item from "../components/ui/Item";
import Title from "../components/ui/Title";
function SportsScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title children={'Sports'} />
            {sports.map((sport, index) => {
                return <Item
                    key={index}
                    name={sport.name}
                    requirements={sport.requirements}
                    time={sport.time}
                    health={sport.health}
                    iq={sport.iq}
                    happiness={sport.happiness}
                    money={sport.money}
                    btn={'Play'}
                />
            })}
        </View>
    )
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
export default SportsScreen;
