import { Text, View } from "react-native";
import * as Progress from "react-native-progress";

function LearningScreen() {
  return (
    <View>
      <Text>Learning Screen</Text>
      <Progress.Bar progress={0.3} width={200} />
    </View>
  );
}

export default LearningScreen;