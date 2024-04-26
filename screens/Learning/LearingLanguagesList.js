import { View, StyleSheet } from "react-native";
import { languages } from "../../data/learning/dummy-languages";
import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";

function LearingLanguagesList() {
  return (
    <View style={styles.rootContainer}>
      <Title>Languages</Title>
      {languages.map((language, index) => {
        return (
          <Item
            key={index}
            name={language.name}
            requirements={language.requirements}
            time={language.time}
            health={language.health}
            iq={language.iq}
            happiness={language.happiness}
            money={language.money}
            btn={"Learn"}
            times={language.times}
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
export default LearingLanguagesList;
