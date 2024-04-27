import { View, StyleSheet } from "react-native";
import { main_job } from "../../data/work/main-jobs";

import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";
function MainJobScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Main Job</Title>
      {main_job.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            requirements={item.requirements}
            time={item.time}
            health={item.health}
            iq={item.iq}
            happiness={item.happiness}
            salary={item.salary}
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
export default MainJobScreen;
