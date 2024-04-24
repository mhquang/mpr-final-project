import { View, StyleSheet } from "react-native";
import Item from "../../components/ui/Item";
import Title from "../../components/ui/Title";
import { skills } from "../../data/learning.js/dummy-skills";

function LearningSkillsList() {
  return (
    <View style={styles.rootContainer}>
      <Title>Skills</Title>
      {skills.map((skill, index) => {
        return (
          <Item
            key={index}
            name={skill.name}
            requirements={skill.requirements}
            time={skill.time}
            health={skill.health}
            iq={skill.iq}
            happiness={skill.happiness}
            money={skill.money}
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
export default LearningSkillsList;
