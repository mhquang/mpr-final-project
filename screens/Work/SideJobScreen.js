import { View, StyleSheet } from "react-native";
import { side_job } from "../../data/work/side-jobs";

import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";
function SideJobScreen() {
  return (
        <View style={styles.rootContainer}>
          <Title>Side Job</Title>
          {side_job.map((item, index) => {
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
export default SideJobScreen;
