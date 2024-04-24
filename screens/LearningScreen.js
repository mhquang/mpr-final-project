import { ScrollView, } from "react-native";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import LearingDegreesList from "./Learning/LearingDegreesList";
import LearningSkillsList from "./Learning/LearningSkillsList";
import LearningCoursesList from "./Learning/LearningCoursesList";

function LearningScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <LearingDegreesList />
        <LearningSkillsList />
        <LearningCoursesList />
      </ScrollView>
    </ScreenLayout>
  );
}

export default LearningScreen;