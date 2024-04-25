import { View, StyleSheet } from "react-native";
import { courses } from "../../data/learning/dummy-courses";
import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";

function LearningCoursesList() {
  return (
    <View style={styles.rootContainer}>
      <Title>Courses</Title>
      {courses.map((course, index) => {
        return (
          <Item
            key={index}
            name={course.name}
            requirements={course.requirements}
            time={course.time}
            health={course.health}
            iq={course.iq}
            happiness={course.happiness}
            money={course.money}
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
export default LearningCoursesList;
