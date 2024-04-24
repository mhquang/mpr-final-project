import { ScrollView, } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import LearingDegreesList from "./Learning/LearingDegreesList";
import LearningSkillsList from "./Learning/LearningSkillsList";
import LearningCoursesList from "./Learning/LearningCoursesList";

function LearningScreen() {
  const authCtx = useContext(AuthContext);

  const health = authCtx.userData?.health / 100;
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
